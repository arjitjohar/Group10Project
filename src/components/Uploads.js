import React, { Component } from "react";

class Uploads extends Component {
    constructor(props) {
        super(props);
    }

    showFile = async e => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = async e => {
            const text = e.target.result;
            console.log(text);
            alert(text);
        };
        reader.readAsText(e.target.files);
        reader.readAsText(text);

    };

    render = () => {
        return (
            <div>
                <input type="file" onChange={e => this.showFile(e)} />
                {/* reader.readAsText(file); */}
            </div>
        );
    };
}

export default Uploads;
