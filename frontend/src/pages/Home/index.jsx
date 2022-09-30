import { useSelector } from "react-redux"
import { selectCache } from "../../utils/selectors"
import * as AtomsStyles from "../../utils/style/Atoms";

function Home(){
    const cache = useSelector(selectCache)

    return (
        
        <AtomsStyles.BaseContainer>
            {cache ? (
                <div>Bienvenue {cache.pseudo}</div>
            ) : (
                <div>Hello world</div>
            )}
        </AtomsStyles.BaseContainer>
        
    )
}

export default Home