import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './pages/HomePages'
import FormularioPages from './pages/FormularioPages'

function App() {
  return (
<Routes>
  <Route path='/' element= {<HomePages/>}/>
   <Route path='/formulario' element= {<FormularioPages/>}/>
</Routes>
  )
}

export default App