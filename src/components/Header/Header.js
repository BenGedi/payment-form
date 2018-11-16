import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/liveperson.png';

const HeaderStyled = styled.header`
    background-color: #F8F8F8;
    padding: 0 13px;
    border-bottom: 1px solid #eeeeee;

    img {
        margin-left: 15px;
    }

    span{
        font-weight: 500;
        font-size: 17px;
        color: #777777;
    }
`;

const Header = () => (
    <HeaderStyled>
        <span>LivePerson</span>
        <img src={Logo} alt="LivePerson"/>
    </HeaderStyled>
)

export default Header;
