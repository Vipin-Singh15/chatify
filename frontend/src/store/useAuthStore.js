import { create } from "zustand";

export const useAuthStore = create((set) => ({
    authUser:{name:"john", _id:123, age:23},
    isLoggedIn: false,
    login: () => {
        set({isLoggedIn: true})
    },
    logout: () => {
        set({isLoggedIn: false})
    },
    isLoading: false,
    setLoading: (loading) => {
        set({isLoading: loading})
    }
}));