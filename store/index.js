export const state = () => ({
  opened: false
})

export const getters = {
  opened: state => state.opened
}

export const mutations = {
  open(state) {
    state.opened = true
  }
}
