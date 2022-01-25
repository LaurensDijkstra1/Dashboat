export const ICON_COLORED = 'icon colored'
export const ROW_COLORED = 'row colored'

export const AV_COLOR = 'red'
export const SAV_COLOR = 'yellow'

export const V   = 'vessel'
export const AV  = 'autonomous vessel'
export const SAV  = 'semi autonomous vessel'

export const state = () => ({
  colorMethod: ROW_COLORED
})

export const getters = {
  getColorMethod: (state) => {
    return state.colorMethod
  }
}

export const mutations = {
  toggleColorMethod(state) {
    state.colorMethod = state.colorMethod === ICON_COLORED
      ? ROW_COLORED
      : ICON_COLORED
  }
}
