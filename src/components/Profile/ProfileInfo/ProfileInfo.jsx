import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (

        <div>
            <div>
                <img src='https://cdn57.androidauthority.net/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-android-920x470.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div className={s.title}>
                    Name: {props.profile.fullName}
                </div>
                <div className={s.title}>
                    Status: {props.profile.aboutMe}
                </div>
                <div className={s.title}>
                    Personal links:
                    <div>
                        <div className={s.links}> Facebook: {props.profile.contacts.facebook != null ? props.profile.contacts.facebook : "no link"}; </div>
                        <div className={s.links}> Website: {props.profile.contacts.website != null ? props.profile.contacts.website : "no link"}; </div>
                        <div className={s.links}> VK: {props.profile.contacts.vk != null ? props.profile.contacts.vk : "no link"}; </div>
                        <div className={s.links}> Twitter: {props.profile.contacts.twitter != null ? props.profile.contacts.twitter : "no link"}; </div>
                        <div className={s.links}> IG: {props.profile.contacts.instagram != null ? props.profile.contacts.instagram : "no link"}; </div>
                        <div className={s.links}> YouTube: {props.profile.contacts.youtube != null ? props.profile.contacts.youtube : "no link"}; </div>
                        <div className={s.links}> Github: {props.profile.contacts.github != null ? props.profile.contacts.github : "no link"}; </div>
                        <div className={s.links}> Main Link: {props.profile.contacts.mainLink != null ? props.profile.contacts.mainLink : "no link"}; </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileInfo;