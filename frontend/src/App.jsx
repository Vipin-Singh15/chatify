import { Route, Routes } from 'react-router'
import ChatPage from './pages/ChatPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import { useAuthStore } from './store/useAuthStore.js'

const App = () => {
  const { authUser, isLoading, login } = useAuthStore();

  console.log('auth user', authUser);
  console.log('isLoading', isLoading);
  console.log('login fn', login);

  return (
    <div className='min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden'>
      {/* Decorators - GRID BG & GLOW SHAPES */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,_#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,_#4f4f4f2e_2px,transparent_2px)] bg-[size:14px_24px]`} />

      <div className="absolute top-0 -left-4 size-96 bg-pink-500 opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 -right-4 size-96 bg-cyan-500 opacity-20 blur-[100px]" />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  )
}

export default App