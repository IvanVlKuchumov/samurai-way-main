import s from "./ProfileInfo.module.css";
import React, {FC} from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader";
import userPhoto from '../../../assets/images/user.svg'
import {ProfileStatus} from '../ProfileStatus';

export type ProfileInfoPropsType = {
    profile: ProfileType | null
}


export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img id={s.img_width_1}
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt='background'
                />
            </div>
            <div className={s.descriptionBlock}>
                <img id={s.img_width_2}
                     src={profile.photos.large ?? userPhoto}
                     alt='avatar'
                />
            </div>
            <ProfileStatus status={profile.aboutMe}/>
        </div>
    )
}