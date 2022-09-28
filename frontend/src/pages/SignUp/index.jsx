import { useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectCache } from "../../utils/selectors";
import { setCache } from "../../features/users.slice";

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
        <form onSubmit={(e) => HandleSubmit(e)} ref={formRef}>
            <input
                type="text"
                placeholder="enter a username"
                ref={inputPseudo}
            />
            
            <div>
            <input
                type="email"
                placeholder="enter a username"
                ref={inputEmail}
            />
            </div>
            
            <div>
            <input
                type="password"
                placeholder="enter a password"
                ref={inputPassword}
            />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default SignUp