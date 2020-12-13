import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    style: {
        margin: '0',
        textAlign: 'left',
    },
});

type Props = {
    label: string;
    multiline: boolean;
    required: boolean;
    rows: number;
    value: string;
    // ↓　要修正
    onChange: any;
}

const TextInput: FC<Props> = (props) => {
    const classes = useStyles();

    return (
        <div>
            <p className={classes.style}>{props.label}</p>
            <TextField
                fullWidth={true}
                margin="dense"
                multiline={props.multiline}
                required={props.required}
                rows={props.rows}
                value={props.value}
                type='text'
                onChange={props.onChange}
                variant="outlined"
            />
        </div>
    );
}

export default TextInput;