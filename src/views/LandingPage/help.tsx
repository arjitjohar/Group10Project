import * as React from "react";
//import Modal from 'react-bootstrap/Modal';
import Header from "./../../components/Header";
import Helpsection from "./../../components/HelpSection";

export const Help = () => {
    const [showModal, setShowModal] = React.useState(false);

    let ShowModalCSS = "None";

    //implement function to close modal
    //to do list

    //not using React boostrap, using display html instead to show Modal

    return (
        <div>
            <div className="bg-auto bg-blue-400">
                <Header />

                
                    
                <Helpsection/>
                   
                

                
            </div>
        </div>
    );
};
