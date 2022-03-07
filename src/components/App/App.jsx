import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import SignIn from '../SignIn/SignIn.jsx'
import Tests from '../Tests/Tests';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={
        <>
        <Header />
        <Tests />
        </>
      }>
      </Route>

      <Route path="/signup" element={
        <SignUp />
      }>
      </Route>

      <Route path="/signin" element={
        <SignIn />
      }>
      </Route>
      
      </Routes>
    </div>
  );
}

export default App;
