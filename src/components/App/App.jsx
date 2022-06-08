import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.scss';
import { LoggedInContext } from '../../contexts/LoggedInContext.js';
import Header from '../Header/Header.jsx';
import SignIn from '../SignIn/SignIn.jsx'
import Tests from '../Tests/Tests';
import NotFound from '../NotFound/NotFound.jsx';
import Home from '../Home/Home.jsx';
import Footer from '../Footer/Footer.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import Test from '../Test/Test.jsx';
import { UserContext } from '../../contexts/UserContext.js';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLogin, setUserLogin] = useState('');

  useEffect(() => {
    if(localStorage.getItem('loggedIn') === 'true') {
      setIsLoggedIn(true);
    }
    if(localStorage.getItem('userLogin')) {
      setUserLogin(localStorage.getItem('userLogin'));
    }
  }, []);

  return (
    <UserContext.Provider value={{userLogin, setUserLogin}}>
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

      <Route path="/signin" element={
        <>
        <SignIn />
        <Footer />
        </>
      }>
      </Route>
      <Route path="/test/:id" element={
        <>
        <Header />
        <Test />
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
    </UserContext.Provider>
  );
}

export default App;
