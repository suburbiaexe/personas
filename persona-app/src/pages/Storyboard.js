import React from 'react';
import "./Generic.css";
import story from "../imgs/storyboard.png";

export default function () {
    return (
        <>
            <div className="content">
                <div>
                    <h1>Storyboard</h1>
                    <p>
                        After creating my personas, I made a short storyboard documenting <b>Experienced Edward's </b> printer journey.
                    </p>
                </div>

                <div className="singleImage">
                    <img src={story} width={1000} height={800} alt="6-panel storyboard documenting the Experienced Edward persona's run-in with one of the Sci-Li printers"/>
                </div>
            </div>
        </>
    );
}