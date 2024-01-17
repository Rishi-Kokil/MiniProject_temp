import mongoose from "mongoose";

import { adminSchema, userSchema } from "./schema.js";

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin" , adminSchema);

export { User , Admin };