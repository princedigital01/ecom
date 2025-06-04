<<<<<<< HEAD
import moogoose, { Schema, models } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
},
{timestamps: true}
);
=======
import moogoose, { Schema, models } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
},
{timestamps: true}
);
>>>>>>> 72ab78614fbbc9379365085ebf0c9f004550bbc9
export const User = models.User || moogoose.models.User || moogoose.model("User", userSchema);