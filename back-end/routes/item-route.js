import express from 'express';
import { 
    get_items,
    get_item_by_id,
    save_item,
    update_item,
    delete_item
} from '../controllers/item-controller.js';

const router = express.Router();

router.get('/items', get_items);
router.get('/items/:id', get_item_by_id);
router.post('/items', save_item);
router.patch('/items/:id', update_item);
router.delete('/items/:id', delete_item);

export default router;