import {useState, useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.scss';
import { LoggedInContext } from '../../contexts/LoggedInContext.js';
import Header from '../Header/Header.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import SignIn from '../SignIn/SignIn.jsx'
import Tests from '../Tests/Tests';
import NotFound from '../NotFound/NotFound.jsx';
import Home from '../Home/Home.jsx';
import Footer from '../Footer/Footer.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('loggedIn') === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  function handleSignIn () {
    setIsLoggedIn(true);
  }

  return (
    <LoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    <div className="App">
      <Routes>
      <Route exact path="/" element={
        <>
        <Header />
        <Home />
        <Footer />
        </>
      }>
      </Route>

      <Route path='/tests' element={
        <ProtectedRoute>
          <>
          <Header />
          <Tests />
          <Footer />
          </>
        </ProtectedRoute>
      }>
      </Route>

      <Route path="/signup" element={
        <>
        <SignUp />
        <Footer />
        </>
      }>
      </Route>

      <Route path="/signin" element={
        <>
        <SignIn handleSignIn={handleSignIn} />
        <Footer />
        </>
      }>
      </Route>
      <Route
        path="*"
        element={<NotFound />}
    />
      </Routes>
    </div>
    </LoggedInContext.Provider>
  );
}

export default App;
