import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const walletSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  balance: { type: Number, required: true, default: 0 },
  transactions: [transactionSchema],
});

const Wallet = mongoose.model('Wallet', walletSchema);

export default Wallet;
