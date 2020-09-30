const express = require('express');
const axios = require('axios');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());


app.get('/', function (req, res) {
  // getToken(SF_BASE_URL);
  console.log('Hi there, I\'m sitting here since the afternoon');
});

app.post('/vehicle/search-garage', (request, response) => {
  response.send([
    {
      "id": 2,
      "garage_name": "garage v1",
      "address": "123 AAA",
      "city": "Danang",
      "country": "Viet nam",
      "lat": 16.68,
      "lon": 108.68,
      "logo": "http://#",
      "rcs_number": 123,
      "vat_number": 456,
      "is_brand_representation": 1,
      "is_brand_subsidiary": 1,
      "status": 1,
      "holiday_start": 1234567890,
      "holiday_end": 1234567890,
      "description": "texttexttexttexttexttext",
      "user_id": 2,
      "type_garage_id": 1,
      "category_vehicle_id": 1,
      "insurance_accepted_id": 1,
      "licensed_insurance_id": 1,
      "payment_method_id": 1
    }
  ]);
})

app.listen(port, function () {
  console.log(`Example app listening on port !`);
});
