import express from "express"
import  { getWallet, createWallet , addTransaction } from '../controllers/walletController.js';

const router = express.Router();

router.get('/:userId', getWallet);
router.post('/', createWallet);
router.post('/:userId/transaction', addTransaction);

export default router;
