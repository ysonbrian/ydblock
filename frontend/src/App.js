import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Main from './components/Main/Main';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/main" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
