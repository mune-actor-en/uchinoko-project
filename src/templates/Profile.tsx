// React
import React, { FC, useCallback, useState } from 'react'
// Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core'

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

  // state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // handle change
  const handleNameChange = useCallback(e => {
    setName(e.target.value)
  }, [setName])

  const handleEmailChange = useCallback(e => {
    setEmail(e.target.value)
  }, [setEmail])

  const handlePasswordChange = useCallback(e => {
    setPassword(e.target.value)
  }, [setPassword])

  const handleConfirmPasswordChange = useCallback(e => {
    setConfirmPassword(e.target.value)
  }, [setConfirmPassword])

  const submitUser = () => {
    alert('submit button clicked.')
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
        <TextField
          fullWidth
          id='password'
          label='パスワード'
          margin='normal'
          onChange={e => handlePasswordChange(e)}
          type='password'
          value={password}
          variant='outlined'
        />
        <TextField
          fullWidth
          id='confirmPassword'
          label='パスワード（確認用）'
          margin='normal'
          onChange={e => handleConfirmPasswordChange(e)}
          type='password'
          value={confirmPassword}
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
