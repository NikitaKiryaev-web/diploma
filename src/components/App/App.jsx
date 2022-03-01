import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header.jsx';
import SignUp from '../SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={
        <>
        <Header />
        </>
      }>
      </Route>

      <Route path="/signup" element={
        <SignUp />
      }>
      </Route>
      
      </Routes>
    </div>
  );
}

export default App;
