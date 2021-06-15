import React, { useContext, useEffect, useState } from "react";
import firebase from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BlogCard from "../components/BlogCard";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(5),
    },
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },
  mainRoot: {
    marginTop: 70,
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  // const post = props.location.post;
  // console.log(post);
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  // const { postList, isLoading } = useFetch();
  // console.log("yüklenen postlar: ", postList);

  const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [postList, setPostList] = useState();

    useEffect(() => {
      setIsLoading(true);
      const postsRef = firebase.database().ref("posts");
      postsRef.on("value", (snapshot) => {
        const posts = snapshot.val();
        const postArray = [];
        for (let id in posts) {
          postArray.push({ id, ...posts[id] });
        }
        setPostList(postArray);
        setIsLoading(false);
      });
    }, []);
    return { postList, isLoading };
  };

  return (
    <div className={classes.mainRoot}>
      <Typography className={classes.title} variant="h3" noWrap>
        ──── Dashboard ────
      </Typography>
      <>
        <Grid container className={classes.root} spacing={5} justify="center">
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              <BlogCard />
              {currentUser?.map((post, index) => (
                <Grid key={index} item>
                  <BlogCard post={post} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

// const useFetch = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [postList, setPostList] = useState();

//   useEffect(() => {
//     setIsLoading(true);
//     const postsRef = firebase.database().ref("posts");
//     postsRef.on("value", (snapshot) => {
//       const posts = snapshot.val();
//       const postArray = [];
//       for (let id in posts) {
//         postArray.push({ id, ...posts[id] });
//       }
//       setPostList(postArray);
//       setIsLoading(false);
//     });
//   }, []);
//   return { postList, isLoading };
// };

export default Dashboard;
