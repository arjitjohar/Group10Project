import * as React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";


function getFileData(fileUploaded) {
  return fileUploaded.data;
}
export default class CopyPasteBox extends React.Component {
  render(){
    return (
      <div>




        {/* <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}

          <Form //onSubmit={this.onSubmit}
          >
            <Input
              type="text"
              name="task"
              //onChange={this.onChange}
              //value={this.state.task}
              fluid
              placeholder="Create Task"
            />
            {/* <Button >Create Task</Button> */}
          </Form>




              
      </div>
    );
  }
    
  
}