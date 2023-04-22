//import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Calculs from './components/calculs/Calculs';
import QuizzCalcul from './components/calculs/quizzcalcul/QuizzCalcul';

function App() {

  
  return (
    <div className="App">
      
      <Navbar/>

      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/calculs" element={<Calculs/>}>
              <Route index path="/calculs/:operation" element={<QuizzCalcul/>}/>
            </Route>
      </Routes>
        
    </div>
  );
}

export default App;
