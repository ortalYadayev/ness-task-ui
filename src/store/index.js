import { createStore } from 'vuex'
import axiosInstance from "../_helpers/axios";

const store = createStore({
    state: {

    },
    getters: {},
    mutations: {},
    actions: {
        async sign({}, payload) {
            return await axiosInstance.post('/sign', payload);
        },
        async getStudents() {
            return await axiosInstance.get('/students');
        },
        async getLastStudent() {
            return await axiosInstance.get('/get-student');
        },
    },
})

export default store;
