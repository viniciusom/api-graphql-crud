import Post from '../../../models/Post';

export default {
  Query: {
    users: () => Post.find(),
    user: (_, { id }) => Post.findById(id), 
  },
  Mutation: {
    createPost: (_, { input }) =>  Post.create(input),
    updatePost: (_, { id, input }) => Post.findOneAndUpdate(id, input, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findByIdAndDelete(id)),
  },
};