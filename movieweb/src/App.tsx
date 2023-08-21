

import MovieCarousel from './component/MovieCarousel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import Nopage from './pages/Nopage';
import Layout from './pages/layout';

function App() {


  return (
    <>
   
     <BrowserRouter>
     <Layout>
      <Routes>
     
            <Route path="/" element={<Homepage/>} />
            <Route path="Nowplaying" element={<NowPlaying/>} />
            <Route path="Popular" element={<Popular/>} />
            <Route path="*" element={<Nopage/>} />
     
      </Routes>
      </Layout>
    </BrowserRouter>  
        
   
    </>
  )
}

export default App
