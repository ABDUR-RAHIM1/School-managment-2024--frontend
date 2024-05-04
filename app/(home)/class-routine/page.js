import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import React from 'react'
import RoutineTable from './RoutineTable';

export default async function ClassRoutine() {
    const classRoutine = await handleAllGetMethod("/routine/all");

    const classSix = await classRoutine.filter(item => item.classCode === "6" || item.classCode === "06");

    const classSeven = await classRoutine.filter(item => item.classCode === "7" || item.classCode === "07");

    const classEight = await classRoutine.filter(item => item.classCode === "8" || item.classCode === "08");

    const classNine = await classRoutine.filter(item => item.classCode === "9" || item.classCode === "09");

    const classTen = await classRoutine.filter(item => item.classCode === "1" || item.classCode === "10");





    return (
        <div className='py-4'>
            <Title text={"Class Routine"} />

            <div className='tableCard'>
                <RoutineTable
                    data={classSix}
                    classCode={"06"}
                />
            </div>
            <div className='tableCard'>
                <RoutineTable
                    data={classSeven}
                    classCode={"07"}
                />
            </div>
            <div className='tableCard'>
                <RoutineTable
                    data={classEight}
                    classCode={"08"}
                />
            </div>
            <div className='tableCard'>
                <RoutineTable
                    data={classNine}
                    classCode={"09"}
                />
            </div>
            <div className='tableCard'>
                <RoutineTable
                    data={classTen}
                    classCode={"10"}
                />
            </div>
        </div>
    )
}
