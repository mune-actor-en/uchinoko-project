//React
import React, { FC, useState, useCallback } from 'react';
//Material-UI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// Logo
import Logo from './assets/img/icoms/uchinoko-logo.png';

const useStyles = makeStyles(() =>
  createStyles({
    top: {
      marginTop: 20,
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: 20,
    },
    submit: {
      marginTop: 20,
    },
  })
);

type Props = {};

const SingUp: FC<Props> = ({}) => {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.top}>
        <Typography component='h1' variant='h5' align='center'>
          サインアップ
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='comfirm password'
            label='Comfirm Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            endIcon={<TouchAppIcon />}
          >
            サインアップ
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default SingUp;