import api from './../api'

export const commitAds = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    api.fetchData().then(
      response => {
        commit('FETCH_ADS', response)
        resolve(response)
      },
      response => {
        reject(response)
      }
    )
  })
}
