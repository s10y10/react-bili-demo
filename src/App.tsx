import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PageMain from './pages/Main'
import PageFound from './pages/Found'
import PageUser from './pages/User'

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Routes>
                    <Route path='/' element={<PageMain/>}></Route>
                    <Route path='/main' element={<PageMain/>}></Route>
                    <Route path='/found' element={<PageFound/>}></Route>
                    <Route path='/user' element={<PageUser/>}></Route>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App