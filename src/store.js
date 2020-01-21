import Vue from 'vue';

const user = Vue.observable({
    id: 0,
    name: '',
    email: '',
    is_admin: false
});

export const getters = {
    name: () => user.name || 'Not logged in',
    isLoggedIn: () => user.id !== 0
};

export const setters = {
    setUser: (val) => {
        for (let k in user)
            user[k] = val[k]
    },
    clearUser: () => {
        user.name = '';
        user.id = 0;
        user.email = '';
        user.is_admin = false;
    }
};