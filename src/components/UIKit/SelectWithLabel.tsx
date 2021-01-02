// React
import React, {
  FC,
} from 'react'
// Material-UI
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
// types
import { Option } from '../../types'

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      marginBottom: 24,
      width: '100%',
    },
  })
)

type Props = {
  label: string
  options: Option[]
  onChange: any
  value: string | number
}

const SelectWithLabel: FC<Props> = ({
  label,
  options,
  onChange,
  value
}) => {
  const classes = useStyles()

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={onChange}
      >
        {options.map(option => (
          <MenuItem
            key={option.id}
            value={option.id}
          >
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectWithLabel
