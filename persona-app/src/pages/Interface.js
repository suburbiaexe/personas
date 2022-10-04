import React from 'react';
import "./Generic.css";
import sketch from "../imgs/printer_sketch.png";
import help from "../imgs/help.png";
import qr from "../imgs/qr.png";

export default function () {
    return (
        <>
            <div className="content">
                <div>
                    <h1>Printers</h1>
                    <p>
                        For this project, I chose to observe students interacting
                        with the printers in the Sci-Li (see figure below). My reason
                        for doing so was twofold: the printers in the Sci-Li are frequently
                        used, and using them scared me so much that I avoided them 
                        entirely until the end of my Sophomore year.
                    </p>
                </div>

                <div className="singleImage">
                    <img src={sketch} width={650} height={400} alt="Sketch of Sci-Li printers" />
                </div>

                <div>
                    <p>
                        There are 2 main components to the Sci-Li printers: the first
                        is the computer, which is where you swipe your ID to access/print
                        the print jobs associated with your account. To submit a print job,
                        you have to use either the MyPrint website, or add MyPrint/the
                        school's printer names to your personal computer. The second component
                        is the printer itself. You can't do much with/to it outside of
                        grabbing your paper once you've printed the documents from the 
                        computer.
                    </p>

                    <p>
                        Each printer also has 2 flyers taped on top (see below): the larger
                        is an instructional flyer directing students to the MyPrint
                        website and the IT website for additional help. The smaller
                        is a QR code that directs to the IT website for a full list
                        of printers on campus in case student's need a different one.
                    </p>
                </div>

                <div className="dualImages">
                    <img src={help} width={400} height={500} alt="Larger help flyer" />
                    <img src={qr} width={400} height={500} alt="Smaller flyer with QR code" />
                </div>
            </div>
        </>
    );
}