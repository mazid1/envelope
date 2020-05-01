import * as mongoose from 'mongoose';

const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const Schema = mongoose.Schema;
const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
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
    tags: [{ type: String }],
    slug: { type: String, slug: 'title', unique: true }
  },
  {
    timestamps: {},
    minimize: false
  }
);

const articleModel = mongoose.model('Article', articleSchema);

export { articleModel as Article };
