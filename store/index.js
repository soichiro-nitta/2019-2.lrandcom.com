export const state = () => ({
  opening: false
  // canplayBG: false,
  // loadingComplete: false,
  // loadingMounted: false
})

export const getters = {
  opening: state => state.opening
  // canplayBG: state => state.canplayBG,
  // loadingComplete: state => state.loadingComplete,
  // loadingMounted: state => state.loadingMounted
}

export const mutations = {
  setOpening(state) {
    state.opening = true
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
