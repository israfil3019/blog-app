import React, {useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
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
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 285,
    height: 380,
  },
  media: {
    maxWidth: 280,
    margin: 5,
    maxHeight: 200,
    minHeight: 200,
    display: "flex",
    alignItems: "middle",
    justifyContent: "center",
    cursor: "pointer"
  },
  image:{
    borderRadius: 5,
  },
  avatar: {
    backgroundColor: red[500],
  },
  title:{
    paddingBottom: 0,
  }
}));

export default function BlogCard({ contact }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const currentUser = useContext(AuthContext);
  const history = useHistory();


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDetails = (id) => {
    if (!currentUser?.currentUser?.uid) {
      alert("Please Login for Details!");
    } else {
      history.push(`/details/${id}`);
    }
  };

  return (
    <Card
      className={classes.root}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <Typography>{contact.author.substr(0, 1)}</Typography>
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
        title={contact.author}
        subheader={contact.published_date}
      />
      <CardMedia
        className={classes.media}
        image={contact.image}
        title={contact.title}
        onClick={() => handleDetails(contact.id)}
      >
        <img className={classes.image} src={contact.url} alt="card_media" />
      </CardMedia>
      <CardContent className={classes.title} >
        <Typography variant="body2"  component="p">
          {contact.title}
        </Typography>
      </CardContent>
      <CardActions>
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
