import axios from "axios";
const API_BASE_URL = "http://localhost:3000/";

const fetchFlightSearchResults = (origin, destination) => {
  const url = `${API_BASE_URL}flights/search/${origin}/${destination}`;
  return axios.get(url);
};

const fetchFlightDetails = (id) => {
  const url = `${API_BASE_URL}flights/${id}`
  return axios.get(url);
};

const createResevation = (flight_id, row, col) => {
  const url = `${API_BASE_URL}reservations/create`
  return axios.post(url, {flight_id, row, col})
}



export { fetchFlightSearchResults, fetchFlightDetails, createResevation };
