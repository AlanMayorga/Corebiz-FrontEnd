import styled from 'styled-components'
import corebiz from '../../assets/img/corebiz-img.png'

//**********Context*/
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

//*********ICONS***********//
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

const HeaderTag = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: 1rem auto;

    @media screen and (max-width: 540px) {
        & > div.hidden_after {
            display: none;
        }
    }
`;

const HeaderImg = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    & > button {
        display: none;
        padding: 0px;
        margin: 0px;
    }

    & > div.hidden_before {
        display: none;
    }

    @media screen and (max-width: 540px) {
        width: 100%;

        & > button {
            display: block;
        }

        & > div.hidden_before {
            display: block;
        }
    }
    
`;

const HeaderSearch = styled.div`
    flex-grow: 1;
    margin: 0px 2rem;

    display: flex;

    & > svg {
        position: relative;
        top: 25px;
        right: 21px;
    }

    @media screen and (max-width: 540px) {
        margin: 0px;
    }
`;

const Img = styled.img`
    width: 200px;
    @media screen and (max-width: 540px) {
        width: 150px;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid #000;

    &:focus {
        border: 0 transparent none;
    }
`;

const Counter = styled.span`
    position: relative;
    bottom: 9px;
    padding: 1px 4px;

    font-size: 0.63rem;

    color: white;
    background-color: red;
    border-radius: 50%;
`;

const HeaderOptionsMyAcount = styled.div`
    margin-right: 2rem;
    padding-top: 1rem;

    & > svg {
        position: relative;
        top: 5px;
    }

    @media screen and (max-width: 540px) {
        display: none;
    }
`;

const HeaderOptionsMyCart = styled.div`
    padding-top: 1rem;
`;

export default function Header() {

    const { cartCount } = useContext(CartContext);

    return (
        <HeaderTag className="container">
            <HeaderImg>
                <IconButton aria-label="Menu">
                    <MenuIcon style={{ fontSize: 40, color: 'black' }} />
                </IconButton>
                <Img src={corebiz} alt="Logo" />
                <HeaderOptionsMyCart className="hidden_before">
                    <ShoppingCartOutlinedIcon />
                    <Counter>{cartCount}</Counter>
                </HeaderOptionsMyCart>
            </HeaderImg>
            <HeaderSearch>
                <Input placeholder="¿Que estás buscando?" />
                <SearchIcon />
            </HeaderSearch>
            <HeaderOptionsMyAcount>
                <PersonOutlineIcon />
                <span>Mi cuenta</span>
            </HeaderOptionsMyAcount>
            <HeaderOptionsMyCart className="hidden_after">
                <ShoppingCartOutlinedIcon />
                <Counter>{cartCount}</Counter>
            </HeaderOptionsMyCart>
        </HeaderTag>)
}