import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000'

export default class FlightsHttp {
  // eslint-disable-next-line no-unused-vars
  async getFlights (origin, destination) {
    try {
      const url = `${API_BASE_URL}/flights/search/${origin}/${destination}`
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      return error
    }
  }

  async showFlight (id) {
    try {
      const url = `${API_BASE_URL}/flights/${id}`
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      return error
    }
  }

  async saveReservation (newReservation) {
    try {
      const url = `${API_BASE_URL}/reservation`
      const res = await axios.post(url, {...newReservation})
      return res.data
    } catch (error) {
      return error
    }
  }
}
