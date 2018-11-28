import React from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react";
import { createInputStyled } from '../style-utils';

export const SelectStyled = styled(createInputStyled('select'))`
    &::placeholder {
        color: ${props => props.isValid ? '#999999' : 'red'};
    }

    [value=""][disabled] {
        display: none;
    }
`;

const Select =({optionValue, optionName, options, value, changed, placeHolder, isValid}) => (
    <SelectStyled name="" id="" value={value || ''} isValid={isValid} onChange={changed} >
        <option value="" disabled>{placeHolder}</option>
        {
            options.map(option => (
                <option value={option[optionValue]} key={option[optionValue]}>{option[optionName]}</option>
            ))

        }
    </SelectStyled>
);
export default observer(Select);