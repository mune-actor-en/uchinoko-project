// React
import React, { FC } from 'react';
// Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles';
// Components
import { Content, Header } from './index'

const useStyles = makeStyles(() => 
  createStyles({
    root: {
      
    }
  })
)

const Timeline: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      < Content description={"詳細"} title={"テスト"} postDate={'2020/12/31'} path={''}/>
      <div className={classes.root}></div>
   </>   
  );
}

export default Timeline;
