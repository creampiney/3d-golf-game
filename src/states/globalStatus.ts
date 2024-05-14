import { create } from 'zustand'

interface GlobalStatusState {
    isStationary: boolean,
    setStationary: (isStationary: boolean) => void
    power: number
    setPower: (power: number) => void
}

export const useGlobalStatusStore = create<GlobalStatusState>((set, get) => {
    return {
        isStationary: false,
        setStationary: (isStationary) => set({ isStationary }),
        power: 50,
        setPower: (power) => set({ power }),
    }
})