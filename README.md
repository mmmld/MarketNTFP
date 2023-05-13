# MarketNTFP
Authors: Marie-Lou David, Ishas Kulkarni

Creation date: 17-04-2023

Revision dates:
 - addition of seller functionalities: 24-04-2023
 - french translation: 24-04-2023
 - database addition: 30-04-2023
 - products changes: 13-05-2023

Project for the ICT4D course, aiming at putting in contact buyer and sellers of NTFP in Burkina Faso.

The application is currently deployed on Voxeo, call	+31 2 08 08 2848 and enter the PIN: `9990522467` to access it.

## Pre-requisites:
* install latest version of node.js from: https://nodejs.org/en

## To Run on local:
* run : `npm install` in the project directory to install all dependencies
* run : `node server.js` : For running the API server

## To deploy on Voxeo
In order to deploy the application online and test it, one can deploy this application to the Voxeo platform.
* Create an account on https://volution.voxeo.com.
* The first step is to upload all the application files:
    + Go to ``Fies, Logs, Reports``
    + Go to the repertory ``www``
    + Upload all application files, with the same directories
* The second step is to create the app:
    +  Go to the Application Manager
    +  Click on ``Add Application``
    +  Give a name to the app
    +  Select ``Voice phone calls``
    +  Select ``Development``, your region, ``VoiceXML``, ``Nuance`` and the available platform.
    +  For the Voice URL, click on ``file manager`` and select the file ``main.vxml`` in the repertory ``www``.
* The last step is to test the app:
    + Go to the tab ``Contact methods``
    + Click on ``International numbers``
    + Call the number of the country that suits you the most and enter the PIN.

## REST API curl command examples: 

### Example API call for getting all sellers for a product type:
```
curl --location 'localhost:5001/api/sellers/neem-oil'
```

### Example API call For adding a seller :
```
curl --location 'localhost:5001/api/addSeller' \
--header 'Content-Type: application/json' \
--data '{
            "product": "shea-butter",
            "phone_number": "+3212628",
            "product_quantity": "2",
            "price": "120",
            "region": "west"
}'
```


