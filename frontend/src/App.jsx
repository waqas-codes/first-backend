import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
axios.get('/api/students')
    .then(response => {
      setStudents(response.data)
    })
    .catch(error => {
      console.error("There was an error fetching the students!", error)
    })
  },[])

  return (
    <>
      <h1>M_waqas</h1>
      <h4>Total students : {students.length}</h4>

      <div>
        {
          students.map(student => (
            <div key={student.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
              <h3>Name: {student.name}</h3>
              <p>Age: {student.age}</p>
              <p>Email: {student.email}</p>
              <p>Department: {student.department}</p>
              <p>Grade: {student.grade}</p>
              <p>Enrolled: {student.enrolled ? 'Yes' : 'No'}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
