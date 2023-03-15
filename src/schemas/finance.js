const { Schema, model } = require("mongoose");
const { User } = require("./user");

const schemaFinances = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    required: [true, "Set category for transaction"],
  },
  amount: {
    type: Number,
    required: [true, "Set amount for transaction"],
  },
  currency: {
    type: String,
    enum: ["UAH", "USD", "EUR", "PLN", "RUB", "CZK", "GBP"],
    default: "UAH",
  },
  type: {
    type: String,
    enum: ["expenses", "income"],
    required: [true, "Set type for transaction"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: [true, "Set owner id for transaction"],
  },
  month: {
    type: Number,
    min: 1,
    max: 12,
    required: [true, "Set month for transaction"],
  },
  year: {
    type: Number,
    min: 2000,
    max: 3000,
    required: [true, "Set year for transaction"],
  },
  day: {
    type: Number,
    min: 1,
    max: 31,
  },
});

// pre-hook for changing balance before adding transaction
schemaFinances.pre("save", { document: true }, async function (next) {
  const { owner, type, amount } = this;

  const storedUser = await User.findById(owner);
  if (storedUser) {
    let { balance } = storedUser;
    if (type === "income") {
      balance = balance + amount;
    }
    if (type === "expenses") {
      balance = balance - amount;
    }
    await User.findByIdAndUpdate(owner, { balance });
  }

  next();
});

// pre-hook for changing balance before removing transaction
schemaFinances.pre(
  "findOneAndRemove",
  { document: false, query: true },
  async function (next) {
    const financeId = this.getQuery()._id;

    const transaction = await model("finances").findOne({
      _id: financeId,
    });

    if (!transaction) next();

    const { owner, type, amount } = transaction;

    const storedUser = await User.findById(owner);

    if (storedUser) {
      var { balance } = storedUser;
      if (type === "income") {
        balance = balance - amount;
      }
      if (type === "expenses") {
        balance = balance + amount;
      }
      await User.findByIdAndUpdate(owner, { balance });
    }

    next();
  }
);

const Finance = model("finances", schemaFinances);

module.exports = {
  Finance,
};
