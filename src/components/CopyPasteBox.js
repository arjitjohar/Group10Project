import * as React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";
//import textshown from './textToBeShown.txt'

import { ShowFile } from './FileUpload'


var x = (v' /= ((v / (v' / 1)) / ((3 / 2) + (v' * v'))))
 

function getFileData(fileUploaded) {
  return fileUploaded.data;
}
export default class CopyPasteBox extends React.Component {

  state = {
    text: 'output goes here'
  }

  onClickButton1 = () => {
    this.setState({
      text: "Output MusicXML"
    });
  }
  
  render(){
    return (
      <>
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
      <div>
          <button onClick={this.onClickButton1} class="m-4">
            convert
          </button>
      </div>
      <div>
        <h1>
        {this.state.text}
        </h1>
      </div>
      </>
    );
  }
}