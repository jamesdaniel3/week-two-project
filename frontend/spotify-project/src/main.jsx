import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import DiscoverPage from './routes/DiscoverPage.jsx';
import SingleForum from './routes/SingleForum.jsx';
import AllForums from './routes/AllForums.jsx';
import LikedSongs from './routes/LikedSongs.jsx';
import TopArtists from './routes/TopArtists.jsx';
import TopSongs from './routes/TopSongs.jsx';
import Profile from './routes/Profile.jsx';
import Messages from './routes/Messages.jsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<DiscoverPage />} />
        <Route path="/forums" element={<AllForums />} />
        <Route path="/forums/:id" element={<SingleForum />} />
        <Route path="/liked-songs" element={<LikedSongs />} />
        <Route path="/top-artists" element={<TopArtists />} />
        <Route path="/top-songs" element={<TopSongs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
