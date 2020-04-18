import axios from '../../utils/axios'

export default {
  registerUser: ({}, data) => {
    axios.post('auth/register', data)  
  }
}