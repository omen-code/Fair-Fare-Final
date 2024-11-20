import mongoose from "mongoose";

const savedLocationSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the location (e.g., "Home", "Office")
  address: { type: String, required: true }, // Full address of the location
  dateAdded: { type: Date, default: Date.now }, // Timestamp for when the location was added
});

const SavedLocation = mongoose.model("SavedLocation", savedLocationSchema);

export default SavedLocation;
