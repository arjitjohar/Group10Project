
import React, { useState, Component, FunctionComponent, FC } from 'react';
//import Modal from 'react-bootstrap/Modal';
import { Button, Modal } from 'react-bootstrap';




function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
type CatProps = {
  mouse: MouseState
}

type MouseState = {
  x: number,
  y: number
}

export class Cat extends Component<CatProps> {
  render() {
    const { mouse } = this.props;
    return (
      <img src="cat.gif" style={ { position: 'absolute', left: mouse.x, top: mouse.y } } />
    );
  }
}


export const Landing = () => {
     const [modalShow, setModalShow] = React.useState(false);
    const toggleModal = () => setModalShow(!modalShow);



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

    

    return (
        <div>
            <div className="bg-gray-300 min-h-screen flex flex-col p-8 justify-center">
                <div className="font-extrabold text-center text-lg"> Music Tab</div>
                    <div className="container max-w-md w-full mx-auto p-32 text-center border border-gray-50 background bg-white bg">
                        
                    </div>

                <div className="max-w-md w-full mx-auto">
                    <div className="flex md:space-x-2 justify-center">
                        <button className="w-20 hover:bg-green-400 align-center border border-green-400 bg-green-300 rounded-lg font-medium">random button</button>
                        <Button className="w-20 hover:bg-blue-400 align-center border border-blue-400 bg-blue-300 rounded-lg font-medium" variant="primary" onClick={toggleModal}> Launch demo modal</Button>                        
                        <button className="w-20 hover:bg-red-400 align-center border border-red-400 bg-red-300 rounded-lg font-medium">random button</button>
                        
                    </div>
                </div>
            </div>

            
            
        </div>

    )
    
}