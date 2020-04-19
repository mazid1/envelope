import * as mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    published: {
      type: Boolean,
      default: false
    },
    publishedAt: {
      type: Date
    },
    tags: [{ type: String }]
  },
  {
    timestamps: {},
    minimize: false
  }
);

const articleModel = mongoose.model('Article', articleSchema);

export { articleModel as Article };
