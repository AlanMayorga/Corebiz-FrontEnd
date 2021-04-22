import { useContext, useEffect } from "react";

import styled from "styled-components";
import Swal from 'sweetalert2'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { CartContext } from "../../context/CartContext";

const CardTag = styled.div`
    width: 180px;
    height: 340px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);

    margin: 1rem 1rem;

    & > img {
        width: 180px;
        height: 150px;
    }

    @media screen and (max-width: 520px) {
        width: 150px;
        height: 310px;

        & > img {
            width: 150px;
            height: 120px;
        }
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    margin-bottom: 10px;
    padding: 5px;
`;

const CardTitle = styled.h5`
    color: #7A7A7A;
`;

const Text = styled.span`
    color: #7A7A7A;
`;

const Button = styled.button`
    width: 125px;
    height: 32px;

    color: white;
    background-color: #000;
    border: 0px transparent none;
    border-radius: 5px;
`;

export default function Card({ item }) {

    const { cartCount, setCartCount } = useContext(CartContext);

    useEffect(() => {
        localStorage.setItem('cartCount', cartCount);
    }, [cartCount])

    return (
        <CardTag>
            <img src={item.imageUrl} alt="Calzado" />
            <CardContent>
                <CardTitle>{item.productName}</CardTitle>
                <span>
                    {
                        [1,2,3,4,5].map(element => {
                            if (element <= item.stars) {
                                return (<StarIcon style={{ color: "#F8475F" }} />)
                            } else{
                                return (<StarBorderIcon style={{ color: "#F8475F" }} />)
                            } 
                        })
                    }
                </span>
                {
                    item.listPrice && <Text>de ${item.listPrice}</Text>
                }
                <h3>por ${item.price}</h3>
                {
                    item.installments.map((element, key) => {
                        return (item.installments && <Text key={key}> o en {element.quantity}x de R ${element.value}</Text>)
                    })
                }
                <Button onClick={() => {
                    setCartCount(cartCount + 1);
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'bottom-start',
                        showConfirmButton: false,
                        timer: 1000,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Item agregado'
                    })
                }}>Comprar</Button>
            </CardContent>
        </CardTag>
    );
}