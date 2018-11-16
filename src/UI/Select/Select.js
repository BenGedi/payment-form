import React, {Component} from 'react';
import styled from 'styled-components';
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
        options: [],
        value: ''
    }
    
    onChange= event => {
        this.setState({value: event.target.value})
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.options !== this.state.options) {
            this.setState({options: nextProps.options});
            return true;
        }

        if (nextState.value !==  this.state.value) {
            return true;
        }
    }


    render () {
        const {optionValue, optionName} = this.props;
        return (
            <SelectStyled name="" id="" value={this.state.value} isValid={this.props.isValid} onChange={this.onChange} >
                <option value="" disabled>{this.props.placeHolder}</option>
                {
                    this.state.options.map(option => (
                        <option value={option[optionValue]} key={option[optionValue]}>{option[optionName]}</option>
                    ))

                }
            </SelectStyled>
        );
    }
}

export default Select;