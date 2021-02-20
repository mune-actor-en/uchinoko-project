//React
import React, {
  FC,
  useState
} from 'react';
// Material-UI
import {
  makeStyles,
  createStyles,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  IconButton,
  Typography,
  ListItemAvatar
} from '@material-ui/core'
// icons
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
// types
import { Post } from '../types/Post'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      alignItems: 'center',
      maxWidth: 450,
      marginTop: 20,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: ' #FE6B8B',
    },
  })
);

const PostContent: FC<Post> = ({
  id,
  imagePath,
  description,
  isPublished,
  petId,
  userId,
  createdAt,
  updatedAt
}) => {
  const classes = useStyles();

  const handleClick = () => {};

  return (
    <Container className={classes.root} maxWidth='md'>
      <Card>
        <CardHeader avatar={<Avatar></Avatar>}>{petId}</CardHeader>
        <Avatar></Avatar>
        <CardMedia image={imagePath}></CardMedia>
        <CardContent>
          <Typography align='center' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
};
export default PostContent;