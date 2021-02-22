import * as React from "react";
//import textshown from './textToBeShown.txt'

export default class CopyPasteBox extends React.Component {
    state = {
        text: "output goes here",
    };

    onClickButton1 = () => {
        this.setState({
            text: "Output MusicXML",
        });
    };

    render() {
        const style = {
            width: "900px",
            height: "400px",
        };

        return (
            <>
            <div>
                <div className="flex-initial">
                    <textarea style={style} className="rounded-md" placeholder="this text will show in the textarea">
                    
                    </textarea>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={this.onClickButton1}
                        className="border border-gray-900 bg-gray-700 text-white rounded-md px-4 py-2 m-2 hover:bg-gray-800 transition duration-500 ease"
                    >
                        Start Conversion
                    </button>

                    <a
                        href="https://www.youtube.com/"
                        className="border border-gray-900 bg-gray-700 text-white rounded-md px-4 py-2 m-2 hover:bg-gray-800 transition duration-500 ease"
                    >
                        Download
                    </a>
                </div>
            </div>
            
        </>
        );
    }
}
