export const state = () => ({
  opened: false,
  leave: false
})

export const getters = {
  opened: state => state.opened,
  leave: state => state.leave
}

export const mutations = {
  open(state) {
    state.opened = true
  },
  toggleLeave(state) {
    state.leave = !state.leave
  }
}
