import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={
        <Header />
      }>
      </Route>
      
      </Routes>
    </div>
  );
}

export default App;
