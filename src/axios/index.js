import Axios from 'axios'

// const url = 'http:localhost:9991'
const url = 'https://test-beckend.herokuapp.com'

export default Axios.create({
  baseURL:url
})
