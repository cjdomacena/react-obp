import styled from 'styled-components';
import  {Link}  from 'react-router-dom';

export const NavbarContainer = styled.div `
min-width: 100%;
display: flex;
justify-content: space-between;
height: 80px;
overflow: hidden;
padding: 0 1rem;
`

export const LogoContainer = styled.div`
width: 300px;
display: flex;
justify-content: space-evenly;
align-items: center;
max-height: 100%;
`
export const LogoTitle = styled.div `
width: 100%;
    font-size: 1.2rem;
    font-family: 'Saira Condensed', sans-serif;
    
`

export const NavMenu = styled.div`
  width: 300px;
`

export const NavItems = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 400px;
    max-width: 300px;
    height: 100%;
    font-family: 'Saira Condensed', sans-serif;
    @media (max-width: 768px)
        {
            width:auto;
            justify-content: flex-end;
            align-items: center;
        }


`

export const NavBtn = styled.div`
display: none;
    @media (max-width: 768px)
        {
            display: flex;
            justify-content: center;
            align-items: center;
        }
`



export const NavLinks = styled(Link)`
text-decoration: none;
color: #000;
cursor:pointer;
height: auto;
font-weight: 600;
font-size: 1rem;
&:hover{
    color: green;
}
@media (max-width: 768px)
        {
            display: none;
        }
`


