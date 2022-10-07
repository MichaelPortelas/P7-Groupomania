import colors from './colors'
import styled, { keyframes } from 'styled-components'

import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

export const DarkButton = styled(Button) `
    background-color: ${colors.tertary};
    color: ${colors.secondary};
    border-radius: 20px;
    text-shadow: 0px 4px 4px ${colors.black};

    &:hover{
      box-shadow: 0px 4px 4px rgba(78, 81, 102, 0.5);
      transition: .3ms;
    }
`

export const FormFooterLine = styled.div `
    width: 100%;
    height: 0px;
    border: 1px solid ${colors.black};
`
export const FormTitle = styled.p `
    color: ${colors.secondary};
`
export const Logo = styled.img `
    width: 60%;
`

export const RowFormTitle = styled(Row) `
    background-color: ${colors.tertary};
    padding-top: 4px;
    padding-bottom: 24px;
    padding-left: 16px;
    border-radius: 20px 20px 0px 0px;
`
export const RowForm = styled(Row) `
    background-color: ${colors.secondary};
    border-width: 0px 0.5px 0.5px 0.5px;
    border-color: ${colors.black};
    box-shadow: 0px 4px 4px rgba(78, 81, 102, 0.5);
    border-radius: 0px 0px 20px 20px;
    padding-top: 16px;
    padding-bottom: 30px;    
`
export const FormControlInput = styled(Form.Control)`
    background-color: ${colors.white};
    
    &::placeholder{
        color: #D9D9D9;
    }
`
export const ModalHeader = styled(Modal.Header) `
  background-color: ${colors.tertary};
`
export const ModalTitle = styled(Modal.Title) `
  color: ${colors.secondary};
`
export const ModalBody = styled(Modal.Body) `
  background-color: ${colors.secondary};
`
export const ModalFooter = styled(Modal.Footer) `
  background-color: ${colors.secondary};
`