import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contacts'


function App() {
  

  return (
    
    <div className='bg-[#282C33]'>
     <div className=' flex flex-col  mx-auto '>
      <Navbar/>
      <div>
         
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
       
      </div>
     
      <Footer/>
    </div>
    </div>
   
  )
}

export default App
