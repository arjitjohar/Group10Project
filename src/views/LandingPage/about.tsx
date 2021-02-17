import * as React from "react";
//import Modal from 'react-bootstrap/Modal';
import Header from "./../../components/Header";
import AboutSection from "./../../components/AboutSection";

export const About = () => {
    const [showModal, setShowModal] = React.useState(false);

    let ShowModalCSS = "None";

    //implement function to close modal
    //to do list

    //not using React boostrap, using display html instead to show Modal

    return (
        <div>
            <div className="min-h-screen bg-gray-600">
                <Header />

                <div className="h-64">
                    <div className="p-4 m-4 bg-green-300 h-full">
                        <AboutSection />
                    </div>
                </div>

                <div>
                    {/*\
              this is for buttons and shi
            */}
                </div>
            </div>
        </div>
    );
};
