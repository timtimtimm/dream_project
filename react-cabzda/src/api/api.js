import * as axios from 'axios';

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'e11c02fa-1686-4b94-92a2-93df7746fcb6'
    }
});

export const userApi = {
    getUsersApi(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => {
            return response.data
        }
        );
    },
    Unfollow(userId) {
        return instanse.delete(`follow/${userId}`
        ).then(response => {
            return response.data
        }
        );
    },
    Follow(userId) {
        return instanse.post(`follow/${userId}`
        ).then(response => {
            return response.data
        }
        );
    },

}

export const authApi = {
    headersApi() {
        return instanse.get('auth/me').then(response => {
            return response.data;
        }
        );
    },
    login(email, password, rememberMe) {
        return instanse.post('auth/login', { email, password, rememberMe }).then(response => {
            return response.data;
        }
        );
    },
    logout() {
        return instanse.delete('auth/login').then(response => {
            return response.data;
        }
        );
    },

}
export const profileApi = {
    getProfileUser(userId) {
        return instanse.get(`profile/${userId}`).then(response => {
            return response;
        }
        );
    },

    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`).then(response => {
            return response;
        }
        );
    },

    updateStatus(status) {
        return instanse.put(`profile/status`, { status }).then(response => {
            return response;
        }
        );
    },

    setPhoto(photo) {
        let formData = new FormData();
        formData.append('image', photo);
        return instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }).then(response => {
            return response;
        }
        );
    }
}


