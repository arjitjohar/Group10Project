import React, { useState } from 'react';
//import Modal from 'react-bootstrap/Modal';
import { Button, Modal } from 'react-bootstrap';




export const Landing = () => {

    function import_new_music()
    {
        return setCount(count+1)
    }

    function reset(){
        return setCount(0)
    }

    function copy_paste(){
        return setCount(99)
    }

    const [count, setCount] = useState(0);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    return (
        <div>
            <div className="bg-gray-300 min-h-screen flex flex-col p-8 justify-center">
                <div className="font-extrabold text-center text-lg"> Music Tab</div>
                    <div className="container max-w-md w-full mx-auto p-32 text-center border border-gray-50 background bg-white bg">
                        
                    </div>

                <div className="max-w-md w-full mx-auto">
                    <div className="flex md:space-x-2 justify-center">
                        <button onClick={() => import_new_music()} className="w-20 align-center border border-green-400 bg-green-300 rounded-lg">1</button>
                        <button onClick={() => reset()} className="w-20 align-center border border-blue-400 bg-blue-300 rounded-lg">2</button>
                        <button onClick={() => copy_paste()} className="w-20 align-center border border-red-400 bg-red-300 rounded-lg">3</button>
                        <button onClick={handleShow} className="w-20 align-center border border-red-400 bg-red-300 rounded-lg">3</button>
                    </div>
                </div>


            </div>

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



        </div>
        
    )
}
