import React from "react";
import s from "./Profile.module.css"
export const Profile = () => {
    return (
        <>
            <main className={s.content}>
                <div>
                    <img id={s.img_width_1}
                         src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
                </div>
                <div>
                    <img id={s.img_width_2}
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXimJflwHru_9HwlTzkzmlYWhw5DMcWaApkg7EpQJrQL17oa2gWGWc8R79Bs936O5GAsA&usqp=CAU"/>
                </div>
                <div className={s.item}>
                    My post
                </div>
                <div className={s.item}>
                    New post
                </div>
                <div className={s.item}>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
            </main>
        </>
    );
}