export const state = () => ({
  opening: false,
  menu: false
  // canplayBG: false,
  // loadingComplete: false,
  // loadingMounted: false
})

export const getters = {
  opening: state => state.opening,
  menu: state => state.menu
  // canplayBG: state => state.canplayBG,
  // loadingComplete: state => state.loadingComplete,
  // loadingMounted: state => state.loadingMounted
}

export const mutations = {
  setOpening(state) {
    state.opening = true
  },
  openMenu(state) {
    state.menu = true
  },
  closeMenu(state) {
    console.log('closeMenu')
    state.menu = false
  }
  // setCanplayBG(state) {
  //   state.canplayBG = true
  // },
  // setLoadingComplete(state) {
  //   state.loadingComplete = true
  // },
  // setLoadingMounted(state) {
  //   state.loadingMounted = true
  // }
}

export const actions = {}
