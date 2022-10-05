import axios from "axios";
import { Link } from 'react-router-dom'
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setCache } from "../../features/users.slice";
import * as AtomsStyles from "../../utils/style/Atoms";

import Offcanvas from 'react-bootstrap/Offcanvas';

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

        axios.post('http://localhost:3000/api/auth/login', data)
        .then((res) => {

            dispatch(setCache(res.data))

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
                    <AtomsStyles.BaseContainer>
                        <AtomsStyles.FormTitleContainer>
                            <AtomsStyles.FormTitle>Connectez-Vous</AtomsStyles.FormTitle>
                            <AtomsStyles.FormSubTitle>Ou créez votre compte</AtomsStyles.FormSubTitle>
                        </AtomsStyles.FormTitleContainer>
                        <AtomsStyles.FormContainer>
                            <AtomsStyles.FormBody onSubmit={(e) => HandleSubmit(e)} ref={formRef}>
                                <AtomsStyles.FormInput
                                    type="email"
                                    placeholder="Adresse e-mail"
                                    ref={inputEmail}
                                />                   
                                
                                <AtomsStyles.FormInput
                                    type="password"
                                    placeholder="Mot de passe"
                                    ref={inputPassword}
                                />
                                <AtomsStyles.DarkButton type="submit">Se Connecter</AtomsStyles.DarkButton>
                            </AtomsStyles.FormBody>
                            <AtomsStyles.FormFooterLine />
                            <Link to="/signup" onClick={handleClose}><AtomsStyles.DarkButton>Créer Un Nouveau Compte</AtomsStyles.DarkButton></Link>
                        </AtomsStyles.FormContainer>
                    </AtomsStyles.BaseContainer>
                </Offcanvas.Body>
            </Offcanvas>
        </>       
    );
}

export default Login