import React, { FC, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    style: {
        textAlign: 'left',
    },
    labelStyle: {
        margin: '0'
    }
});

type Props = {
    label: string;
    sex: string;
    // ↓　要修正
    setSex: any;
};

const RadioButtons: FC<Props> = (props) => {
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSex((event.target as HTMLInputElement).value);
    };

    return (
        <div className={classes.style}>
            <FormControl component="fieldset">
                <p className={classes.labelStyle}>{props.label}</p>
                <RadioGroup row aria-label="gender" name="gender1" value={props.sex} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio />} label="♀" labelPlacement="start" />
                    <FormControlLabel value="male" control={<Radio />} label="♂" labelPlacement="start" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default RadioButtons

