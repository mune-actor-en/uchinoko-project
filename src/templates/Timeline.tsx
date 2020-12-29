// React
import React, { FC } from 'react';
// Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles';
// Components
import { Header } from '../components/Header';

const useStyles = makeStyles(() => 
  createStyles({
    root: {
      
    }
  })
)

type Props = {
  name?: string
}

const Timeline: FC<Props> = ({ name }) => {
  const classes = useStyles();
  return (
    <>
    <Header />
      <div className={classes.root}>{name}</div>
   </>   
  );
}

export default Timeline;
