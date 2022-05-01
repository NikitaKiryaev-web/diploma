import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import SignIn from '../SignIn/SignIn.jsx'
import Tests from '../Tests/Tests';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSignIn () {
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={
        <>
        <Header isLoggedIn={isLoggedIn} />
        <Tests />
        </>
      }>
      </Route>

      <Route path="/signup" element={
        <SignUp />
      }>
      </Route>

      <Route path="/signin" element={
        <SignIn handleSignIn={handleSignIn} />
      }>
      </Route>
      
      </Routes>
    </div>
  );
}

export default App;
