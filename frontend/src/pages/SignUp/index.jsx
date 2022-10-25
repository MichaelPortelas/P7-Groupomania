import { useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectCache } from "../../utils/selectors";
import { setCache } from "../../features/users.slice";
import * as AtomsStyles from "../../utils/style/Atoms";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
    const formRef = useRef();
    const inputPseudo = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const dispatch = useDispatch();
    
    // on recupère le cache dans le state redux
    const cache = useSelector(selectCache);
    
    const HandleSubmit = (e) => {
        
        e.preventDefault();
        
        const data = {
            pseudo: inputPseudo.current.value,
            email:  inputEmail.current.value,
            password:  inputPassword.current.value,
        }

        axios.post(process.env.REACT_APP_API_URL + '/auth/signup', data)
        .then((res) => {
            console.log(res.data.message);

            formRef.current.reset();

            // On Connecte le nouveau user et on mets en cache la session
            axios.post(process.env.REACT_APP_API_URL + '/auth/login', data)
            .then((res) => {
                
                // on créer la session dans le state redux
                dispatch(setCache(res.data));
                // on créer la session dans le localstorage
                localStorage.setItem('user', JSON.stringify(res.data));

                //on renvoie l'utilisateur vers la page d'accueil
                window.location.href='/';

            })
            .catch((error) => {
                console.log(error)
                return <span>Oupssss!! il y a un problème</span>
            })
        })
        .catch((error) => {
            console.log(error)
            return <span>Oupssss!! il y a un problème</span>
        })
        
    }

    if (cache) {
        return (
            <div>
                <div>{cache.pseudo} is loggged in </div>
            </div>
            
        );
        
    }
     
    return (
        <Container fluid>
            <Row className="mt-3 mb-4 justify-content-center">
                <Col xs={10} md={8} lg={6}>                
                    <AtomsStyles.RowFormTitle >
                        <AtomsStyles.FormTitle className="fs-2 m-0">Inscrivez-Vous</AtomsStyles.FormTitle>
                        <AtomsStyles.FormTitle className="m-0">C'est rapide et facile.</AtomsStyles.FormTitle>
                    </AtomsStyles.RowFormTitle>
                    <AtomsStyles.RowForm className="px-3">
                        <Form onSubmit={(e) => HandleSubmit(e)} ref={formRef} className="d-flex flex-column">
                            <Form.Group className="mb-3" controlId="formPseudo">
                                <AtomsStyles.FormControlInput
                                    className="fs-4 text-center"
                                    type="text"
                                    placeholder="Pseudo"
                                    ref={inputPseudo}
                                    required
                                />
                            </Form.Group>                    
                            
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
                            <AtomsStyles.FormFooterLine className="my-3"/>
                            <AtomsStyles.DarkButton variant="secondary" className="fs-4" type="submit">S'inscrire</AtomsStyles.DarkButton>
                        </Form>
                    </AtomsStyles.RowForm>
                </Col>
            </Row>            
        </Container>        
    );
};

export default SignUp