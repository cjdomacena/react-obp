import React from 'react'
import { Container } from '../GlobalComponents';
import { IoClose } from 'react-icons/io5'
import {Wrapper
, NavContainer, NavItems, NavLinks, Main, Icon
} from './MobileNavStyles';
const MobileNav = ({isOpen, handleClick}) => {
    return (
        <>
        <Main isOpen = {isOpen} onClick = {handleClick}>


            <Container >
                <Icon onClick={handleClick}>
                    <IoClose className="color" ></IoClose>
                </Icon>
               
                <Wrapper>
                    <NavContainer>
                        <NavItems>
                            <NavLinks to="/">Home</NavLinks>
                            <NavLinks to="/">Roster</NavLinks>
                            <NavLinks to="/">About Us</NavLinks>
                            <NavLinks to="/">Contact</NavLinks>
                        </NavItems>
                    </NavContainer>
                </Wrapper>
            </Container>
            </Main>
        </>
    )
}

export default MobileNav
