const axios = require("axios");
const cors = require("cors");
const app = require("express")();
app.use(cors());
const request = axios.create({
  baseURL: "https://api-dev.1337co.de/v3/",
});

request.defaults.headers.common.Authorization =
  "api-key 14:2022-03-21:emelie.nilsson@1337.tech 0fdaf3cfc7f618f7c1f514f3bace24d3286593618f144a20298b125fba5eaff8";

app.get("/v3/employees", (_req, res) => {
  request
    .get("/employees")
    .then((response) => {
      res.send(response.data);
    })
    .catch((e) => {
      console.log(e);
      res.send([]);
    });
});

app.listen(3000);
