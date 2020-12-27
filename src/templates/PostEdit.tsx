// React
import React, {
  ChangeEvent,
  FC,
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
// Icons
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
// types
import { Pet } from '../types'

const useStyles = makeStyles((theme: Theme) =>
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

const PostEdit: FC = () => {
  const classes = useStyles()
  
  const [description, setDescription] = useState('')
  const [pet, setPet] = useState('')
  const [petList, setPetList] = useState([] as Pet[])
  const [isPublished, setIsPublished] = useState('')

  useEffect(() => {
    // TODO:DBからfetchでpetを取得する
    const petList = []
    petList.push({id: 1, name: 'pet1'})
    petList.push({id: 2, name: 'pet2'})
    petList.push({ id: 3, name: 'pet3' })
    setPetList([...petList])
  }, [])

  const handlePetChange = (event: ChangeEvent<{ value: unknown }>) => {
    setPet(event.target.value as string)
  }

  const handleDescriptionChange = (event: ChangeEvent<{ value: unknown }>) => {
    setDescription(event.target.value as string)
  }

  const handleIsPublishedChange = (event: ChangeEvent<{ value: unknown }>) => {
    setIsPublished(event.target.value as string)
  }

  return (
    <Container component='main' maxWidth='md'>
      <Paper className={classes.imagePaper}>
        <IconButton className={classes.cameraIcon}>
          <PhotoCameraIcon />
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
                value={pet.name}
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
          onClick={() => alert('clicked.')}
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
