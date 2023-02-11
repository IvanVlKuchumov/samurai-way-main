import s from "./ProfileInfo.module.css";
import React, {FC} from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader";

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
                     src={profile.photos.large}
                     alt='avatar'
                />
            </div>
        </div>)
}