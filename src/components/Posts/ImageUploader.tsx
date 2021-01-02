// React
import React, { FC, useCallback } from 'react'
// Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Paper,
  Theme,
} from '@material-ui/core'
// Icons
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
// lib
import { generateRandomString } from '../../lib/Util'
// Firestore
import { storage } from '../../firebase'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imagePaper: {
      alignItems: 'flex-end',
      backgroundColor: 'lightgray',
      display: 'flex',
      height: 300,
      justifyContent: 'flex-end',
      margin: '36px auto 36px',
      position: 'relative',
      width: 300,
    },
    postImage: {
      height: '100%',
      objectFit: 'cover',
      width: '100%',
    },
    cameraIcon: {
      backgroundColor: 'darkgray',
      height: 48,
      marginRight: 8,
      marginBottom: 8,
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: 48,
    },
    iconLabel: {
      height: 24,
    },
    photoInput: {
      display: 'none',
    },
  })
)

type Props = {
  imagePath: string
  setImagePath: React.Dispatch<React.SetStateAction<string>>
}

const ImageUploader: FC<Props> = ({ imagePath, setImagePath }) => {
  const classes = useStyles()

  // 投稿画像をFirestoreに保存します
  const uploadImage = useCallback(e => {
    // Setting file
    const file = e.target.files
    let blob = new Blob(file, { type: 'image/jpeg' })
    const fileName = generateRandomString()

    // Setting Cloud Firestore
    const uploadRef = storage.ref('image').child(fileName)
    const uploadTask = uploadRef.put(blob)

    // Save to Firestore
    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        setImagePath(downloadURL)
      })
    })
  }, [setImagePath])

  return (
    <Paper className={classes.imagePaper}>
      {imagePath && (
        <img
          alt='post'
          className={classes.postImage}
          src={imagePath}
        />
      )}
      <IconButton className={classes.cameraIcon}>
        <label className={classes.iconLabel}>
          <PhotoCameraIcon />
          <input
            className={classes.photoInput}
            id='uploadIcon'
            onChange={e => uploadImage(e)}
            type='file'
          />
        </label>
      </IconButton>
    </Paper>
  )
}

export default ImageUploader
