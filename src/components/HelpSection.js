import * as React from "react";

import pic1 from "./../images/imagesForHelp/1.png";
import pic2 from "./../images/imagesForHelp/2.png";
import pic3 from "./../images/imagesForHelp/3.png";
import pic4 from "./../images/imagesForHelp/4.png";
import pic5 from "./../images/imagesForHelp/5.png";
import nav1 from "./../images/imagesForHelp/nav1.png";
import nav2 from "./../images/imagesForHelp/nav2.png";
import nav3 from "./../images/imagesForHelp/nav3.png";
import nav4 from "./../images/imagesForHelp/nav4.png";
import nav5 from "./../images/imagesForHelp/nav5.png";
import nav6 from "./../images/imagesForHelp/nav6.png";

export default class Helpsection extends React.Component {
    render() {
        return (
            <>
                <div>
                    <p className="text-5xl text-white">Purpose</p>

                    <br></br>
                    <br></br>

                    <p>
                        The Textsheet to MusicXML converter is intended to be
                        used to convert .txt textsheet music sheets into
                        MusicXML files.
                    </p>
                    <br></br>

                    <p>
                        This product is intended to be used by people interested
                        in music who want a streamlined, easy and convenient way
                        to convert the text based music sheets they may find
                        online into a MusicXML, which is much easier file type
                        to read for music sheet notation. It is able to
                        represent beams, repeats, slurs, measures and more.
                    </p>
                    <br></br>

                    <p>
                        MusicXML is used by many companies, software developers
                        and scholars use MusicXML in their own products.
                    </p>
                    <br></br>

                    <p>
                        XML is used to solve problems with music software which
                        is creating a universal language that all programs can
                        understand. A Common interface language like this allows
                        various programs to communicate with each other with
                        relative ease.
                    </p>
                    <br></br>

                    <p>
                        XML takes away the challenge of learning the syntax of
                        how to format music sheets, and instead allowing a user
                        to just focus on what they want to represent. There are
                        tons of tools already available which can easily read an
                        XML file so the challenge of “what to do after an XML
                        file is made” is avoided.
                    </p>
                    <br></br>

                    <p>
                        MusicXML is also free and open source meaning that using
                        the file type is easily accessible for all and can be
                        easily modified to the users content.
                    </p>
                    <br></br>

                    <p className="text-5xl text-white">
                        Technical specifications
                    </p>
                    <br></br>

                    <p>
                        Ensure your system is running one of the versions of the
                        browsers below or newer in order for your system to be
                        able interact with our software.
                    </p>

                    <br></br>

                    <h3>Browsers Supported</h3>
                    <ul>
                        <li>Chrome 49 (release: 2016/3/2)</li>
                        <li>Firefox 50 (release: 2016/11/15)</li>
                        <li>Safari 10 (release: 2016/9/20)</li>
                        <li>IE 9 (release: 2011/3/14)</li>
                        <li>Edge 14 (release: 2016/2/18)</li>
                    </ul>
                    <br></br>
                    <br></br>

                    <p className="text-5xl text-white">
                        Description of how to use/operate the product
                    </p>
                    <h3>
                        In the case that the user wants to import a file, two
                        ways exist,
                    </h3>
                    <p>The user can drag-and-drop a txt file into this area.</p>
                    <img className="h-20" src={pic1} alt="Group 10 Logo"></img>
                    <p>
                        The user can click the drag-and-drop area to manually
                        select a file they want using their file manager system
                        as shown below.
                    </p>
                    <img className="h-20" src={pic2} alt="Group 10 Logo"></img>
                    <p>
                        The button with the text “Start Conversion” is required
                        to start the conversion from txt to musicXML file.
                    </p>
                    <img className="h-20" src={pic3} alt="Group 10 Logo"></img>

                    <p>
                        After the button with the text “Download” is clickable,
                        the user can then download the musicXML file.
                    </p>
                    <img className="h-20" src={pic4} alt="Group 10 Logo"></img>

                    <p>
                        The user can then use a third party software/website to
                        view their musicXML file in a music sheet.
                    </p>

                    <p>In the case that the user wants to copy paste a text,</p>

                    <p>
                        The text is pasted on the copy and paste box below the
                        drag and drop area, as shown below.
                    </p>
                    <img className="h-20" src={pic5} alt="Group 10 Logo"></img>

                    <p>
                        The button with the text “Start Conversion” is required
                        to start the conversion from txt to musicXML file.
                    </p>
                    <img className="h-20" src={pic3} alt="Group 10 Logo"></img>
                    <p>
                        After the button with the text “Download” is clickable,
                        the user can then download the musicXML file.
                    </p>
                    <img className="h-20" src={pic4} alt="Group 10 Logo"></img>

                    <p>
                        The user can then use a third party software/website to
                        view their musicXML file in a music sheet.
                    </p>

                    <h1>Troubleshooting section and instructions on how to</h1>
                    <ol>
                        <li>Refresh the page</li>
                        <li>
                            If there is an update available, update your current
                            browser
                        </li>
                        <li>
                            If the problem is not fixed, try another browser
                        </li>
                        <li>
                            If the website is down or went down during the
                            conversion, please send a report to
                            “hiangel@my.yorku.ca”
                        </li>
                    </ol>

                    <h1>Description of the UI</h1>
                    <p>
                        The left side of the site's top header features three
                        tabs which link to different pages on the site. These
                        include:
                    </p>

                    <dl>
                        <dt>Home:</dt>
                        <img
                            className="h-20"
                            src={nav1}
                            alt="Group 10 Logo"
                        ></img>
                        <dd>
                            The homepage of the website. This is where the text
                            to MusicXML converter is located. For information
                            about this page's UI and instructions on how to use
                            it, see the "Description of how to use/operate the
                            product" section.
                        </dd>

                        <dt>Help:</dt>
                        <img
                            className="h-20"
                            src={nav2}
                            alt="Group 10 Logo"
                        ></img>
                        <dd>
                            This page is where the online version of this user
                            manual for the website is found. This user manual
                            provides all relevant information about the site,
                            and how to operate it.
                        </dd>

                        <dt>About:</dt>
                        <img
                            className="h-20"
                            src={nav3}
                            alt="Group 10 Logo"
                        ></img>
                        <dd>
                            This page introduces and provides information about
                            all of the team members involved in the creation of
                            the website (Group 10). The team members are Arjit
                            Johar, Muhammad Azizi, Daniel Santorelli, Alp Sirek
                            and Andrew Ngov.
                        </dd>

                        <dt>Log In:</dt>
                        <img
                            className="h-20"
                            src={nav4}
                            alt="Group 10 Logo"
                        ></img>
                        <dd>
                            When clicked on, the user is prompted to log into
                            their previously existing account using their
                            registered email account and password.
                        </dd>

                        <dt>Sign Up:</dt>
                        <img
                            className="h-20"
                            src={nav5}
                            alt="Group 10 Logo"
                        ></img>
                        <dd>
                            If the user has not yet created an account, this
                            button is used to do so. Once clicked on, they will
                            be prompted to enter a valid email account and
                            password to use as their account credentials.
                        </dd>

                        <dt>GitHub Repository:</dt>
                        <img
                            className="h-20"
                            src={nav6}
                            alt="Group 10 Logo"
                        ></img>
                        <dd>
                            Also featured on this side of the header is a button
                            shaped like the GitHub logo, which links directly to
                            the GitHub repository used to develop this website.
                        </dd>
                    </dl>

                    <br></br>
                    <br></br>
                </div>
            </>
        );
    }
}
