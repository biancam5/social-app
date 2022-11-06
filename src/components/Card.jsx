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

const SocialCard = () => {
  return (
    <><Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "green" }} aria-label="recipe" >
          R
        </Avatar>}
        action={<IconButton aria-label="settings">
          <MoreVert />
        </IconButton>}
        title="Lee Ryujin"
        subheader="May 14, 2022" />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Seoul view" />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
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
          avatar={<Avatar sx={{ bgcolor: "orange" }} aria-label="recipe">
            A
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
          alt="Food" />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
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
      </Card>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            H
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVert />
          </IconButton>}
          title="Kim Hyuna"
          subheader="March 5, 2022" />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="" />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
           This spring is full of love
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
      </Card>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            H
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
          <Typography variant="h6" color="text.secondary">
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
          avatar={<Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
            S
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
          <Typography variant="h6" color="text.secondary">
            Incredible pizza with friends! 
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
          avatar={<Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            Y
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
          <Typography variant="h6" color="text.secondary">
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
      </Card>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
            N
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVert />
          </IconButton>}
          title="Kim Namjun"
          subheader="November 5, 2022" />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1521022887356-1db35c7bbf1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
          alt="" />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
           Cold day in Seoul but all get better with delicious food!
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
      </Card>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "orange" }} aria-label="recipe">
            J
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVert />
          </IconButton>}
          title="James Smith"
          subheader="July 25, 2022" />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1526199119161-4be1e3368d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="" />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
           Vacations on Seoul, I am going to meet with my korean friends in a beautiful restaurant! I missed this city!
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
      </Card>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
            Y
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVert />
          </IconButton>}
          title="Yamato Ishida"
          subheader="August 8, 2022" />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="" />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
          Enjoying in a Cat cafe near my place
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
      </Card>
      </>
  );
};

export default SocialCard;
