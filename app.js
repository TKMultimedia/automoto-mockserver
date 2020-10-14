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

app.get('/vehicle/search-garage', (request, response) => {
  response.send([
    {
      "id": 2,
      "garage_name": "Nova 4x4 Viet Nam",
      "address": "80 Nguyen Hoang, Da Nang, VietNam",
      "city": "Danang",
      "country": "Viet nam",
      "lat": 16.68,
      "lon": 108.68,
      "logo": "https://i.pinimg.com/originals/b0/90/8b/b0908b8a063cff3898c4bd371ca60db4.jpg",
      "rcs_number": 123,
      "vat_number": 456,
      "is_brand_representation": 1,
      "is_brand_subsidiary": 1,
      "status": 1,
      "holiday_start": 1234567890,
      "holiday_end": 1234567890,
      "description": "texttexttexttexttexttext",
      "category_vehicle": [
        1
      ],
      "insurance_accepted": [
        0
      ],
      "licensed_insurance": [
        0
      ],
      "payment_methods": [
        "TPB"
      ],
      "type_garages": [
        "moto"
      ],
      "is_fav": true,
      "is_working": true,
      "quantity_invoice": 2,
      "distance": 20,
      "createdAt": 1597897264,
      "user": {
        "phone": "012312312"
      },
      "workshop_number": "123b123",
      "zip_code": 123123
    },
    {
      "id": 3,
      garage_name: 'Jean Medecin Garage',
      address: '25 rue Robert Latouche, France',
      city: 'Danang',
      country: 'Viet nam',
      lat: 16.68,
      lon: 106.68,
      logo: 'https://cdn.motor1.com/images/mgl/xW1Jw/s1/lamborghini-cost.jpg',
      "rcs_number": 123,
      "vat_number": 456,
      "is_brand_representation": 1,
      "is_brand_subsidiary": 1,
      "status": 1,
      "holiday_start": 1234567890,
      "holiday_end": 1234567890,
      "description": "texttexttexttexttexttext",
      "category_vehicle": [
        1
      ],
      "insurance_accepted": [
        0
      ],
      "licensed_insurance": [
        0
      ],
      "payment_methods": [
        "TPB"
      ],
      "type_garages": [
        "moto"
      ],
      "is_fav": true,
      "is_working": true,
      "quantity_invoice": 2,
      "distance": 30,
      "createdAt": 1597897264,
      "user": {
        "phone": "012312312"
      },
      "workshop_number": "123b123",
      "zip_code": 123123
    }
  ]);
})

app.get('/car-owner/favorite', (_, response) => {
  response.send([
    {
      id: 3,
      garage_name: 'Jean Medecin Garage',
      address: '25 rue Robert Latouche, France',
      city: 'Danang',
      country: 'Viet nam',
      lat: 16.68,
      lon: 106.68,
      logo: 'https://cdn.motor1.com/images/mgl/xW1Jw/s1/lamborghini-cost.jpg',
      rcs_number: 123,
      vat_number: 456,
      is_brand_representation: 1,
      is_brand_subsidiary: 1,
      status: 1,
      holiday_start: 1234567890,
      holiday_end: 1234567890,
      description: 'texttexttexttexttexttext',
      user_id: 2,
      type_garage_id: 1,
      category_vehicle_id: 1,
      insurance_accepted_id: 1,
      licensed_insurance_id: 1,
      payment_method_id: 1
    }
  ])
})

app.post('/car-owner/favorite', (_, res) => {
  res.send({})
})

app.listen(port, function () {
  console.log(`Example app listening on port !`);
});
