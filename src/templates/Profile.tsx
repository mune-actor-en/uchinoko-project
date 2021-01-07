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
  Typography,
} from '@material-ui/core'
// lib
import { fetchUser } from '../lib/Users'
import { useSelector } from 'react-redux';
import { getToken } from '../reducks/users/selectors';
import { saveUser } from '../lib/Users/Users';

const useStyles = makeStyles(() =>
  createStyles({
    formWrapper: {
      margin: '0 auto',
      width: '80%',
    },
    title: {
      margin: '24px 0',
    },
    button: {
      marginTop: 24,
      width: '100%',
    },
  })
)

const Profile: FC = () => {
  // styles
  const classes = useStyles()

  // Redux
  const selector = useSelector(state => state)

  // Params
  const path = window.location.href
  const id = path.split('/profile/')[1]

  // state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isNameError, setIsNameError] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)

  useEffect(() => {
    // APIからプロフィールを取得
    (async () => {
      const user = await fetchUser(id)
      console.log(user)
      setName(user.name)
      setEmail(user.email)
    })()
  }, [])

  // handle change
  const handleNameChange = useCallback(e => {
    setName(e.target.value)
  }, [setName])

  const handleEmailChange = useCallback(e => {
    setEmail(e.target.value)
  }, [setEmail])

  // submit
  const submitUser = () => {
    const isNameBlank = name === '' ? true : false
    const isEmailBlank = email === '' ? true : false
    setIsNameError(isNameBlank)
    setIsEmailError(isEmailBlank)

    if (isNameBlank || isEmailBlank) {
      return
    }

    // reduxからtokenを取得
    const token = getToken(selector);

    // APIに保存
    (async () => {
      const res = await saveUser(token, id, name, email)
      console.log(res.status)
    })()
  }

  return (
    <Container
      component='main'
      maxWidth='md'
    >
      <div className={classes.formWrapper}>
        <Typography
          align='center'
          className={classes.title}
          component='h1'
          variant='h5'
        >
          プロフィールを編集
        </Typography>
        <TextField
          error={isNameError}
          fullWidth
          id='name'
          label='名前'
          margin='normal'
          onChange={e => handleNameChange(e)}
          required
          value={name}
          variant='outlined'
        />
        <TextField
          error={isEmailError}
          fullWidth
          id='email'
          label='メールアドレス'
          margin='normal'
          onChange={e => handleEmailChange(e)}
          required
          type='email'
          value={email}
          variant='outlined'
        />
        <Button
          className={classes.button}
          color='primary'
          onClick={submitUser}
          size='large'
          variant='contained'
        >
          更新
        </Button>
      </div>
    </Container>
  )
}

export default Profile
