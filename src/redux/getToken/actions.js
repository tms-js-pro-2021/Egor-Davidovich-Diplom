export const SET_TOKEN = 'SET_TOKEN'

export const setToken = (actions) => {
  return {
    type: SET_TOKEN,
    payload: actions,
  }
}
