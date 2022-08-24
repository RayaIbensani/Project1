// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Proyek1/Home/Home'
import Profile from './Proyek1/Profile/Profile'
import Gallery from './Proyek1/Gallery/Gallery'
import Music from './Proyek1/Music/Music'
import Film from './Proyek1/Film/Film';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/music' element={<Music/>}/>
      <Route path='/film' element={<Film/>}/>
    </Routes>
    </div>
  );
}

export default App;

// import{ Link, Route, Routes,} from 'react-router-dom'
// import './App.css';
// import Artis from './daftarArtis/Artis';
// import Home from './home';



// function App() {


//   return (
//    <>
  
//    <Routes>
//    <Route path='/' element={<Home />}/>
//     <Route path='/daftarArtis/:id' element={<Artis />}/>
//    </Routes>
//    </>
//   );
// }

// export default App;
