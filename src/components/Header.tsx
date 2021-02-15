import * as React from 'react';
// import logo from '../images/logo';
import logo from "../images/githublogo.png"
import group from "../images/Group10logo2.png"




export default class Header extends React.Component {

    render() {
        return (
            <div>
            <div className="relative bg-gray-800">
                    <div className="sm:px-8">
                        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                           
                            <a className="text-base font-bold text-gray-500 hover:text-gray-900">
                                <img className="h-10"src={group} alt="Group 10 Logo" ></img>
                               
                            </a>

                            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Help
                            </a>
                            
                            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                                
                                About
                            </a>
                            
                            <button className="border border-gray-900 bg-gray-700 text-white rounded-md px-4 py-2 m-2 hover:bg-gray-800 transition duration-500 ease">
                                Log In
                            </button>

                            <button  className="border border-gray-900 bg-gray-700 text-white rounded-md px-4 py-2 m-2 hover:bg-gray-800 transition duration-500 ease">
                                Sign Up
                            </button>

                            <a className="hidden md:flex items-center justify-end md:flex-1 lg:w-0" href="https://github.com/arjitjohar/Group10Project">
                                <img src={logo}  alt="GitHub">

                                </img>
                            </a>

                          
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        )



    }
}