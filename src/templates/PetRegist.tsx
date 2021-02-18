// React
import React, { FC, useState, useCallback } from 'react';
// Redux
import { useSelector } from 'react-redux'
import { getToken, getUserId } from '../reducks/users/selectors'
//Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Container,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
// date-io
import DateFnsUtils from '@date-io/date-fns';
// components
import { ImageUploader } from '../components/Posts'
// lib
import { savePets } from '../lib/Pets'
// types
import { Pet } from '../types'
import { Sex } from '../types/Pet'

const useStyles = makeStyles(() =>
    createStyles({
        formWrapper: {
            margin: '0px auto',
            maxWidth: 600,
        },
        textField: {
            marginBottom: 24,
            width: '100%',
        },
        dateField: {
            marginBottom: 24,
        },
        button: {
            width: '100%',
        },
    })
)

const PetRegist: FC = () => {
    // Styles
    const classes = useStyles()
    // Redux
    const selector = useSelector(state => state)

    const [imagePath, setImagePath] = useState('');
    const [name, setName] = useState('');
    const [sex, setSex] = useState<Sex>(Sex.MALE);
    const [birthday, setBirthday] = useState(new Date());
    const [pickupDate, setPickupDate] = useState(new Date());
    const [recomend, setRecomend] = useState('');

    const handleNameChange = useCallback(e => {
        setName(e.target.value)
    }, [setName])

    const handleSexChange = useCallback(e => {
        setSex(e.target.value)
    }, [setSex])

    const handleBirthdayChange = (date: any) => {
        setBirthday(date);
    };

    const handlePickupDateChange = (date: any) => {
        setPickupDate(date);
    };

    const handleRecomendChange = useCallback(e => {
        setRecomend(e.target.value)
    }, [setRecomend])

    const submitPet = () => {
        const userId = getUserId(selector)
        const token = getToken(selector)

        const pet: Pet = {
            name: name,
            sex: sex,
            imagePath: imagePath,
            userId: userId,
            birthday: birthday,
            pickupDate: pickupDate,
            attractiveFeature: recomend,
        }

        const convertedPet = JSON.stringify(pet);

        (async () => {
            const res = await savePets(token, convertedPet)
            console.log(res.status)
        })()
    };

    return (
        <Container component='main' maxWidth='md'>
            <ImageUploader
                imagePath={imagePath}
                setImagePath={setImagePath}
            />
            <div className={classes.formWrapper}>
                <TextField
                    id='name'
                    className={classes.textField}
                    label='名前'
                    multiline
                    rows={1}
                    value={name}
                    onChange={handleNameChange}
                />
                <FormControl component="label" className={classes.textField}>
                    <FormLabel component="label">性別</FormLabel>
                    <RadioGroup
                        name="性別"
                        value={sex}
                        onChange={handleSexChange}
                        row
                    >
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="♂"
                        />
                        <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="♀"
                        />
                    </RadioGroup>
                </FormControl>
                <div className={classes.dateField}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="yyyy/MM/dd"
                            id="birthday"
                            label="誕生日"
                            value={birthday}
                            onChange={handleBirthdayChange}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <div className={classes.dateField}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="yyyy/MM/dd"
                            id="pickupDate"
                            label="お迎え日"
                            value={pickupDate}
                            onChange={handlePickupDateChange}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <TextField
                    id='recomend'
                    className={classes.textField}
                    label='うちの子の推しポイント'
                    multiline
                    rows={4}
                    value={recomend}
                    onChange={handleRecomendChange}
                />
                <Button
                    className={classes.button}
                    color='primary'
                    onClick={submitPet}
                    size='large'
                    variant='contained'
                >
                    登録
                </Button>
            </div>
        </Container>
    )
}

export default PetRegist;
