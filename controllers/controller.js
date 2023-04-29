import asyncHandler from 'express-async-handler';
import {addSeller, getSellers} from '../script.js'


//@desc     Add sellers to database
//@route    POST api/addSeller
//@access   Public
const postAddSeller = asyncHandler(async(req, res) => {
    const { product, phone_number, product_quantity, price, region } = req.body;


    if ( product && phone_number && product_quantity && price && region) {
        const productId = Math.floor(Math.random() * 900) + 100;
        await addSeller(productId, product, phone_number, product_quantity, price, region)
        
        return res.json({
            status: 'updated'
        });
    } else {
        res.status(403);
        throw new Error('Invalid request');
    }
});

//@desc     GET User Profile
//@route    GET api/sellers/:id
//@access   Public
const getSellersApi = asyncHandler(async(req, res) => {
    const product = req.params.id
    var sellers = await getSellers(product)

    if (sellers.length > 0 ) {
        return res.json({
            ntfp_sellers: sellers
        });
    } else {
        res.status(404);
        throw new Error('Sellers not Found');
    }
});

export {getSellersApi, postAddSeller};