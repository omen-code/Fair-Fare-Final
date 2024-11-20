import Wallet from "../models/wallet.js";

const getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({});
    if (!wallet) {
      return res.status(404).send('Wallet not found');
    }
    res.json(wallet);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createWallet = async (req, res) => {
  const { userId } = req.body;
  try {
    let wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      wallet = new Wallet({ userId });
      await wallet.save();
    }
    res.status(201).json(wallet);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addTransaction = async (req, res) => {
  const { userId } = req.params;
  const { type, amount } = req.body;

  if (type !== 'credit' && type !== 'debit') {
    return res.status(400).send('Invalid transaction type');
  }

  try {
    const wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      return res.status(404).send('Wallet not found');
    }

    if (type === 'debit' && wallet.balance < amount) {
      return res.status(400).send('Insufficient balance');
    }

    const transaction = { type, amount };
    wallet.transactions.push(transaction);
    wallet.balance += type === 'credit' ? amount : -amount;
    await wallet.save();

    res.status(201).json(wallet);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export  {getWallet,createWallet, addTransaction}