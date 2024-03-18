import { create } from "zustand";

const useFacilityStore = create((set) => ({
    activeFacility: 1,
    setActiveFacility: (facility) => set({ activeFacility: facility }),
    fetchFacility: async () => {
        console.log("fetch facilities!");
    }
}));


export default useFacilityStore;