import Feed from './components/Feed'
import Register from './components/Register'
import Login from './components/Login'
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from './contexts/AuthContext';
import Profil from './components/Profil';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/profil" element={<Profil />}/>
      </Routes>
    </AuthContextProvider>
  )
}

export default App;