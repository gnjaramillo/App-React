import { Route, Routes } from "react-router-dom"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

import Login from "./pages/login"
import Registro from "./pages/registro"
import Mochilas from "./pages/mochilas"
import Pijamas from "./pages/pijamas"




function App() {

  return (
    <>
      <div className="min-h-screen">       
        
        <Navbar></Navbar>
        {/* <Cards></Cards> */}
        
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/registro' element={<Registro></Registro>}></Route>
          <Route path='/mochilas' element={<Mochilas></Mochilas>}></Route>
          <Route path='/pijamas' element={<Pijamas></Pijamas>}></Route>



        </Routes>        

        <Footer></Footer>
          
                
      </div>
    </>
  )
}

export default App
