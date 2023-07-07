import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './views/Home/Home.jsx'
import MovieDetail from './views/MovieDetail/MovieDetail.jsx'



function App() {

  const [searchValue, setSearchValue] = useState("")

  return (
  <div className='App' style={{backgroundColor: "#ff7bad"}}>
    <Header onSubmit={(inputValue) => setSearchValue(inputValue) }/>
      <Routes>
        <Route path="/" element={<Home searchValueProp={searchValue}/>}/>
        <Route path="/movie/:id"  element={<MovieDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
