import { useSelector } from "react-redux"
import { selectCache } from "../../utils/selectors"

function Home(){
    const cache = useSelector(selectCache)

    if (cache) {
        return (
            <div>
                <div>Bienvenue {cache.pseudo}</div>
            </div>
            
        );
        
    }

    return (
        <div>Hello world</div>
    )
}

export default Home