import logo from './logo.svg';
import './App.css';
import Create_post from './components/Create_post';
import Update_post from './components/Update_post';
import Delete_post from './components/Delete_post';
import Display_post from './components/Display_post';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Display_post />}></Route>
          <Route path='/updatepost/:id' element={<Update_post />}></Route>
          <Route path='/createpost' element={<Create_post />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
