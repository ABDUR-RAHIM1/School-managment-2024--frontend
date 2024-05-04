import Title from '@/components/Utils/Title'
import { handleAllGetMethod } from '@/fetchApi/GetMethod/handleAllGetMethod'
import React from 'react'
import Table from './Table'

export default async function ExamNotice() {
  const examNotice = await handleAllGetMethod("/examroutine/all")
  const classSix = await examNotice.filter(exam => exam.classCode === "6" || examNotice.classCode === "06")

  const classSeven = await examNotice.filter(exam => exam.classCode === "7" || examNotice.classCode === "07")

  const classEight = await examNotice.filter(exam => exam.classCode === "8" || examNotice.classCode === "08")

  const classNine = await examNotice.filter(exam => exam.classCode === "9" || examNotice.classCode === "09");

  const classTen = await examNotice.filter(exam => exam.classCode === "10")
 
  return (
    <div className='py-3'>
      <Title text={"Exam Routine"} />

      <div className="tableCard">
        <Table
          data={classSix}
          classCode={"06"}
        />
      </div>
      <div className="tableCard">
        <Table
          data={classSeven}
          classCode={"07"}
        />
      </div>
      <div className="tableCard">
        <Table
          data={classEight}
          classCode={"08"}
        />
      </div>
      <div className="tableCard">
        <Table
          data={classNine}
          classCode={"09"}
        />
      </div>
      <div className="tableCard">
        <Table
          data={classTen}
          classCode={"10"}
        />
      </div>

    </div>
  )
}
