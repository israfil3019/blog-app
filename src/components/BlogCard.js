import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BlogCard({ post }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const showContent = () => {
    history.push({
      pathname: "/details",
      post: post,
    });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const { author, content, image, published_date, title } = post;

  return (
    <Card
      className={classes.root}
      onClick={(e) => {
        e.preventDefault();
        showContent();
      }}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            aria-controls="detail-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={post.author}
        subheader={post.published_date}
      />
      <Menu
        id="detail-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <Link to="/details">
          <MenuItem onClick={handleClose}>Details</MenuItem>
        </Link>
        <Link to="/update">
          <MenuItem onClick={handleClose}>Update</MenuItem>
        </Link>
        <Link>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Link>
      </Menu>
      <CardMedia
        className={classes.media}
        image={post.image}
        title={post.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
