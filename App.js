
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import Recommended from './Recommended';
import WatchPage from './WatchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<><Header />
            <div className='sidebar_recommendation'>
              <Sidebar />
              <Recommended />
            </div></>}></Route>
          <Route exact path="/search/:searchQuery" element={<><Header />
            <div className='sidebar_recommendation'>
              <Sidebar />
              <SearchPage/>
            </div></>}>
          </Route>
          <Route exact path="/watch" element={<><Header />
            <div className='watch_page'>
              <WatchPage />
            </div></>}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
