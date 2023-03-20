import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostsType} from "../../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';
import {FormControls} from '../../../common/FormsControls/FormControls';


type MyPostsTypes = {
    posts: PostsType[]
    addPost: (post: string) => void
}

type FormDataType = {
    newPostBody: string
}

const maxLength30 = maxLengthCreator(30)

export const MyPosts: React.FC<MyPostsTypes> = (props) => {

    const postsElements = props.posts.map(p => <Post messages={p.message} likeCount={p.likesCount} key={p.id}/>)

    const addNewPost = (value: FormDataType) => {
            props.addPost(value.newPostBody)
    }

    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={addNewPost}/>
            <div>{postsElements}</div>
        </div>
    );
}

const PostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControls}
                       name={'newPostBody'}
                       placeholder={'Post message'}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm<FormDataType>({form: 'addPost'})(PostsForm)