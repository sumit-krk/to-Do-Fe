import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../../feature/getProfile/getProfileSlice";
import { useSelector } from "react-redux";

const Profile=()=>{

    const [profileData, setProfileData] = useState({});

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProfile());
    },[]);

    const getProfileState = useSelector((store)=>store.getProfileState);

    useEffect(()=>{
        if(getProfileState?.list?.data){
            setProfileData(getProfileState?.list?.data)
        }
    },[getProfileState]);


    return(
        <div>Profile
            <h2>{profileData.firstName}</h2>
            <img src={profileData.photoUrl} />
        </div>
    )
}

export default Profile;