// React
import React, { FC } from 'react';
// Redux
import { useDispatch } from 'react-redux'
// Router
import { push } from 'connected-react-router'
import { Link } from 'react-router-dom'
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
// types
import { Sex } from '../types/Pet'

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        margin: '20px auto 0',
    },
    media: {
        height: 280,
    },
});

type Props = {
    id: number | undefined;
    imagePath: string;
    name: string;
    sex: Sex;
    birthday: Date;
    pickupDate: Date;
    recomend: string;
}

const MediaCard: FC<Props> = ({
    id,
    imagePath,
    name,
    sex,
    birthday,
    pickupDate,
    recomend
}) => {
    // Redux
    const dispatch = useDispatch();
    // Styles
    const classes = useStyles();

    const getStringFromDate = (baseDate: Date) => {
        const date = new Date(baseDate);
        return (date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate());
    };

    return (
        <Card
            className={classes.root}
            onClick={() => dispatch(push('/pet/edit/' + id))}
        >
            <CardActionArea component="div" disableRipple>
                {/* <Link to={'/pet/edit/' + id}> */}
                    <CardMedia
                        className={classes.media}
                        image={imagePath}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            性別：{sex === 'male' ? '♂' : '♀'}
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            誕生日：{getStringFromDate(birthday)}
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            お迎え日：{getStringFromDate(pickupDate)}
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            うちの子の推しポイント：<br />
                            {recomend}
                        </Typography>
                    </CardContent>
                {/* </Link> */}
            </CardActionArea>
        </Card>
    )
}

export default MediaCard
