import React, {useState} from 'react'
import NavBar from '../../components/Navbar/NavBar'
import MobileNav from '../../components/MobileNav/MobileNav'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = ()=>
    {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <NavBar  handleClick={handleClick}/>
            <MobileNav isOpen = {isOpen} handleClick={handleClick} />
            
        </>
    )
}

export default Home
