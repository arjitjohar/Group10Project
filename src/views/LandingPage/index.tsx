
import * as React from 'react'
//import Modal from 'react-bootstrap/Modal';
import { Button, Modal } from 'react-bootstrap'
import { render } from 'react-dom';
import CopyPasteBox from '../../components/CopyPasteBox';
import Header from '../../components/header';







export const Landing = () => {
  const [showModal, setShowModal] = React.useState(false);

  let ShowModalCSS = "None";
  function toggleModal() {
    setShowModal(!showModal);
    if (showModal) {
      ShowModalCSS = "";
    } else {
      ShowModalCSS = "None";
    }
  }

  function closeModal() {
    setShowModal(false)
    ShowModalCSS = "None"
  }

  function accept() {
    //some implementation here
    alert('accept was clicked')
  }
  
  function showImportedFile(){
    // show the text inside the imported file. 
  }

  


  //implement function to close modal
  //to do list


  //not using React boostrap, using display html instead to show Modal

  return (
      <div>
        <Header/>
        <div className="bg-gray-700 flex min-h-screen">
            <div >
                <CopyPasteBox/>
            </div>
        </div>
      </div>






      
    )
    

  }
