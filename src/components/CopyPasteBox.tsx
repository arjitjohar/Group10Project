import * as React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default class CopyPasteBox extends React.Component {
 
  render(){
    return (
      <div>
        <div className="app min-h-screen min-v-screen p-8 bg-grey-lightest font-sans text-xs">
                <TextareaAutosize rows={100} />
        </div>
      </div>
    );
  }
    
  
}