import axios from "axios";
import { Link } from 'react-router-dom'
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCache } from "../../features/users.slice";
import { selectCache } from "../../utils/selectors";
import { FormBody, LoginInput, LoginContainer, LoginTitleContainer, LoginTitle, LoginSubTitle, FormContainer, LoginFooterLine, LoginButton  } from "./styles"

const Login = () => {
    const formRef = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const dispatch = useDispatch();

    const cache = useSelector(selectCache);    

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

            window.location.href='/';
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
        <LoginContainer>
            <LoginTitleContainer>
                <LoginTitle>Connectez-Vous</LoginTitle>
                <LoginSubTitle>Ou créez votre compte</LoginSubTitle>
            </LoginTitleContainer>
            <FormContainer>
                <FormBody onSubmit={(e) => HandleSubmit(e)} ref={formRef}>
                    <LoginInput
                        type="email"
                        placeholder="Adresse e-mail"
                        ref={inputEmail}
                    />                   
                    
                    <LoginInput
                        type="password"
                        placeholder="Mot de passe"
                        ref={inputPassword}
                    />
                    <LoginButton type="submit">Se Connecter</LoginButton>
                </FormBody>
                <LoginFooterLine />
                <Link to="/signup"><LoginButton>Créer Un Nouveau Compte</LoginButton></Link>
            </FormContainer>
        </LoginContainer>

        
    );

}

export default Login