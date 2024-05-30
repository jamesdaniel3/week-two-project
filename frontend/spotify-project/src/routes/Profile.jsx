import React, { useEffect, useState } from 'react';
import '../styles/profile.css';
import ArtistList from '../components/ArtistList';
import SongList from "../components/SongList.jsx";
import axios from "axios";
import Header from "../components/Header.jsx";
import settingsIcon from '../icons/settings.png';
import SettingsModal from '../components/SettingsModal';

import locked from '../icons/locked.png';
import unlocked from '../icons/unlocked.png';

const Profile = ({ profileInfo, topArtistsShort, topSongsShort }) => {
  const [firebaseInfo, setFirebaseInfo] = useState({});
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  if (topArtistsShort.items && topSongsShort.items) {
    topArtistsShort.items = topArtistsShort.items.slice(0, 5);
    topSongsShort.items = topSongsShort.items.slice(0, 5);
  }

  const handleSettingsClick = () => {
    setShowModal(true);
  };

  const handleProfileClick = (url) => {
    window.open(url, '_blank');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const fetchUserData = async () => {
    const id = profileInfo.id;

    try {
      const result = await axios.get(`http://localhost:8888/user/${id}`);
      setFirebaseInfo(result.data);
    } catch (error) {
      console.error("Error checking for user:", error);
    }
  };

  useEffect(() => {
    if (profileInfo) {
      fetchUserData();

      if (profileInfo.images.length === 0) {
        profileInfo.images.push("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
      }
    }
  }, [profileInfo]);

  useEffect(() => {
    if (!showModal) {
      fetchUserData();
    }
  }, [showModal]);

  console.log('Profile data:', profileInfo);
  console.log('Firebase data:', firebaseInfo);

  if (!firebaseInfo || !profileInfo) {
    return <></>;
  }

  return (
      <>
        <Header title={"your profile"} />
        <div className="profile-container">
          <div className={"profile-header"}>
            <img
                src={profileInfo.images[0]}
                alt={"profile picture"}
                className="profile-pic"
                onClick={() => handleProfileClick(profileInfo.external_urls.spotify)}
            />
          </div>
          <div className={"profile-info"}>
            <h2 className={"username"} style={{ color: "white" }}>
              {firebaseInfo.display_name}
              <img
                  src={settingsIcon}
                  alt="settings icon"
                  className="settings-icon"
                  style={{ zIndex: 1000, height: "20px", width: "20px" }}
                  onClick={handleSettingsClick}
              />
              <img
                  src={firebaseInfo.private_page ? locked : unlocked}
                  alt={firebaseInfo.private_page ? "locked" : "unlocked"}
                  className="privacy-icon"
                  style={{ zIndex: 1000, height: "20px", width: "20px", marginLeft: "10px" }}
              />
            </h2>
            <p style={{ color: "white" }}>{profileInfo.followers.total} followers</p>
          </div>

          {firebaseInfo.display_info && (
              <div className="profile-content">
                <h2 style={{ justifyContent: "center" }}>Current Favorites</h2>
                <div className="top-artists">
                  {topArtistsShort.items && <ArtistList data={topArtistsShort.items} />}
                </div>
                <div className="top-songs">
                  {topSongsShort.items && <SongList data={topSongsShort.items} />}
                </div>
              </div>
          )}
        </div>

        <SettingsModal
            show={showModal}
            handleClose={handleCloseModal}
            displayInfo={firebaseInfo.display_info}
            privatePage={firebaseInfo.private_page}
            id={profileInfo.id}
        />
      </>
  );
};

export default Profile;