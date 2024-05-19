import { GlobalState } from '@/ContextApi/ContextApi'
import React, { useContext } from 'react'

export default function ViewModel(props) {
    const { detailsData } = useContext(GlobalState);

    return (


        <>

            <div id="static-modal" className="modalContainer">
                <div className="relative p-4 w-full max-w-2xl max-h-full">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">



                        <div className="p-4 md:p-5 max-h-[250px] min-h-[300px] overflow-y-scroll text-base leading-relaxed">
                            <p>Added : {new Date(detailsData.createdAt).toLocaleDateString()}</p>

                            <p>Updated : {new Date(detailsData.updatedAt).toLocaleDateString()}</p>
                            {/*  contents */}
                            <div className='my-5'>
                                <p> <span className=' font-medium text-purple-600'>Description : </span> {detailsData.desc}</p>
                            </div>
                            {/*  contents */}
                        </div>




                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">

                            <button onClick={props.closeModel} type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900  bg-white rounded-md border border-gray-400 hover:bg-gray-100 hover:text-blue-700 capitalize">close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}