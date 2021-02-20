// React
import React, {
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react'
// Redux
import { useSelector } from 'react-redux'
import { getToken, getUserId } from '../reducks/users/selectors'
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
import { Option, Pet, Post } from '../types'

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
  // Styles
  const classes = useStyles()
  // Redux
  const selector = useSelector(state => state)
  
  const [description, setDescription] = useState('')
  const [pet, setPet] = useState('')
  const [petId, setPetId] = useState('')
  const [optionList, setOptionList] = useState<Option[]>([])
  const [isPublished, setIsPublished] = useState('')
  const [imagePath, setImagePath] = useState('');

  // APIからうちの子一覧を取得します
  useEffect(() => {
    (async () => {
      const pets = await fetchPets()
      let optionData: Option[] = []
      pets.map((pet: Pet) => {
        const option: Option = {
          id: pet.id ? pet.id : 0,
          name: pet.name,
        }
        optionData.push(option)
      })
      setOptionList([...optionData])
    })()
  }, [])

  const handlePetChange = useCallback(e => {
    const id = e.target.value as string
    setPet(id)
    setPetId(id)
  }, [setPet, setPetId])

  const handleDescriptionChange = useCallback(e => {
    setDescription(e.target.value)
  }, [setDescription])

  const handleIsPublishedChange = useCallback(e => {
    setIsPublished(e.target.value as string)
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
    const userId = getUserId(selector)
    const token = getToken(selector)

    const post: Post = {
      imagePath: imagePath,
      description: description,
      isPublished: isPublished === '1' ? true : false,
      userId: userId,
      petId: parseInt(petId),
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
          options={ optionList }
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
