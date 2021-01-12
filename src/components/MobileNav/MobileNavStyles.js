import styled from 'styled-components'
import  {Link}  from 'react-router-dom';


export const Main = styled.div`
  position: absolute;
    right: ${ ({isOpen}) => (isOpen ? '0' : '-100%')};
    top: ${ ({isOpen}) => (isOpen ? '0' : '0') };
    transition: .5s ease-in-out;
    opacity: ${ ({isOpen}) => (isOpen ? '100%' : '0')};
    height: 100%;
    width: 100%;
    background-color: black;
    overflow: hidden;

`

export const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    font-size:1.5rem;
    cursor:pointer;
    outline: none;
    .color{
        color: white;
    }
`

export const Wrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    background-color: black;

`

export const NavContainer = styled.div`
    height: 50%;
    width: 50%;
`

export const NavItems = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

export const NavLinks = styled(Link)`
font-size: 1.2rem;
color: #F0F0F0;
cursor: pointer;
text-decoration: none;
font-family: 'Saira Condensed', sans-serif;
font-weight: 600;
&:hover
{
    color: gray;
    transition: 0.1s ease-in;
}
`