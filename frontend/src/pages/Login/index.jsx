import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
    }, []);

    const handleLogout = () => {
        setEmail("");
        setPassword("")
        setUser({});
        localStorage.clear();
    };
          
    const HandleSubmit = async e => {

        e.preventDefault();
        
        const user = { email, password }
        
        try {

            const response = await axios.post('http://localhost:3000/api/auth/login', user)
    
            setUser(response.data)

            console.log(response.data)

            localStorage.setItem('user', JSON.stringify(response.data))

        } catch (error) {
            console.log(error)
            return <span>il y as un probleme</span>
        } 
        

    }

    if (user) {
        return (
            <div>
                <div>{user.pseudo} is loggged in </div>
                <button onClick={handleLogout}>logout</button>
            </div>
            
        );
        
    }

    // if there's no user, show the login form
    return (
        <form onSubmit={HandleSubmit}>
            <label htmlFor="mail">Mail : </label>
            <input
            type="text"
            value={email}
            placeholder="enter a username"
            onChange={({ target }) => setEmail(target.value)}
            />
            
            <div>
                <label htmlFor="password">password: </label>
                <input
                    type="password"
                    value={password}
                    placeholder="enter a password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type="submit">Se Connecter</button>
        </form>
    );

}

export default Login