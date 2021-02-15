
import * as React from 'react'
import FileUploadBox from '../../components/FileUploadBox';
import CopyPasteBox from '../../components/CopyPasteBox';
//import Modal from 'react-bootstrap/Modal';
import Header from '../../components/header';







export const Landing = () => {
  const [showModal, setShowModal] = React.useState(false);

  let ShowModalCSS = "None";


  

  


  //implement function to close modal
  //to do list


  //not using React boostrap, using display html instead to show Modal

  return (
      <div>
        

        
        <div className="min-h-screen bg-gray-600"> 

          <Header/>
         
         
          <div className="mt-3 flex justify-center"> 
            <FileUploadBox/>   
          </div>

          <div className="mt-6 flex justify-center"> 
              <CopyPasteBox/>
          </div>

          <div>
            {/*\
              this is for buttons and shi
            */}
          </div>
         

    
        </div>
         
            
      </div>
        
      






      
    )
    

  }
