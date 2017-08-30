var axios = require('axios');
var api = axios.create({
  baseURL: (process.env.NODE_ENV === 'test') ? "/" : process.env.REACT_APP_API_SERVER
});

console.log(process.env)

module.exports =
{
  getStops: () => {
    return api.get("/stops");
  },

  getArrivals: (stopId) => {
    return api.get(`/stop/${stopId}`);
  },

  api
}