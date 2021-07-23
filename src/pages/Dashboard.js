import React, { useContext, useEffect, useState } from "react";
import { useFetch } from "../helpers/firebase";
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
  // const contact = props.location.contact;
  // console.log(contact);
  // const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  const { contactList, isLoading } = useFetch();
  console.log("yüklenen cardlar: ", contactList);

  return (
    <div className={classes.mainRoot}>
      <Typography className={classes.title} variant="h4" noWrap>
        ──── Dashboard ────
      </Typography>
      <>
        <Grid container className={classes.root} spacing={5} justify="center">
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              {contactList?.map((contact, index) => (
                <Grid key={index} item>
                  <BlogCard contact={contact} key={index} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default Dashboard;
