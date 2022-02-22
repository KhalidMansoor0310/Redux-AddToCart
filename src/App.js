import React from 'react'
import { useSelector } from 'react-redux'
import SingleStudent from './SingleStudent';


function App() {
  const students = useSelector((state)=>state.student.students);
  return (
    <div>
      {
        students.map((student,index)=>{
          return <SingleStudent student={student} key={index}/>
        })
      }
    </div>
  )
}

export default App
