export const state = () => ({
  selectedDate: new Date()
});

export const getters = {
  selectedDate: state => state.selectedDate
};

export const mutations = {
  setSelectedDate(state, payload) {
    state.selectedDate = payload;
  }
};
