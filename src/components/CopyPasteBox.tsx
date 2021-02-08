import * as React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default class CopyPasteBox extends React.Component {
 
  render(){
    return (
      <div>
        <textarea cols={130} rows={15}></textarea>
              
      </div>
    );
  }
    
  
}