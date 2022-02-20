const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ngatnguyen:190801@cluster0.dxcom.mongodb.net/backend?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    username: String,
    password: String,
    role: { type: String, enum: ["user", "admin"], default: "username" },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Account", accountSchema);
