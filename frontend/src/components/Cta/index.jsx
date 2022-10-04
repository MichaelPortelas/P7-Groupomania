import { useSelector } from "react-redux"
import { selectCache } from "../../utils/selectors"

import { RowCta, ColCta, ColCtaText } from "./styles";
import { StyledLink } from '../../utils/style/Atoms'

function Cta() {
    const cache = useSelector(selectCache)

    return (
        <ColCta xs={10} md={8} lg={6} className="border border-2 rounded-4">                    
            <RowCta className="p-4 justify-content-center rounded-4">
                <ColCtaText className="py-2 rounded-4">
                    {cache ? (
                            <StyledLink href="#" className="fs-5">Quoi de neuf, {cache.pseudo} ?</StyledLink>
                    ) : (                        
                            <StyledLink href="/login" className="fs-5">Hello Connecte toi pour créer un post.</StyledLink>                           
                    )}
                </ColCtaText>
            </RowCta>
        </ColCta>  
    )
}

export default Cta