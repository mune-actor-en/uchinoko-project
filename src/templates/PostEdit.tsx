// React
import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react'
// Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Theme,
} from '@material-ui/core'
// Firebase
import { storage } from '../firebase'
// Icons
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
// lib
import { fetchPets } from '../lib/Pets'
import { postData } from '../lib/Posts'
// types
import { Pet, Post } from '../types'

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
    formWrapper: {
      margin: '0px auto',
      maxWidth: 600,
    },
    formControl: {
      marginBottom: 24,
      width: '100%',
    },
    textField: {
      marginBottom: 24,
      width: '100%',
    },
    button: {
      width: '100%',
    },
  })
)

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA5MDY3MjM1LCJleHAiOjE2MDk5MzEyMzV9.eh0FNGBIoyccpRHW1t57kuuaU8YFpJU-Ul4-kF_uytg'

const PostEdit: FC = () => {
  const classes = useStyles()
  
  const [description, setDescription] = useState('')
  const [pet, setPet] = useState('')
  const [petId, setPetId] = useState(0)
  const [petList, setPetList] = useState([] as Pet[])
  const [isPublished, setIsPublished] = useState('')
  const [imagePath, setImagePath] = useState('');

  // APIからうちの子一覧を取得します
  useEffect(() => {
    (async () => {
      const pets = await fetchPets()
      setPetList([...pets])
    })()
  }, [])

  const handlePetChange = useCallback(e => {
    const id = e.target.value
    setPet(id)
    setPetId(id)
  }, [setPet, setPetId])

  // TODO:useCallbackに変更する
  const handleDescriptionChange = (event: ChangeEvent<{ value: unknown }>) => {
    setDescription(event.target.value as string)
  }

  // TODO:useCallbackに変更する
  const handleIsPublishedChange = (event: ChangeEvent<{ value: unknown }>) => {
    setIsPublished(event.target.value as string)
  }

  const uploadImage = useCallback( e => {
    const file = e.target.files
    let blob = new Blob(file, { type: 'image/jpeg' })

    // TODO:utilityにまとめる
    // Generate random 16 digits strings
    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map(n => S[n%S.length]).join('')

    const uploadRef = storage.ref('image').child(fileName)
    const uploadTask = uploadRef.put(blob)

    console.log(fileName)

    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        console.log(downloadURL)
        setImagePath(downloadURL)
      })
    })
  }, [setImagePath])

  const savePost = () => {
    console.log('submit button pushed.')
    // TODO:reduxからuserIdを取得する
    const userId = 1

    const post: Post = {
      imagePath: imagePath,
      description: description,
      isPublished: isPublished === 'true' ? true : false,
      userId: userId,
      petId: petId,
    }

    const convertedPost = JSON.stringify(post);

    (async () => {
      const res = await postData(token, convertedPost)
      console.log(res.status)
    })()
  };

  return (
    <Container component='main' maxWidth='md'>
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
      <div className={classes.formWrapper}>
        <FormControl className={classes.formControl}>
          <InputLabel id='select-pet-label'>
            うちの子選択
          </InputLabel>
          <Select
            labelId='select-pet-label'
            id='select-pet'
            value={pet}
            onChange={handlePetChange}
          >
            {petList.map(pet => (
              <MenuItem
                key={pet.id}
                value={pet.id}
              >
                {pet.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id='description'
          className={classes.textField}
          label='推しポイント'
          multiline
          rows={4}
          value={description}
          onChange={handleDescriptionChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id='select-is-published-label'>
            公開・非公開
          </InputLabel>
          <Select
            labelId='select-is-published-label'
            id='select-is-published'
            value={isPublished}
            onChange={handleIsPublishedChange}
          >
            <MenuItem
              key={1}
              value='true'
            >
              公開
            </MenuItem>
            <MenuItem
              key={2}
              value='false'
            >
              非公開
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.button}
          color='primary'
          onClick={savePost}
          size='large'
          variant='contained'
        >
          投稿
        </Button>
      </div>
    </Container>
  )
}

export default PostEdit
