import React, { FC, useState, useCallback } from 'react';
import { makeStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';

import PetAvatar from '../components/PetAvatar';
import TextInput from '../components/UIkit/TextInput';
import RadioButtons from '../components/UIkit/RadioButtons';
import DateInput from '../components/UIkit/DateInput';

const useStyles = makeStyles({
    style: {
        width: 'calc(100 % - 2rem)',
        maxWidth: 400,
        margin: '0 auto',
        padding: '30px 0 0'
    }
});

const PetsRegister: FC = () => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [sex, setSex] = useState("female");
    const [recomend, setRecomend] = useState("");
    const [birthday, setBirthday] = useState({
        year: '',
        month: '',
        day: ''
    });
    const [welcomeDay, setWelcomeDay] = useState({
        year: '',
        month: '',
        day: ''
    });

    const inputName = useCallback((event) => {
        setName(event.target.value);
    }, [setName]);

    const inputRecomend = useCallback((event) => {
        setRecomend(event.target.value);
    }, [setRecomend]);

    const classes = useStyles();

    return (
        <div className={classes.style}>
            <PetAvatar image={image} setImage={setImage} />
            <TextInput
                label={"名前"}
                multiline={false}
                required={true}
                rows={1}
                value={name}
                onChange={inputName}
            />
            <RadioButtons
                label={"性別"}
                sex={sex}
                setSex={setSex}
            />
            <DateInput
                label={"誕生日"}
                date={birthday}
                setDate={setBirthday}
            />
            <DateInput
                label={"お迎え日"}
                date={welcomeDay}
                setDate={setWelcomeDay}
            />
            <TextInput
                label={"うちの子の推しポイント"}
                multiline={true}
                required={true}
                rows={5}
                value={recomend}
                onChange={inputRecomend}
            />
            <Button variant="contained" color="primary">
                登録
            </Button>
        </div>
    )
}

export default PetsRegister;
