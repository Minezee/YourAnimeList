import { DetailPage, FirstPage } from './pages';
import { PageNotFound, Sidebar, Searchbar, Navbar } from './components'

import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="flex flex-col">
      <div>
        <div className='block md:hidden'>
          <Sidebar />
        </div>
        <div className="hidden md:block h-16">
          <Navbar />
        </div>
        <Searchbar />
      </div>

      <div className='mt-24 mx-3'>
        <Routes>
          <Route path="/YourAnimeList" element={<FirstPage />} />
          <Route path="/YourAnimeList/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
