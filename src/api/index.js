import axios from 'axios'

export default {

  fetchData () {
    return new Promise((resolve, reject) => {
      return axios.get(`/v1/advertisements`, {
        maxContentLength: 10
      }).then(
        response => {
          resolve(response.data.data)
        },
        response => {
          reject(response)
        }
      )
    })
  }
}
