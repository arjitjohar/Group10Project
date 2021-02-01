
import React, { useState, Component, FunctionComponent, FC } from 'react';
//import Modal from 'react-bootstrap/Modal';
import { Button, Modal } from 'react-bootstrap'




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


  //implement function to close modal
  //to do list


  //not using React boostrap, using display html instead to show Modal

  return (
    <div>
      <div className="bg-purple-200 p-5">
              stuff
      </div>

      <div className="min-h-screen flex  p-8 justify-center" style={{backgroundColor:'#171a1c'}}>
        <div className="font-extrabold text-center text-lg " style={{color: 'white'}}> Music Tab</div>
        <div className="container max-w-md w-full mx-auto p-32 text-center border border-gray-50 background bg-white bg">

        </div>
        <div className="max-w-md w-full mx-auto">
          <div className="flex md:space-x-2 justify-center">
            <button className="w-15 hover:bg-green-400 transition duration-100  align-center border border-green-400 bg-green-300 rounded-lg font-medium px-4 ">import</button>
            <button className="w-15 hover:bg-blue-400 transition duration-100 align-center border border-blue-400 bg-blue-300 rounded-lg font-medium px-4" onClick={toggleModal}>paste</button>
            <button className="w-15 hover:bg-red-400 transition duration-100 align-center border border-red-400 bg-red-300 rounded-lg font-medium px-4 ">reset</button>
            <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center" style={(showModal) ? { display: "" } : { display: "None" }}>
              
              <div className=" bg-gray-200 p-30">
                <div className="flex justify-between items-center ">
                  <h4 className="text-lg font-bold"> Copy and Paste Text!</h4>
                  <button type="button" className="hover:bg-blue-300 transition duration-500 " onClick={closeModal}>
                    <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
                <div className="mt-2">
                    <textarea rows={4} cols={50}></textarea>
                </div>
                <div className="mt=3 flex justify-end space-x-3">
                    <button onClick={accept} className="w-20 hover:bg-gray-400 transition duration-100 align-center border border-gray-400 bg-gray-300 rounded-lg font-medium">accept</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      )
  }
