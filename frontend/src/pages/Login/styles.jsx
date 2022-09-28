import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const LoginContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 38px;
    margin-bottom: 127px;
`
export const LoginTitleContainer = styled.div `
    display: flex;
    flex-direction: column;
    background-color: ${colors.tertary};
    width: 396px;
    padding-top: 4px;
    padding-bottom: 24px;
    padding-left: 16px;
    border-radius: 20px 20px 0px 0px;
`
export const LoginTitle = styled.p `
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: ${colors.secondary};
    margin: 0px;
`
export const LoginSubTitle = styled.p `
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.secondary};
    margin: 0px;
`
export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.secondary};
    width: 396px;
    border-width: 0px 0.5px 0.5px 0.5px;
    border-color: ${colors.black};
    box-shadow: 0px 4px 4px rgba(78, 81, 102, 0.5);
    border-radius: 0px 0px 20px 20px;
    padding-top: 16px;
    padding-bottom: 30px;
`
export const LoginFooterLine = styled.div `
    width: 364px;
    height: 0px;
    border: 1px solid ${colors.black};
    margin: 36px 16px 21px 16px;
`
export const LoginButton = styled.button `
    padding: 16px;
    background-color: ${colors.tertary};
    color: ${colors.white};
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    text-shadow: 0px 4px 4px ${colors.black};
    filter: drop-shadow(0px 4px 4px rgba(253, 45, 1, 0.5));
    border-radius: 30px;

    &:hover{
        filter: none;
        background-color: ${colors.white};
        //box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        box-shadow: inset 0px 4px 4px rgba(253, 45, 1, 0.5);
        color: ${colors.tertary};
        text-shadow: 0px 4px 4px rgba(78, 81, 102, 0.5);
        font-weight: 400;
        transition: .3s;
    }
`
export const LoginInput = styled.input `
    width: 364px;
    background-color: ${colors.white};
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 12px;

    &::placeholder{
        color: #D9D9D9;
    }
`
export const FormBody = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
`