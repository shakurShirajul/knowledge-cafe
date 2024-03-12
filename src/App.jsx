// import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='md:flex container mx-auto'>
        <Blogs/>
        <Bookmarks/>
      </main>
    </>
  )
}

export default App
