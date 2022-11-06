import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Jeongyeon"
            src="https://pbs.twimg.com/media/ElgYlLTW0AAvz_l.jpg"
          />
          <Avatar
            alt="Dahyun"
            src="https://i.pinimg.com/736x/7d/e4/ab/7de4abe6cec1376ebc26e7d8cf99a8bb.jpg"
          />
          <Avatar
            alt="Mina"
            src="https://i.pinimg.com/originals/53/5a/26/535a267bbf28758570bdb2a0884063b5.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Sana"
            src="https://i.pinimg.com/736x/93/36/96/93369696286745c79beea9c48cbc2414.jpg"
          />
          <Avatar
            alt="Momo"
            src="https://i.pinimg.com/736x/8d/6e/10/8d6e10c5233959cf1193c309d0f02477.jpg"
          />
          <Avatar
            alt="Chaeyoung "
            src="https://pbs.twimg.com/media/EJf-CYxXsAE47eU.jpg:large"
          />
          <Avatar
            alt="Jihyo"
            src="https://preview.redd.it/4fa3z6yoazz21.jpg?auto=webp&s=9c619af7b0116a6188b33d9fd75ec80ed33aa9da"
          />
          <Avatar
            alt="Tzuyu"
            src="https://i.pinimg.com/originals/f1/c0/1b/f1c01babda20b7a1da3667a56f935b76.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Hello !"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Busan recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
