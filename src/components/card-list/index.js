import { useEffect, useState } from 'react';

import styled from 'styled-components';

//SPLIDE
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

/******COMPONENTS******/
import Card from '../card/index'

const Container = styled.main`
    margin: 2rem auto;
`;

const Line = styled.hr`
    width: 45px;
    background-color: #C0C0C0;
    border: 3px solid #C0C0C0;
    margin: 1.2rem 0;
`;

export default function CardList() {
    const [items, setItems] = useState([]);

    async function getProducts() {
        const response = await fetch("https://corebiz-test.herokuapp.com/api/v1/products");
        if (response.ok) {
            let items = await response.json();
            setItems(items);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container className="container">
            <h2>Más Vendidos</h2>
            <Line />
            <Splide options={{
                perPage: 4,
                pagination: false,
                arrows: true,
                breakpoints: {
                    1260: {
                        perPage: 3,
                        pagination: false,
                        arrows: true,
                    },
                    980: {
                        perPage: 2,
                        arrows: false,
                        pagination: true,
                        padding: {
                            left: 0,
                            right: 0,
                        },
                    },
                    290: {
                        perPage: 1,
                        arrows: false,
                        pagination: true
                    },
                }
            }}>
                {
                    items.map((element, index) => (<SplideSlide key={index} ><Card key={index} item={element} /></SplideSlide>))
                }
            </Splide>
        </Container>
    );
}