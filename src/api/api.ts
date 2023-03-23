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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
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

export const authAPI = {
    checkAuth() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout () {
        return instance.delete('auth/login')
            .then(response => {
                return response.data
            })
    }
}


export const profileAPI = {
    setUsersProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status:string) {
        return instance.put(`profile/status/`, {status})
            .then(response => {
                return response.data
            })
    }

}
