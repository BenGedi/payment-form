import React from 'react';
import { createInputStyled } from '../style-utils';

export const InputStyled = createInputStyled('input');

const Input = props => {
    console.log('Input', props);
    return (
    <InputStyled isValid={props.isValid} type={props.type || 'text' } value={props.value} placeholder={props.placeholder || ''} onChange={props.changed || (() => {})}/>
)};

export default Input;