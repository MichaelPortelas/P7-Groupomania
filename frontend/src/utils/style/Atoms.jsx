import colors from './colors'
import styled, { keyframes } from 'styled-components'

import Nav from 'react-bootstrap/Nav';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`
export const StyledLink = styled(Nav.Link) `
  text-decoration: none;
  color: ${colors.black};
`
export const NavLink = styled.div `
    &:hover {
        border-bottom : 3px solid ${colors.primary};
        color: ${colors.secondary};
        font-weight: 400;
        transition: .3s;
    }
`

export const DarkButton = styled.button `
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
export const FormFooterLine = styled.div `
    width: 364px;
    height: 0px;
    border: 1px solid ${colors.black};
    margin: 36px 16px 21px 16px;
`
export const FormBody = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
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
export const FormTitleContainer = styled.div `
    display: flex;
    flex-direction: column;
    background-color: ${colors.tertary};
    width: 396px;
    padding-top: 4px;
    padding-bottom: 24px;
    padding-left: 16px;
    border-radius: 20px 20px 0px 0px;
`
export const FormTitle = styled.p `
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: ${colors.secondary};
    margin: 0px;
`
export const FormSubTitle = styled.p `
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.secondary};
    margin: 0px;
`
export const FormInput = styled.input `
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
export const BaseContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Logo = styled.img `
    width: 60%;
`