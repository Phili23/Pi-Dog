import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LadingPage from './components/LadingPage/index'
import Home from './components/Home';
import DogCreate from './components/DogCreate/index'

function App() {
  return (
   <BrowserRouter>
    <div className="App">
        <Route exact path="/" component={LadingPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/dogs' component={DogCreate}/>
        {/* <Route path='/home/:id' component={Detail}/> */}
      </div>
    
      </BrowserRouter>
  );
}

export default App;
