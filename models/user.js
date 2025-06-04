import moogoose, { Schema, models } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
},
{timestamps: true}
);
export const User = models.User || moogoose.models.User || moogoose.model("User", userSchema);