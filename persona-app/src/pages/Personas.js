import React from 'react';
import "./Generic.css";
import edward from "../imgs/persona_1.png";
import nancy from "../imgs/persona_2.png";

export default function () {
    return (
        <>
            <div className="content">
                <div>
                    <h1>Personas</h1>
                    <p>
                        After observing various users and conducting interviews, I created two personas with empathy maps using FigJam based on some of the patterns I noticed and answers I received.
                    </p>
                </div>

                <div className="dualImages">
                    <img src={edward} width={525} height={600} alt="A 4-quadrant empathy map of the Experienced Edward persona" />
                    <img src={nancy} width={525} height={600} alt="A 4-quadrant empathy map of the Nervous Nancy persona" />
                </div>
            </div>
        </>
    );
}