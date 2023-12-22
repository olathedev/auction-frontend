import Nav from "./components/Nav"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import axios from 'axios'
import UserAccount from "./pages/UserAccount"
import { useUserContext } from "./hooks/useuserContext"
import MyAccomodations from "./pages/MyAccomodations"
import ProfilePage from "./pages/AccountComponents/ProfilePage"
import AddHomeForm from "./pages/AddHomeForm"
import Saved from "./pages/Saved"
import Footer from "./components/footer"
import PropertyDetails from "./pages/PropertyDetails"
import VerifyEmail from "./pages/VerifyEmail"
import { FormContextProvider } from "./context/FormContext"


// axios.defaults.baseURL = 'https://auction-testv1.onrender.com'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

function App() {

    const {user, ready} = useUserContext()

    if(!ready) {
      return (
        <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white"> 
          <div className="font-bold text-white text-2xl font-primary">Auction</div>
        <div className="font-primary font-semibold text-lg">Seamless property management</div>

        <div className="font-primary font-semibold text-lg">please wait, loading...</div>
        </div>
      )
    }
    

  return (

    <div className="font-primary">
      
      <BrowserRouter>
      
      <div className="min-h-screen bg-slate-100">
        
      <Nav />

      <Routes>
        
        
        <Route index element={<Home />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />

        <Route path='/login' element={ !user ? <Login /> : <Navigate to={'/'} />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/account' element={<ProfilePage />} />
        <Route path='/account/saved' element={<Saved />} />
        <Route path='/account/myproperties' element={<MyAccomodations />} />
        <Route path='/account/myproperties/new' element={
        <FormContextProvider>
        <AddHomeForm />
        </FormContextProvider>
        
        } />
        <Route path="/verify-email" element={<VerifyEmail /> } />



      </Routes>

      </div>

      </BrowserRouter>
    
    
    <Footer />
    </div>

  )
}

export default App
