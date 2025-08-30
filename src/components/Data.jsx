import React from 'react'
import { AiToolsData } from '../assets/assets'
// import { AiToolsData } from '../assets/assets'

const Data = () => {
    return (
        <div className='px-4 sm:px-20 xl:px-32 my-24'>
            <div className='text-center mb-10'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Powerfull Ai Tools</h2>
                <p className='text-slate-600 mt-2'>Everything you need to create, enhance and optimize your content with cutting-edge Ai technology.</p>

                <div className="flex">
                    {AiToolsData.map((tool,index)=>(
                        <div key={index}>

                        </div>
                    ))}
                </div>
            </div>

            
        </div>
    )
}

export default Data 