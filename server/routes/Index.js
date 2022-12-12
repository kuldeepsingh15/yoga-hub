import express from "express";
 
import { 
    getAllUsers,
    getUserById,
    createUser,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";
 
const router = express.Router();
 
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
 
export default router;