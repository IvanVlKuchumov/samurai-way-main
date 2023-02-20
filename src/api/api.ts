import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'fe6fd9b4-881b-426b-97e2-c9bd140e9d62'
    }
})


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                return response.data
            })
    },
    followUser(userID: number) {
        return instance.post(`follow/${userID}`)
            .then(response => {
                    return response.data
                }
            )
    },
    unfollowUser(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(response => {
                    return response.data
                }
            )
    }

}

