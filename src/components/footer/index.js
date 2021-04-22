import styled from "styled-components";

import corebiz from '../../assets/img/corebiz-img.png'

import MailIcon from '@material-ui/icons/Mail';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';

const FooterTag = styled.footer`
    color: white;
    background-color: #000;
`;

const FooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 15px;

    padding: 1.4rem 0;
    align-items: center;
`;

const Line = styled.hr`
    width: 45px;
    background-color: white;
    border: 3px solid #FFFFFF;
    margin: 1.2rem 0;
`;

const Button = styled.button`
    background-color: white;
    border: 0 transparent none;
    border-radius: 5px;

    width: 229px;
    margin: 0.5rem 0;
    padding: 0.4rem;

    & > svg {
        float: left;
    }
`;

const FooterUbication = styled.section`
    & > p {
        margin: 10px 0;
    }
`;

const FooterButtons = styled.section`
    margin: 1rem auto;
`;

const FooterImg = styled.div`

    margin: 1rem auto;
    
    & > div {
        display: inline-block;
        margin: 0 0.8rem;
    }

    & > div img {
        width: 90px;
        filter: invert();
    }
`;

export default function Footer() {
    return (
        <FooterTag>
            <FooterContent className="container">
                <FooterUbication>
                    <h2>Ubicación</h2>
                    <Line />
                    <p>Avenida Andrómeda, 2008. Bloco 6 e 8</p>
                    <p>Alphavile SP</p>
                    <p>brasil@corebiz.ag</p>
                    <p>+55 11 0390 1039</p>
                </FooterUbication>
                <FooterButtons>
                    <Button><MailIcon />CONTÁCTANOS</Button><br />
                    <Button><HeadsetMicIcon />HABLA CON UN CONSULTOR</Button>
                </FooterButtons>
                <FooterImg>
                    <div>
                        <p>Desarrollado por</p>
                        <img src={corebiz} alt="corebiz" />
                    </div>
                    <div>
                        <p>Powered by</p>
                        <img alt="VTEX" /><span>VTEX</span>
                    </div>
                </FooterImg>
            </FooterContent>
        </FooterTag>
    );
}