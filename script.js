/**
 * Gets all the sellers listed for one product in the database in the listed_sellers
 * @param {String} product: can be honey, shea_butter, neem_oil, soap, herbal. 
 * @returns a boolean, true if some sellers are listed for the product, false otherwise
 */
function getSellers(product) {
    /**
     *  TODO: need to actually implement but the listed_sellers object (declared in buyer.vxml) should be something like: 
     *          if no seller for that product then empty list and return false
     *          if there are sellers, the listed_sellers = [{region, quantity, price, number}] and return true
     **/

    listed_sellers = [{region: "north", quantity: "300", price: "10", number: "+33485920"}, {region: "south", quantity: "4", price: "25", number: "+33974920"}];
    return true;

    //listed_sellers = [];
    //return false;
}


/**
 * Adds the seller to the database for the selected product
 * @param {String} product: either honey, shea_butter, neem_oil, soap or herbs
 * @param {String} number: number of the seller
 * @param {String} quantity: quantity of the product the product they are selling
 * @param {String} price: price of one unit 
 * @param {String} region: either north, east, south or west
 */
function addSeller(product, number, quantity, price, region) {
    /**
     * TODO: add the seller with the all parameter to the database
     */
}