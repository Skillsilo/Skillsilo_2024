import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Header from "./components/Header"
import StudentForm from "./pages/StudentForm";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/student-form" element={<StudentForm />}/>
    </Routes>
    </BrowserRouter>
    
  )
}