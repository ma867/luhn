import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'

export default function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  )
}
