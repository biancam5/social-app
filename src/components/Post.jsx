import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <><Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>}
        action={<IconButton aria-label="settings">
          <MoreVert />
        </IconButton>}
        title="Mina Myoui"
        subheader="May 14, 2022" />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Seoul view" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive view of Seoul it´s stunning! You definitely should visit this beautiful country!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card><Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVert />
          </IconButton>}
          title="Alison Harrington"
          subheader="February, 2022" />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/3018977/pexels-photo-3018977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Seoul view" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            We have fun !  We ate delicious food and bought amazing clothes 
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card><Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVert />
          </IconButton>}
          title="Lee Hyunjin"
          subheader="January, 2021" />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Seoul view" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            I had a good time! It was an wonderful restaurant, the food was delicious too!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card><Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVert />
          </IconButton>}
          title="Choi Soohyun"
          subheader="September 6, 2022" />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/4109084/pexels-photo-4109084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Seoul view" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Delicious pizza with friends! 
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card><Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVert />
          </IconButton>}
          title="Park Yuna"
          subheader="April 14, 2022" />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/2848492/pexels-photo-2848492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           It was a fantastic date with my friends!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card></>
  );
};

export default Post;
