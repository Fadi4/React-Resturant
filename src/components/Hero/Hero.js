import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import {HeroContainer,HeroItems,HeroContent,Heroh1,Herobtn,HeroP} from './HeroElements'

function Hero() {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <Heroh1>Greatest Pizza Ever</Heroh1>
                    <HeroP>Ready in 60 Seconds</HeroP>
                    <Herobtn>Place Order</Herobtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
