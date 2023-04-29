import express from 'express';
import { postAddSeller, getSellersApi
} from '../controllers/controller.js';
const router = express.Router();

router.post('/addSeller', postAddSeller);
router.get('/sellers/:id', getSellersApi);
export default router;