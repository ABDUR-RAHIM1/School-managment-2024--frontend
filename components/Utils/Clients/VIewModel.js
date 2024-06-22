import { GlobalState } from '@/ContextApi/ContextApi'
import React, { useContext } from 'react'

// todo details 
export default function ViewModel(props) {
    const { detailsData } = useContext(GlobalState);

    const { componentName, closeModal } = props;


    return (


        <>

            <div id="static-modal" className="modalContainer bg-opacity-50">
                <div className="relative p-4 w-full max-w-2xl max-h-full">

                    <div className="relative bg-white rounded-lg shadow dark:bg-slate-950">



                        <div className="p-4 md:p-5 max-h-[250px] min-h-[300px] overflow-y-scroll text-base leading-relaxed">
                            <p>Added : {new Date(detailsData.createdAt).toLocaleDateString()}</p>

                            <p>Updated : {new Date(detailsData.updatedAt).toLocaleDateString()}</p>
                            {/*  contents */}


                            {
                                componentName === "complain" ?
                                    <div className='my-5'>
                                        <small className=' font-medium uppercase text-purple-600'>Compalain Details</small>
                                        <p> <span className=' font-medium text-purple-600'>Description : </span> {detailsData.details}</p>
                                    </div>
                                    :
                                    <div className='my-5'>
                                        <small className=' font-medium uppercase text-purple-600'>Todo Details</small>
                                        <p className=' font-medium my-2 text-2xl'>Title : {detailsData.title}</p>
                                        <p> <span className=' font-medium text-purple-600'>Description : </span> {detailsData.desc}</p>
                                    </div>

                            }


                            {/*  contents */}
                        </div>




                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">

                            <button onClick={closeModal} type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900  bg-white rounded-md border border-gray-400 hover:bg-gray-100 hover:text-blue-700 capitalize">close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
