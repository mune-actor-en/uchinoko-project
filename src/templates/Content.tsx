import React, { FC, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';

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

type Props = {
  description: string;
  title: string;
  postDate: string;
  path: string;

}

const Content: FC<Props> = ({ description,title, postDate, path }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className={classes.root}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              N
            </Avatar>
          }
          title={title}
          subheader={postDate}
        />
        <CardMedia
          className={classes.media}
          image={path}
          title={title}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          ></IconButton>
        </CardActions>
      </Card>
    </Container>
  );
}
export default Content;