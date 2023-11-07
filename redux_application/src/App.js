import logo from './logo.svg';
import './App.css';
import Home from './containers/homecontainer';
import Headercontainer from './containers/headercontainer';

function App() {
  return (
    <div className="App">
      <h1>
        app component
      </h1>
      <Headercontainer></Headercontainer>
      <Home></Home>
    </div>
  );
}

export default App;
