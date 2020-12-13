import React, { FC, useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    labelStyle: {
        margin: '0',
        textAlign: 'left',
    },
    groupStyle: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    textBoxStyle: {
        width: '30%'
    }
});

type Props = {
    label: string,
    date: {
        year: string;
        month: string;
        day: string;
    }
    // ↓　要修正
    setDate: any;
};

const DateInput: FC<Props> = (props) => {
    const [year, setYear] = useState(props.date.year);
    const [month, setMonth] = useState(props.date.month);
    const [day, setDay] = useState(props.date.day);

    const classes = useStyles();

    const inputDate = () => {
        props.setDate({
            year: year,
            month: month,
            day: day
        });
    };

    const inputYear = useCallback((event) => {
        setYear(event.target.value);
        inputDate();
    }, [setYear]);

    const inputMonth = useCallback((event) => {
        setMonth(event.target.value);
        inputDate();
    }, [setMonth]);

    const inputDay = useCallback((event) => {
        setDay(event.target.value);
        inputDate();
    }, [setDay]);

    return (
        <div>
            <p className={classes.labelStyle}>{props.label}</p>
            <div className={classes.groupStyle}>
                <TextField
                    className={classes.textBoxStyle}
                    label="年"
                    margin="dense"
                    multiline={false}
                    required={false}
                    rows={1}
                    value={year}
                    type="text"
                    onChange={inputYear}
                    variant="outlined"
                />
                <TextField
                    className={classes.textBoxStyle}
                    label="月"
                    margin="dense"
                    multiline={false}
                    required={false}
                    rows={1}
                    value={month}
                    type="text"
                    onChange={inputMonth}
                    variant="outlined"
                />
                <TextField
                    className={classes.textBoxStyle}
                    label="日"
                    margin="dense"
                    multiline={false}
                    required={false}
                    rows={1}
                    value={day}
                    type="text"
                    onChange={inputDay}
                    variant="outlined"
                />
            </div>
        </div>
    )
}

export default DateInput;
