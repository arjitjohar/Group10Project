import React from 'react';


export const Landing = () => {
    return (
        <div>
            <div className="bg-gray-300 min-h-screen flex flex-col p-8 justify-center">
                <div className="font-extrabold text-center text-lg"> Music Tab</div>
                    <div className="container max-w-md w-full mx-auto p-32 text-center border border-gray-50 background bg-white">
                
                </div>

                <div className="container max-w-md mx-auto p-1 text-center background flex-row ">
                    <button className="bg-green-500">
                        import new music tab!
                    </button>
                    <button className="bg-red-600">
                            reset
                    </button>
                </div>
            </div>
        </div>
        
    )
}
