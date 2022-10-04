import React from 'react';
import './Home.css';

import { BsPrinter, BsEyeglasses, BsPerson, BsBook } from "react-icons/bs";
import { Button } from "@mui/material";

export default function () {
    return (
        <>
            <div className="frontPage">
                <div className="title">
                    <p id="head">personas</p>
                    <p id="descrip">an exercise in UX research to better understand how 
                        Brown University students interact with the interfaces around them</p>
                </div>

                <div className="Nav">
                    <Button href="/interface" variant="text" startIcon={< BsPrinter />} id="navButton">
                        interface
                    </Button>
                    <Button href="/observations" variant="text" startIcon={< BsEyeglasses />} id="navButton">
                        observations
                    </Button>
                    <Button href="/personas" variant="text" startIcon={< BsPerson />} id="navButton">
                        personas
                    </Button>
                    <Button href="storyboard" variant="text" startIcon={< BsBook />} id="navButton">
                        storyboard
                    </Button>
                </div>
            </div>
        </>
    );
}