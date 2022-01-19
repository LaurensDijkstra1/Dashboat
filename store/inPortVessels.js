export const state = () => ({
  list: []
})

export const getters = {
  get: (state) => {
    return state
  },
}

export const mutations = {
  set(state, ids) {
    if (state.length === 0) {
      ids.forEach((id) => {
        state.push(id)
      })
    }
  }
}

