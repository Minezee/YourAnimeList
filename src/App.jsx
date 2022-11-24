import { DetailPage, FirstPage, TopAnime, SeasonalAnime, UpcomingAnime, AnimeSearch, TopManga, MangaDetail } from './pages';
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

      <div className='mt-16 mx-3'>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/anime/search" element={<AnimeSearch />} />
          <Route path="/anime/detail/:id" element={<DetailPage />} />
          <Route path="/manga/detail/:id" element={<MangaDetail />} />
          <Route path="/anime/top" element={<TopAnime />} />
          <Route path="/manga/top" element={<TopManga />} />
          <Route path="/anime/seasonal" element={<SeasonalAnime />} />
          <Route path="/anime/upcoming" element={<UpcomingAnime />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
