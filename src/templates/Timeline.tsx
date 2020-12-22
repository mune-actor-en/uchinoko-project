// React
import React, { FC } from 'react';
// Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles';
// Components
import { Header } from '../components/Header';

const useStyles = makeStyles(() => 
  createStyles({

  })
)

type Props = {
  name?: string
}

const Timeline:FC<Props> = ({name}) => {
  return (
    <>
    <Header />
      <div>{name}</div>
   </>   
  );
}

export default Timeline;
