import {DispatchType, PostPagesType, PostsType} from "./state";



export const profileReducer= (state:PostPagesType, action:DispatchType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break
        }
        case 'UPDATE-NEW-POST': {
            state.newPostText = action.payload.newPost
            break
        }
    }
    return state
}