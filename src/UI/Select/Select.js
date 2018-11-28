import React, {Component} from 'react';
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

class Select extends Component {

    state = {
        value: ''
    }
    
    onChange= event => {
        this.setState({value: event.target.value})
    }

    render () {
        const {optionValue, optionName, options} = this.props;
        return (
            <SelectStyled name="" id="" value={this.state.value} isValid={this.props.isValid} onChange={this.onChange} >
                <option value="" disabled>{this.props.placeHolder}</option>
                {
                    options.map(option => (
                        <option value={option[optionValue]} key={option[optionValue]}>{option[optionName]}</option>
                    ))

                }
            </SelectStyled>
        );
    }
}

export default observer(Select);