// React
import React, { FC } from 'react'
// Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Container,
  IconButton,
  Paper,
} from '@material-ui/core'
// Icons
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(() => 
  createStyles({
    imagePaper: {
      alignItems: 'flex-end',
      backgroundColor: 'lightgray',
      display: 'flex',
      height: 300,
      justifyContent: 'flex-end',
      margin: '36px auto 36px',
      width: 300,
    },
    cameraIcon: {
      backgroundColor: 'darkgray',
      marginRight: 8,
      marginBottom: 8,
    },
  })
)

const PostEdit: FC = () => {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='md'>
      <Paper className={classes.imagePaper}>
        <IconButton className={classes.cameraIcon}>
          <PhotoCameraIcon />
        </IconButton>
      </Paper>
    </Container>
  )
}

export default PostEdit
