import styled from "styled-components";

/**sweetalert2 */
import Swal from 'sweetalert2'

const FormTag = styled.form`
    display: flex;
    padding: 1rem 0px;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;

    @media screen and (max-width: 520px) {
        padding: 1rem;
    }
`;

const Input = styled.input`
    margin-right: 0.8rem;
    padding: 1rem;
    border: 0px transparent none;
    border-radius: 5px;

    @media screen and (max-width: 520px) {
        width: 100%;
        margin: 5px 0px;
    }
`;

const FormContent = styled.div`
    margin: 0.5rem 0 1rem;

    @media screen and (max-width: 520px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;

    color: white;
    background-color: #000;
    border: 0px transparent none;
    border-radius: 5px;

    @media screen and (max-width: 520px) {
        width: 100%;
        margin: 5px 0;
    }
`;

export default function Form() {


    const sendForm = (event) => {
        event.preventDefault();

        console.log(document.getElementById('name').value.trim());
        console.log("-" + document.getElementById('email').value.trim() + "-");
        fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
            method: 'POST',
            body: JSON.stringify({
                email: document.getElementById('email').value.trim(),
                name: document.getElementById('name').value.trim()
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(res => res.json())
            .catch(err => err)
            .then(data => {
                console.log(data);
                if (data.message === "Created successfully") {
                    Swal.fire({
                        title: '¡ENVIADO!',
                        text: 'Datos enviados correctamente, gracias!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                } else {
                    Swal.fire({
                        title: 'ERROR!',
                        text: 'Intentelo nuevamente más tarde.',
                        icon: 'error',
                        confirmButtonText: 'ok'
                    });
                }
            });
    }

    return (
        <FormTag onSubmit={sendForm}>
            <h2>¡Únete a nuestras novedades y promociones!</h2>
            <FormContent>
                <Input type="text" id="name" placeholder="Ingresa tu nombre" required />
                <Input type="email" id="email" placeholder="Ingresa tu email" required />
                <Button type="submit">Suscribirme</Button>
            </FormContent>
        </FormTag>
    );
}