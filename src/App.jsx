import { Home, Search } from './pages';
// import Searchbar from './tes/Searchbar';
import { Sidebar, Searchbar } from './components'

import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="">
      <Sidebar />
      <Searchbar />

      <Routes>
        <Route path="/YourAnimeList" element={<Home />} />
      </Routes>

    </div>
  );
};

export default App;
