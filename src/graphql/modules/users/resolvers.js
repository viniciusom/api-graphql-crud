import User from '../../../models/User';

export default {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id), 
  },
  Mutation: {
    createUser: (_, { input }) =>  User.create(input),
    updateUser: (_, { id, input }) => User.findOneAndUpdate(id, input, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findByIdAndDelete(id)),
  },
};