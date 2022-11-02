import { Home } from './pages';
import { Sidebar, Searchbar } from './components'

import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="flex flex-col">
      <div>
        <Sidebar />
        <Searchbar />
      </div>

      <Routes>
        <Route path="/YourAnimeList/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
