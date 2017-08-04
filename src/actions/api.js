var axios = require('axios');
var api = axios.create({
  baseURL: "http://192.168.1.95:5000"
});

module.exports =
{
  getStops: () => {
    return api.get("/stops");
  },

  getArrivals: (stopId) => {
    return api.get(`/stop/${stopId}`);
  }
}