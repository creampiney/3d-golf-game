import { create } from 'zustand'

interface SettingsState {
    allowSound: boolean
    setAllowSound: (allowSound: boolean) => void,
}

export const useSettingsStore = create<SettingsState>((set, get) => {
    return {
        allowSound: localStorage.getItem("allowSound") === "true",
        setAllowSound: (allowSound) => {
            localStorage.setItem("allowSound", (allowSound) ? "true" : "false")
            set({ allowSound })
        },
    }
})