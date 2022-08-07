import React, {useState} from "react";
import Header from "../Header/Header";
import Sidebar from "./Sidebar";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
        </>
    );
};

export default Navbar;