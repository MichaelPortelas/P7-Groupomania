import { useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectCache } from "../../utils/selectors";
import { setCache } from "../../features/users.slice";
import * as AtomsStyles from "../../utils/style/Atoms";

const SignUp = () => {
    const formRef = useRef();
    const inputPseudo = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const dispatch = useDispatch();
    
    const cache = useSelector(selectCache);
    
    const HandleSubmit = (e) => {
        
        e.preventDefault();
        
        const data = {
            pseudo: inputPseudo.current.value,
            email:  inputEmail.current.value,
            password:  inputPassword.current.value,
        }

        axios.post('http://localhost:3000/api/auth/signup', data)
        .then((res) => {
            console.log(res.data.message);

            formRef.current.reset();

            // On Connecte le nouveau user et on mets en cache la session
            axios.post('http://localhost:3000/api/auth/login', data)
            .then((res) => {
                
                dispatch(setCache(res.data));

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
        <AtomsStyles.BaseContainer>
            <AtomsStyles.FormTitleContainer>
                <AtomsStyles.FormTitle>Inscrivez-Vous</AtomsStyles.FormTitle>
                <AtomsStyles.FormSubTitle>C'est rapide et facile.</AtomsStyles.FormSubTitle>
            </AtomsStyles.FormTitleContainer>
            <AtomsStyles.FormContainer>
                <AtomsStyles.FormBody onSubmit={(e) => HandleSubmit(e)} ref={formRef}>
                    <AtomsStyles.FormInput
                        type="text"
                        placeholder="Pseudo"
                        ref={inputPseudo}
                    />                    
                    
                    <AtomsStyles.FormInput
                        type="email"
                        placeholder="Adresse e-mail"
                        ref={inputEmail}
                    />     
                    
                    <AtomsStyles.FormInput                        type="password"
                        placeholder="Mot de passe"
                        ref={inputPassword}
                    />
                    
                    <AtomsStyles.FormFooterLine />
                    <AtomsStyles.DarkButton type="submit">S'inscrire</AtomsStyles.DarkButton>
                </AtomsStyles.FormBody>
            </AtomsStyles.FormContainer>
        </AtomsStyles.BaseContainer>
        
    );
};

export default SignUp