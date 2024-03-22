import BottomNav from './components/Bottomnav'
import About from './components/About'
import Home from './components/Home'
import Projectos from './components/Projectos'
import Experiencia from './components/Experiencia'
import Contacto from './components/Contacto'

function App() {
  return (
    <div >
      <BottomNav />
      <Home></Home>      
      <About></About>
      <Projectos></Projectos>
      <Experiencia></Experiencia>
      <Contacto></Contacto>
    </div>
  )
}

export default App
