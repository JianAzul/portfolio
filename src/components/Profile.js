// Profile.js - With banner image and circular profile picture
import React, { useState } from 'react';

function Profile({ profileData }) {
  const { name, username, bio, location, joinDate, verified, bannerImage } = profileData;
  const [profileImageError, setProfileImageError] = useState(false);
  const [bannerImageError, setBannerImageError] = useState(false);

  return (
    <div className="profile-component">
      {/* Banner section */}
      <div className="profile-banner-container">
        {bannerImage && !bannerImageError ? (
          <img 
            src={bannerImage}
            alt="Profile banner"
            className="profile-banner-img"
            onError={() => setBannerImageError(true)}
          />
        ) : (
          <div className="default-banner"></div>
        )}
      </div>
      
      {/* Profile section */}
      <div className="profile profile-with-banner">
        <div className="profile-header">
          <div className="profile-image">
            {!profileImageError ? (
              <div className="profile-avatar-container">
                <img 
                  src="/assets/images/profile.jpg"
                  alt={`${name}'s profile`}
                  className="profile-avatar-img"
                  onError={() => setProfileImageError(true)}
                />
              </div>
            ) : (
              <div className="profile-avatar">
                {name.charAt(0)}
              </div>
            )}
          </div>
          
          <div className="profile-info">
            <h1 className="profile-name">
              {name}
              {verified && (
                <span className="verified-badge">
                  <i className="fas fa-check-circle"></i>
                </span>
              )}
            </h1>
            
            <p className="profile-username">@{username}</p>
            
            <p className="profile-bio">{bio}</p>
            
            <div className="profile-details">
              <span className="profile-location">
                <i className="fas fa-map-marker-alt"></i> {location}
              </span>
              
              <span className="profile-date">
                <i className="fas fa-calendar-alt"></i> Joined {joinDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;