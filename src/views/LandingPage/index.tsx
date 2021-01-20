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
                    <div className="container max-w-md w-full mx-auto p-32 text-center border border-gray-50 background bg-white">
                </div>

                <div className="container max-w-md mx-auto p-1 text-center background flex-row ">
                    <button onClick={() => import_new_music()} className="bg-green-500">
                        import from local storage {count}
                    </button>


                    <button onClick={() => copy_paste()} className="background bg-purple-400">
                        copy paste from computer
                    </button>
                    
                    <button onClick={() => reset()} className="background bg-red-400">
                        reset
                    </button>
                </div>
            </div>
        </div>
        
    )
}
