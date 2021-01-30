import React, { useState } from 'react';
//import Modal from 'react-bootstrap/Modal';
<<<<<<< HEAD
import { Button, Modal } from 'react-bootstrap'


=======
import { Button, Modal } from 'react-bootstrap';




export const Landing = () => {

    function import_new_music()
    {
        return setCount(count+1)
    }

    function reset(){
        return setCount(0)
    }
>>>>>>> parent of b4e9b2c... updated modal

    function copy_paste(){
        return setCount(99)
    }

<<<<<<< HEAD
export const Landing = () => {
  const [showModal, setShowModal] = React.useState(false);

  let ShowModalCSS = "None";
  function toggleModal() {
    setShowModal(!showModal);
    if(showModal){
      ShowModalCSS = "";
    } else {
      ShowModalCSS = "None";
    }
  }

  function closeModal(){
    setShowModal(false)
    ShowModalCSS="None"
  }

//implement function to close modal

//implement lorem ipsum text


    function clicked_new_text()
            {
                  <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
                  <div className=" bg-gray-200">
                    <div className="flex justify-between items-center ">
                        <h4 className="text-lg font-bold"> confirm delete?</h4>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div> 
                    <div className="mt-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Voluptatum animi autem adipisci quos! Libero blanditiis 
                          sunt itaque ducimus dolor optio possimus odio error 
                          iusto commodi accusamus, vitae dolore debitis facilis.</p>  
                    </div>
                    <div className="mt=3 flex justify-end space-x-3">
                      <button>cancel</button>
                      <button>delete</button>
                    </div>
                  </div>
              </div>
              
              
            }
=======
    const [count, setCount] = useState(0);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
>>>>>>> parent of b4e9b2c... updated modal

    

    return (
        <div>
            <div className="bg-gray-300 min-h-screen flex flex-col p-8 justify-center">
                <div className="font-extrabold text-center text-lg"> Music Tab</div>
                    <div className="container max-w-md w-full mx-auto p-32 text-center border border-gray-50 background bg-white bg">
                        
                    </div>

                <div className="max-w-md w-full mx-auto">
                    <div className="flex md:space-x-2 justify-center">
<<<<<<< HEAD
                        <button className="w-15 hover:bg-green-400 transition duration-100 align-center border border-green-400 bg-green-300 rounded-lg font-medium px-4">import</button>
                        <Button className="w-15 hover:bg-blue-400 transition duration-100 align-center border border-blue-400 bg-blue-300 rounded-lg font-medium px-4" variant="primary" onClick={toggleModal}>paste</Button>                        
                        <button className="w-15 hover:bg-red-400 transition duration-100 align-center border border-red-400 bg-red-300 rounded-lg font-medium px-4">reset</button>
                        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center" style={(showModal) ? {display: ""} : {display: "None"}}>
                        <div className=" bg-gray-200">
                         <div className="flex justify-between items-center ">
                          <h4 className="text-lg font-bold"> Copy and Paste Text!</h4>
                          <button type="button" className="hover:bg-blue-300 transition duration-500 " onClick={closeModal}>
                          <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                          </button>
                       </div> 
                        <div className="mt-2">
                        
                              
                    </div>
                    <div className="mt=3 flex justify-end space-x-3">
                      <button className="w-20 hover:bg-gray-400 transition duration-100 align-center border border-gray-400 bg-gray-300 rounded-lg font-medium">accept</button>
                    </div>
                  </div>
                  
              </div>
                    

                        
=======
                        <button onClick={() => import_new_music()} className="w-20 align-center border border-green-400 bg-green-300 rounded-lg">1</button>
                        <button onClick={() => reset()} className="w-20 align-center border border-blue-400 bg-blue-300 rounded-lg">2</button>
                        <button onClick={() => copy_paste()} className="w-20 align-center border border-red-400 bg-red-300 rounded-lg">3</button>
                        <button onClick={handleShow} className="w-20 align-center border border-red-400 bg-red-300 rounded-lg">3</button>
>>>>>>> parent of b4e9b2c... updated modal
                    </div>

                    
                </div>


            </div>

<<<<<<< HEAD


            
            
        </div>
        
=======
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
>>>>>>> parent of b4e9b2c... updated modal



        </div>
        
    )
}
