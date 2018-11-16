import styled from 'styled-components';

export const createInputStyled = (inputType) => {
    return styled[inputType]`
        box-sizing: border-box;
        margin: 0;
        display: inline-block;
        padding: 4px 11px;
        width: 100%;
        height: 32px;
        font-size: 14px;
        line-height: 1.5;
        color: rgba(0,0,0,.65);
        background-color: #fff;
        background-image: none;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        transition: all .3s;
        color: ${props => props.isValid ? '#555555' : 'red'};
        
        &::placeholder {
            color: #999999;
        }
        
        &:hover, &:focus {
            border-color: #40a9ff;
        }
        
        &:focus {
            border-right-width: 1px;
            outline: 0;
            box-shadow: 0 0 0 2px rgba(24,144,255,.2);
        }
    `
}