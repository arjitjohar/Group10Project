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
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <a href="https://github.com/hiimangel/EECS2030" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                        <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                      </svg>
                                    Github Logo Later here
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )



    }
}