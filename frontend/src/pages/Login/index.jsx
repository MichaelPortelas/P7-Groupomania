import axios from "axios";
import { Link } from 'react-router-dom'
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCache } from "../../features/users.slice";
import { selectCache } from "../../utils/selectors";
import { BaseContainer, FormInput, FormTitleContainer, FormTitle, FormSubTitle, FormContainer, FormBody, FormFooterLine, DarkButton } from "../../utils/style/Atoms";

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
        <BaseContainer>
            <FormTitleContainer>
                <FormTitle>Connectez-Vous</FormTitle>
                <FormSubTitle>Ou créez votre compte</FormSubTitle>
            </FormTitleContainer>
            <FormContainer>
                <FormBody onSubmit={(e) => HandleSubmit(e)} ref={formRef}>
                    <FormInput
                        type="email"
                        placeholder="Adresse e-mail"
                        ref={inputEmail}
                    />                   
                    
                    <FormInput
                        type="password"
                        placeholder="Mot de passe"
                        ref={inputPassword}
                    />
                    <DarkButton type="submit">Se Connecter</DarkButton>
                </FormBody>
                <FormFooterLine />
                <Link to="/signup"><DarkButton>Créer Un Nouveau Compte</DarkButton></Link>
            </FormContainer>
        </BaseContainer>

        
    );

}

export default Login