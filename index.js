const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
app.get('/', (req, res) => {
  res.send('Hello World!')
})
const data={
    "id": "3aedd590-da5b-4d46-b265-c07110fd24ab",
    "username": "zfranco",
    "password": "t99T5dj9^XFt",
    "email": "patrickchristopher@example.com",
    "name": "Jeffrey Hammond",
    "first_name": "Jason",
    "last_name": "Henderson",
    "full_name": "Christopher Parker",
    "prefix": "Miss",
    "suffix": "IV",
    "phone": "071-781-3446x16210",
    "cell": "+1-502-031-2800",
    "address": "8423 Bryan Fort Suite 794, West Jesse, MS 80421",
    "street_address": "49936 Wilson Well",
    "city": "Port Robert",
    "state": "West Virginia",
    "postal_code": "84132",
    "country": "Gambia",
    "latitude": 60.4025075,
    "longitude": 131.991172,
    "timezone": "Pacific/Fiji",
    "dob": "1963-07-18",
    "age": 7,
    "gender": "nonbinary",
    "job": "Merchandiser, retail",
    "company": "Bowman, Mueller and Willis",
    "company_email": "uaustin@alexander.biz",
    "ssn": "402-70-5710",
    "credit_card": "589638562167",
    "credit_card_provider": "Maestro",
    "iban": "GB37NFIV48825687436676",
    "ipv4": "21.95.252.0",
    "ipv6": "fce9:5720:d108:7e33:dc00:2d07:64af:d668",
    "mac_address": "fe:25:09:e9:d3:0d",
    "user_agent": "Opera/8.75.(Windows NT 5.01; ca-ES) Presto/2.9.171 Version/12.00",
    "url": "http://www.fisher-barnes.net/",
    "domain": "baker.com",
    "picture": "https://placekitten.com/51/161",
    "avatar": "https://placeimg.com/200/200/any",
    "uuid": "6e0b5b21-12ab-41d1-a242-becf4aa2d5d1",
    "md5": "751661b17060d0c9d3e792c55c459cfe",
    "sha1": "3ce7824cb85a19eadbe1cd748c85532961ec4184",
    "sha256": "26442b78cca5b2974661db0333464b54bd23693bd8687f6388ea51cdcb8841df",
    "locale": "az_AZ"
  }
app.get("/user",(req,res)=>{
  res.json(data)
})
app.get("/login",(req,res)=>{
  res.send("<h1>Login</h1>")
})
app.get("/logout",(req,res)=>{
  res.send("<h1>Logout</h1>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
