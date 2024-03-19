import { create } from "zustand";

const useStaffStore = create((set) => ({
    activeStaff: 1,

    setActiveStaff: (staff) => set({ activeStaff: staff }),

    fetchStaff: async () => {
        console.log("fetch staff!");
    }
}));


const useStaffListStore = create((set) => ({
    activeRowStaff: null,

    setActiveRowStaff: (staff) => set({ activeRowStaff: staff }),

}))

export default useStaffStore;
export { useStaffListStore };