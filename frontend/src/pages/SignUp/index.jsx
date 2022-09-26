import { selectUser } from "../../utils/selectors";
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from "../../features/user";
import { useEffect } from "react";

const SignUp = () => {
    const user = useSelector(selectUser)

    const HandleSubmit = async e => {
        
        const dispatch = useDispatch()

        e.preventDefault();      
        
        useEffect(() => {
            dispatch(createUser)
        }, [dispatch])

    }

     
    // if there's no user, show the login form
    return (
        <form onSubmit={HandleSubmit}>
            <label htmlFor="pseudo">Pseudo : </label>
            <input
            type="text"
            value={user.pseudo}
            placeholder="enter a username"
            onChange={({ target }) => user.pseudo = target.value}
            />
            
            <div>
            <label htmlFor="mail">Mail : </label>
            <input
            type="text"
            value={user.email}
            placeholder="enter a username"
            onChange={({ target }) => user.email = target.value}
            />
            </div>
            
            <div>
            <label htmlFor="password">password: </label>
            <input
                type="password"
                value={user.password}
                placeholder="enter a password"
                onChange={({ target }) => user.password = target.value }
            />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default SignUp