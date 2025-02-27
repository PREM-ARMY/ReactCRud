
// import { useNavigate } from 'react-router-dom'
import './App.css'
import Footer from './Components/Common/Footer'
import Header from './Components/Common/Header'
import Sidebar from './Components/Common/Sidebar'
import PageRoutes from './Pageroutes'


function App() {

  // const navigate = useNavigate();
  const exclude = !["/","/Changepassword","/Register","/OtpVerification","/Resetpassword"].includes(location.pathname); 
  // console.log("path===",exclude)
  return (
    <>

      {exclude && <Header />}
      {exclude &&<Sidebar />}
     
      <PageRoutes />
      {exclude &&<Footer />}
      


    </>
  )
}

export default App
