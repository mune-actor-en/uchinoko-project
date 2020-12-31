// React
import React, { FC } from 'react';
// Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles';
// Components
import { Header } from './UIKit';
import { Content } from './UIKit/Timeline/index'

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
      < Content description={"詳細"} title={"テスト"} postDate={'2020/12/31'} path={''}/>
      <div className={classes.root}>{name}</div>
   </>   
  );
}

export default Timeline;
