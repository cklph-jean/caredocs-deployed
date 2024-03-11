import { create } from 'zustand';

const useCountdownStore = create((set) => ({
    secondsLeft: 60,
    isResendEnabled: false,

    decrementSeconds: () => {
        set((state) => ({ secondsLeft: Math.max(state.secondsLeft - 1, 0) }));
    },

    resetCountdown: () => {
        set({ secondsLeft: 60, isResendEnabled: false });
    },

    enableResend: () => {
        set({ isResendEnabled: true });
    },
}));

export default useCountdownStore;
