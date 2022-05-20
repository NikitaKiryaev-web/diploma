import {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.scss';
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

  function handleSignIn () {
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={
        <>
        <Header isLoggedIn={isLoggedIn} />
        <Home />
        <Footer />
        </>
      }>
      </Route>

      <Route path='/tests' element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <>
          <Header isLoggedIn={isLoggedIn} />
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
  );
}

export default App;
