import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(cors(

))

const port = process.env.PORT || 3000;  


app.get('/', (req, res) => {
    res.send("hello waqas")
})

const students = [
  {
    id: 1,
    name: "Ali Raza",
    age: 20,
    email: "ali.raza@example.com",
    department: "Computer Science",
    grade: "A",
    enrolled: true
  },
  {
    id: 2,
    name: "Sara Khan",
    age: 22,
    email: "sara.khan@example.com",
    department: "Software Engineering",
    grade: "B",
    enrolled: true
  },
  {
    id: 3,
    name: "Waqas Ahmed",
    age: 19,
    email: "waqas.ahmed@example.com",
    department: "IT",
    grade: "A+",
    enrolled: false
  },
  {
    id: 4,
    name: "Hamza Ali",
    age: 21,
    email: "hamza.ali@example.com",
    department: "Computer Science",
    grade: "C",
    enrolled: true
  },
  {
    id: 5,
    name: "Ayesha Malik",
    age: 23,
    email: "ayesha.malik@example.com",
    department: "AI & Data Science",
    grade: "B+",
    enrolled: true
  }
];

app.get('/api/students', (req, res) => {
    res.json(students)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
