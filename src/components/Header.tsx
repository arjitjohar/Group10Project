import * as React from 'react';
// import logo from '../images/logo';



export default class Header extends React.Component {

    render() {
        return (
            <div>
            <div className="relative bg-gray-800">
                    <div className="sm:px-8">
                        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

                            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Our Team Log0
                            </a>
                            
                            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Whatever poop
                            </a>
                            
                            <a href="https://github.com/arjitjohar/Group10Project" className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 text-base font-medium text-gray-500 hover:text-gray-900">
                                github logo
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        )



    }
}