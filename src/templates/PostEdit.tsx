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
  TextField,
} from '@material-ui/core'
// components
import { ImageUploader } from '../components/Posts'
import { SelectWithLabel } from '../components/UIKit'
// lib
import { fetchPets } from '../lib/Pets'
import { savePost } from '../lib/Posts'
// types
import { Pet, Post } from '../types'

const useStyles = makeStyles(() =>
  createStyles({
    formWrapper: {
      margin: '0px auto',
      maxWidth: 600,
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

const PostEdit: FC = () => {
  const classes = useStyles()
  
  // TODO:ReduxからTokenをとってくる
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA5MDY3MjM1LCJleHAiOjE2MDk5MzEyMzV9.eh0FNGBIoyccpRHW1t57kuuaU8YFpJU-Ul4-kF_uytg'

  const [description, setDescription] = useState('')
  const [pet, setPet] = useState('')
  const [petId, setPetId] = useState(0)
  const [petList, setPetList] = useState([] as Pet[])
  const [isPublished, setIsPublished] = useState(0)
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
    console.log(e.target.value === 1)
    setIsPublished(e.target.value)
  }, [setIsPublished])

  const isPublishedList = [
    {
      id: 1,
      name: '公開',
    },
    {
      id: 2,
      name: '非公開'
    }
  ]

  const submitPost = () => {
    // TODO:reduxからuserIdを取得する
    const userId = 1

    const post: Post = {
      imagePath: imagePath,
      description: description,
      isPublished: isPublished === 1 ? true : false,
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
        <SelectWithLabel
          label='うちの子選択'
          options={ petList }
          onChange={ handlePetChange }
          value={ pet }
        />
        <TextField
          id='description'
          className={classes.textField}
          label='推しポイント'
          multiline
          rows={4}
          value={description}
          onChange={handleDescriptionChange}
        />
        <SelectWithLabel
          label='公開・非公開'
          options={isPublishedList}
          onChange={handleIsPublishedChange}
          value={isPublished}
        />
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
