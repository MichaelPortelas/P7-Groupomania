import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setCache } from "../../features/users.slice";
import * as AtomsStyles from "../../utils/style/Atoms";

import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

import { FaSignInAlt } from "react-icons/fa"

const Login = () => {
    const formRef = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const HandleSubmit = (e) => {

        e.preventDefault();
        
        const data = { 
            email:  inputEmail.current.value,
            password:  inputPassword.current.value,
        }

        axios.post(process.env.REACT_APP_API_URL + '/auth/login', data)
        .then((res) => {

            // on créer la session dans le state redux
            dispatch(setCache(res.data))
            // on créer la session dans le localstorage
            localStorage.setItem('user', JSON.stringify(res.data))

            formRef.current.reset()

            setShow(false);

            window.location.href='/';
        })
        .catch((error) => {
            console.log(error)
            return <span>Oupssss!! il y a un problème</span>
        })
    }

    return (
        <>
            <AtomsStyles.StyledLink href="#">
                <AtomsStyles.NavLink className='d-flex fs-3 align-items-center' onClick={handleShow}><FaSignInAlt/>&nbsp;Connexion</AtomsStyles.NavLink>
            </AtomsStyles.StyledLink>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Connexion</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>               
                    <Container fluid>
                        <AtomsStyles.RowFormTitle>
                            <AtomsStyles.FormTitle className="fs-2 m-0">Connectez-Vous</AtomsStyles.FormTitle>
                            <AtomsStyles.FormTitle className="m-0">Ou créez votre compte</AtomsStyles.FormTitle>
                        </AtomsStyles.RowFormTitle>
                        <AtomsStyles.RowForm className="px-3">
                            <Form onSubmit={(e) => HandleSubmit(e)} ref={formRef} className="d-flex flex-column">
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <AtomsStyles.FormControlInput
                                        className="fs-4 text-center"                                        
                                        type="email"
                                        placeholder="Adresse e-mail"
                                        ref={inputEmail}
                                        required                                        
                                    />                   
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <AtomsStyles.FormControlInput
                                        className="fs-4 text-center"
                                        type="password"
                                        placeholder="Mot de passe"
                                        ref={inputPassword}
                                        required
                                    />
                                </Form.Group>
                                <AtomsStyles.DarkButton variant="secondary" type="submit" className="fs-4">Se Connecter</AtomsStyles.DarkButton>
                            </Form>
                            <AtomsStyles.FormFooterLine className="my-3"/>
                            <AtomsStyles.StyledLink href="/signup" onClick={handleClose} className="d-flex justify-content-center">
                                <AtomsStyles.DarkButton variant="secondary" className="fs-4">Créer Un Nouveau Compte</AtomsStyles.DarkButton>
                            </AtomsStyles.StyledLink>
                        </AtomsStyles.RowForm>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>       
    );
}

export default Login