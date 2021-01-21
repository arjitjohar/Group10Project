import React, { useState } from 'react';



export const Landing = () => {

    function import_new_music()
    {
        return setCount(count+1)
    }

    function reset(){
        return setCount(0)
    }

    function copy_paste(){
        return setCount(99)
    }

    const [count, setCount] = useState(0);

    

    return (
        <div>
            <div className="bg-gray-300 min-h-screen flex flex-col p-8 justify-center">
                <div className="font-extrabold text-center text-lg"> Music Tab</div>
                    <div className="container max-w-md w-full mx-auto p-32 text-center border border-gray-50 background bg-white bg">
                        
                    </div>

                <div className="max-w-md w-full mx-auto">
                    <div className="flex md:space-x-2 justify-center">
                        <button  className="w-20 align-center border border-green-400 bg-green-300 rounded-lg">1</button>
                        <button className="w-20 align-center border border-blue-400 bg-blue-300 rounded-lg">2</button>
                        <button className="w-20 align-center border border-red-400 bg-red-300 rounded-lg">3</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
