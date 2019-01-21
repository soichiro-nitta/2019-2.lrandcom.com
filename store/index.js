export const state = () => ({
  opening: false,
  menu: false
})

export const getters = {
  opening: state => state.opening,
  menu: state => state.menu
}

export const mutations = {
  setOpening(state) {
    state.opening = true
  },
  openMenu(state) {
    state.menu = true
  },
  closeMenu(state) {
    state.menu = false
  }
}

export const actions = {}
