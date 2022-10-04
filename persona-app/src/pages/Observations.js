import React from 'react';
import "./Generic.css";
import "./Observations.css";

export default function () {
    return (
        <>
            <div className="content">
                <div>
                    <h1>Key Observations</h1>
                    <p>
                        Though I watched numerous students use the printers, I
                        focused my observations on three, noting some patterns in <b>bold</b>:
                    </p>
                    <ul>
                        <li id="bullet">User 1</li>
                            <ul>
                                <li>Walked quickly to the printer area</li>
                                <li><b>Swiped ID and printed documents within a few seconds</b></li>
                                <li>Picked up papers and <b>quickly left printer area</b></li>
                            </ul>
                        <li id="bullet">User 2</li>
                            <ul>
                                <li>Walked up to printer area and looked around</li>
                                <li>Briefly examined each printer before picking the
                                    printer at the far right
                                </li>
                                <li>Pulled out computer, spent a few minutes <b>looking 
                                    back and forth from printer </b> to computer
                                </li>
                                <li><b>Swiped ID and printed documents within a few seconds</b></li>
                                <li>Briefly examined each printed paper before leaving</li>
                            </ul>
                        <li id="bullet">User 3</li>
                            <ul>
                                <li>Walked quickly to printer area with a friend</li>
                                <li><b>Swiped ID quickly </b>but spent a few seconds staring at the computer</li>
                                <li>Told friend their print job wasn't there</li>
                                <li>Both people <b>looked back and forth with frustrated expressions from printer </b> to phone</li>
                                <li>User logged out/swiped into the printer computer multiple times</li>
                                <li>User's friend ended up swiping ID and printing</li>
                                <li>Picked up papers and <b>quickly left printer area</b></li>
                            </ul>
                    </ul>
                    <p>
                        Generally, a sense of urgency seemed to hover over the task of printing, and users experiencing some degree of stress seemed to refer to the tops of the printers (which is also where the 'help' flyers are).
                    </p>

                    <h1>Interviews</h1>
                    <p>
                        After observing the users, I interviewed each of them on their printing experience. Once again, I've noted patterns in <b>bold</b>.
                    </p>
                    <ol>
                        <li id="bullet">Have you ever used the school printers before?</li>
                            <ul>
                                <li>User 1 - Yes.</li>
                                <li>User 2 - No.</li>
                                <li>User 3 - Yes.</li>
                            </ul>
                        <li id="bullet">How did you learn to upload a file to the printer?</li>
                            <ul>
                                <li>User 1 - When I first learned, a friend showed me.</li>
                                <li>User 2 - I went to the website on the <b>help flyer</b>.</li>
                                <li>User 3 - When I first learned, I used the <b>help flyer</b>.</li>
                            </ul>
                        <li id="bullet">Did you experience any difficulty with the printer or the general printing process? If so, please elaborate.</li>
                            <ul>
                                <li>User 1 - No.</li>
                                <li>User 2 - Not really, I just had to find the website.</li>
                                <li>User 3 - Yes. My print job said it was ready to print on the MyPrint website, but when I swiped into the printer, nothing was there.</li>
                            </ul>
                        <li id="bullet">Did you find anything particularly easy or intuitive about using the printer or the general printing process?</li>
                            <ul>
                                <li>User 1 - <b>Swiping </b> into the printer is made really obvious, and all the printers work very fast.</li>
                                <li>User 2 - Uploading on the website was easy and <b>swiping</b>/printing was really quick and easy.</li>
                                <li>User 3 - <b>Swiping </b> is super intuitive since it's the only thing on the screen when you're not logged in.</li>
                            </ul>
                        <li id="bullet">Did you use any of the help signs? If so which one(s)?</li>
                            <ul>
                                <li>User 1 - No.</li>
                                <li>User 2 - Yes! The <b>larger sign </b> with the website on it.</li>
                                <li>User 3 - Yes! The <b>larger sign </b> to find the IT website.</li>
                            </ul>
                        <li id="bullet">Is there any functionality (that the printer doesn't already have) that you think would improve the printer?</li>
                            <ul>
                                <li>User 1 - Being able to airdrop or directly upload files to the printer computer could make printing even faster.</li>
                                <li>User 2 - No.</li>
                                <li>User 3 - Sometimes the lag between uploading files online and seeing them on the printer is annoying. Also, if you want to print single-sided documents, you have to either manually add blank pages to your doc or download the printers [sic. MyPrint] to your laptop.</li>
                            </ul>
                    </ol>
                </div>
            </div>
        </>
    );
}