import * as mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
      unique: true,
      dropDups: true
    },
    displayText: {
      type: String,
      required: true,
      unique: true,
      dropDups: true
    }
  },
  {
    timestamps: {},
    minimize: false
  }
);

const categoryModel = mongoose.model('Category', categorySchema);

export { categoryModel as Category };
