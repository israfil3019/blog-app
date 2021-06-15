import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import blogkey from "../assets/blogkey.jpg";
import { addCard } from "../helpers/firebase";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import blogPng from "../assets/blog.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    padding: theme.spacing(13),
    backgroundColor: "#046582",
  },
  blogImg: {
    width: 200,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "#046582",
    },
  },
  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#046582",
  },
}));

const NewBlog = () => {
  const classes = useStyles();
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [text, setText] = useState();
  const { currentUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addCard({
      title: title,
      url: url,
      text: text,
      author: currentUser.email,
    });
    setTitle("");
    setUrl("");
    setText("");
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={blogkey} alt="blog" className={classes.blogImg} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          ── New Blog ──
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={title}
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="image"
                label="Image URL"
                type="text"
                id="image"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                required
                label="Content"
                multiline
                value={text}
                fullWidth
                rows={15}
                variant="outlined"
                onChange={(e) => setText(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default NewBlog;
