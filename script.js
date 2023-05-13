import { executeQuery, createTableQuery } from './db-client.js'
import dotenv from 'dotenv';
dotenv.config();

/**
 * Gets all the sellers listed for one product in the database in the listed_sellers
 * @param {String} product: can be honey, shea_butter, neem_oil, soap, herbal. 
 * @returns a boolean, true if some sellers are listed for the product, false otherwise
 */
async function getSellers(product) {
    /**
     *  TODO: need to actually implement but the listed_sellers object (declared in buyer.vxml) should be something like: 
     *          if no seller for that product then empty list and return false
     *          if there are sellers, the listed_sellers = [{region, quantity, price, number}] and return true
     **/
    await dbInit();
    var selectQuery = `select * from ${process.env.SCHEMA}.${process.env.TABLE_NAME} where product = '${product}' limit 100`
    var queryResult = await executeQuery(selectQuery)
    
    return queryResult
}


async function dbInit() {
    await executeQuery(createTableQuery);
}

/**
 * Adds the seller to the database for the selected product
 * @param {String} product: either honey, shea_butter, neem_oil, soap or herbs
 * @param {String} number: number of the seller
 * @param {String} quantity: quantity of the product the product they are selling
 * @param {String} price: price of one unit 
 * @param {String} region: either north, east, south or west
 */
async function addSeller( productId, product, phoneNumber, productQuantity, price, region) {
    await dbInit();
    var insertQuery = `INSERT INTO ${process.env.SCHEMA}.${process.env.TABLE_NAME} (product_id, product, phone_number, product_quantity, price, region)
    VALUES ('${productId}', '${product}', '${phoneNumber}', '${productQuantity}', '${price}', '${region}')`
    var queryResult = await executeQuery(insertQuery)
    return queryResult
}

export {addSeller, getSellers}