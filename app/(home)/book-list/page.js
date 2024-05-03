import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import React from 'react' 
import SubjectTable from './SubjectTable'

export default async function BookList() {
    const booklists = await handleAllGetMethod("/booklist/all")

    const classSix = await booklists.filter(classCode => classCode.classCode === "6" || classCode.classCode === "06");

    const classSeven = await booklists.filter(classCode => classCode.classCode === "7" || classCode.classCode === "07");

    const classEight = await booklists.filter(classCode => classCode.classCode === "8" || classCode.classCode === "08")

   
    const classNine = await booklists.filter(classCode => classCode.classCode === "9" || classCode.classCode === "09");

    const classTen = await booklists.filter(classCode => classCode.classCode === "1" || classCode.classCode === "10")

   

    return (
        <div className='py-3'>
            <Title text={"Book List"} />

            <div className='my-5'>
                <SubjectTable
                    data={classSix}
                    classCode={"06"}
                />
            </div>

            <div className='my-5'>
                <SubjectTable
                    data={classSeven}
                    classCode={"07"}
                />
            </div>
            <div className='my-5'>
                <SubjectTable
                    data={classEight}
                    classCode={"08"}
                />
            </div>
            <div className='my-5'>
                <SubjectTable
                    data={classNine}
                    classCode={"09"}
                />
            </div>
            <div className='my-5'>
                <SubjectTable
                    data={classTen}
                    classCode={"10"}
                />
            </div>
        </div>
    )
}

