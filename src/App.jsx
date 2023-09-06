
import './App.css'
import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import UploadComponent from './Components/UploadComponent/UploadComponent'
import GalleryComponent from './Components/GalleryComponent/GalleryComponent'
import QRCodeGenerator from './Components/QRCodeComponent/QRCodeComponent'
function App() {

  return (
    <React.Fragment>
      <Router>
        <nav className='nav-header'>
          
          <Link to ='/' className='nav-home'>Home</Link>
          <Link to = '/user/upload' className='nav-upload'>Upload</Link>
        </nav>
        <Routes>
          <Route path='/' element={<GalleryComponent/>}></Route>
          <Route path='/user/upload' element={<UploadComponent/>}></Route>
        </Routes>
      </Router>
      
      <QRCodeGenerator/>
    </React.Fragment>
  )
}

export default App
