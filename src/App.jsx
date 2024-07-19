import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Coin from "./pages/Coin/Coin"
import Footer from './components/Footer/Footer'
import All from './pages/All/All'
import News from './pages/News/News'
import BlogPost from './components/BlogPost/BlogPost'
import MostPopular from './pages/MostPopular/MostPopular'


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/AllCoins/' element={<All />} />
        <Route path='/News/' element={<News />} />
        <Route path='/News/:shortName' element={<BlogPost />} />
        <Route path='/MostPopular' element={<MostPopular />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App