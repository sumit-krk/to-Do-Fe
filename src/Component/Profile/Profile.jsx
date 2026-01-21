import React from "react";
import "./Profile.css";
import { maskEmail } from "../../utils/maskEmail";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../../feature/getProfile/getProfileSlice";
import { useSelector } from "react-redux";

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const getProfileState = useSelector((store) => store.getProfileState);

  useEffect(() => {
    if (getProfileState?.list?.data) {
      setProfileData(getProfileState?.list?.data);
    }
  }, [getProfileState]);

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Avatar */}
        <div className="avatar">
          <img
            src={profileData?.photoUrl}
            style={{
              width: "100px",
              height: "100px",
              border: "4px solid blue",
              borderRadius: "50%",
            }}
          />
        </div>

        {/* User Info */}

        <h4 className="name">
          <span style={{ fontSize: "16px" }}>First name :-</span>{" "}
          {profileData?.firstName?.toUpperCase() || "Name"}
        </h4>
        <h4>
          <span style={{ fontSize: "16px" }}>Last name :-</span>{" "}
          {profileData?.lastName?.toUpperCase()}
        </h4>

        <p className="email">
          <span style={{ fontSize: "16px" }}>Email:-</span>
          {maskEmail(profileData?.email)}
        </p>

        <div className="divider" />

        {/* Action */}
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;