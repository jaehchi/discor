import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: [true, 'this post needs an orginal creator'],
  },
  content: {
    type: String,
    required: true,
  }
});

const Post = mongoose.model('Post', PostSchema);
export default Post;