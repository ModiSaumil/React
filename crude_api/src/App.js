import logo from './logo.svg';
import './App.css';
import Create_post from './components/Create_post';
import Update_post from './components/Update_post';
import Delete_post from './components/Delete_post';
import Display_post from './components/Display_post';

function App() {
  return (
    <div className="App">
     <Create_post/>
     <Update_post/>
     <Delete_post/>
     <Display_post/>
    </div>
  );
}

export default App;
