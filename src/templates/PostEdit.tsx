// React
import React, {
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
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Theme,
} from '@material-ui/core'
// Firebase
import { storage } from '../firebase'
// components
import { ImageUploader } from '../components/Posts'
// lib
import { generateRandomString } from '../lib/Util'
import { fetchPets } from '../lib/Pets'
import { savePost } from '../lib/Posts'
// types
import { Pet, Post } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

  const handleDescriptionChange = useCallback(e => {
    setDescription(e.target.value)
  }, [setDescription])

  const handleIsPublishedChange = useCallback(e => {
    setIsPublished(e.target.value)
  }, [setIsPublished])

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

  const submitPost = () => {
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
      const res = await savePost(token, convertedPost)
      console.log(res.status)
    })()
  };

  return (
    <Container component='main' maxWidth='md'>
      <ImageUploader
        imagePath={imagePath}
        setImagePath={setImagePath}
      />
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
          onClick={submitPost}
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
