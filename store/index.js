export const state = () => ({
  opening: false,
  menu: false,
  leave: false
})

export const getters = {
  opening: state => state.opening,
  menu: state => state.menu,
  leave: state => state.leave
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
  },
  toggleLeave(state) {
    state.leave = !state.leave
  }
}

export const actions = {}
