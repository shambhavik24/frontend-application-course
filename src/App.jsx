

import { Route, Router, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import AddcourseForm from './pages/AddcourseForm'
import CourseList from './pages/CourseList'
import AddInstanceForm from './pages/AddInstanceForm'
import InstanceList from './pages/InstanceList'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/addcourse' element={<AddcourseForm/>}/>
        <Route path='/list' element={<CourseList/>} />
        <Route path ='/instance' element={<AddInstanceForm/>} />
        <Route path='/inslist' element={<InstanceList/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
