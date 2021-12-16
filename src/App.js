import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Routes,Switch,Route} from 'react-router-dom'
import { AboutMe } from './containers/About Me';
import HalifaxWeatherNow from './containers/HalifaxWeatherNow';

function App() {
  return (
<Routes>
<div className="App">
    <Header/>
    <Hero/>
    <Route path="/Home" component={Home}/>
    <Route path="/AboutMe" component={AboutMe}/>
    <Route path="/HalifaxWeatherNow" component={HalifaxWeatherNow}/>
    </div>
</Routes>
    
  );
}

export default App;
