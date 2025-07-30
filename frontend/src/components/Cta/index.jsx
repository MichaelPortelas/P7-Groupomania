import { useSelector } from "react-redux"
import { selectCache } from "../../utils/selectors"

import AddPost from "../AddPost";

import { RowCta, ColCta, ColCtaText } from "./styles";
import { StyledLink } from '../../utils/style/Atoms'

import Row from 'react-bootstrap/Row';

function Cta() {

    // on recupère le cache dans le state redux
    const cache = useSelector(selectCache)
    
    return (
        <Row className="justify-content-center">
            <ColCta xs={10} md={8} lg={6} className="border border-2 rounded-4">                    
                <RowCta className="p-4 justify-content-center rounded-4">
                    <ColCtaText className="py-2 rounded-4">
                        {cache ? (
                                <AddPost pseudo={cache.pseudo} />                           
                        ) : (                        
                                <StyledLink href="/login" className="fs-5">Hello Connecte toi pour créer un post.</StyledLink>                           
                        )}
                    </ColCtaText>
                </RowCta>
            </ColCta>  
        </Row>
    )
}

export default Cta