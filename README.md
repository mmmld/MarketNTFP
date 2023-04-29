# MarketNTFP
Authors: Marie-Lou David

Creation date: 17-04-2023

Revision dates:
 - addition of seller functionalities: 24-04-2023
 - french translation: 24-04-2023

Project for the ICT4D course, aiming at putting in contact buyer and sellers of NTFP in Burkina Faso.

In order to test the project on voxeo, call	+31 2 08 08 2848 and enter the PIN: `9990522467`.

Pre-requisites:
install latest version of node.js from: 
https://nodejs.org/en

Run:
- npm install 
- node server.js : For running the API server

REST API curl command examples: 
For getting all sellers :
curl --location 'localhost:5001/api/sellers/neem-oil'

For adding a seller :
curl --location 'localhost:5001/api/addSeller' \
--header 'Content-Type: application/json' \
--data '{
            "product": "shea-butter",
            "phone_number": "+3212628",
            "product_quantity": "2",
            "price": "120",
            "region": "west"
}'


