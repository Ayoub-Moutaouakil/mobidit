import Feed from './components/Feed'
import Register from './components/Register'
import Login from './components/Login'
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
      </Routes>
    </AuthContextProvider>
  )
}

export default App;