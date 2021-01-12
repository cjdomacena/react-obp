import React from 'react'
import { Container } from '../GlobalComponents';
import {
    NavbarContainer,
    LogoContainer, LogoTitle, NavMenu, NavItems, NavLinks, NavBtn
} from './NavbarStyles';
import { FaBars } from 'react-icons/fa';

const NavBar = ({ handleClick}) => {
    return (
        <>
            <Container>
                <NavbarContainer>
                    <LogoContainer>
                        {/* <ImageContainer /> */}
                        <LogoTitle>OFFENDED BY PASSION</LogoTitle>
                    </LogoContainer>
                    <NavMenu>
                        <NavItems>

                            <NavLinks to="/">Home</NavLinks>
                            <NavLinks to="/">Roster</NavLinks>
                            <NavLinks to="/">About Us</NavLinks>
                            <NavLinks to="/"> Contact</NavLinks>
                            <NavBtn onClick = {handleClick}>
                                <FaBars className="mobileIcons" />
                            </NavBtn>

                        </NavItems>

                    </NavMenu>

                </NavbarContainer>
            </Container>
        </>
    )
}

export default NavBar
