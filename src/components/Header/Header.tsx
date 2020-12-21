import React, { FC, useCallback, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { create } from 'domain';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      
    }
  })
)

const Header: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>


    </div>
  )
}

export default Header;