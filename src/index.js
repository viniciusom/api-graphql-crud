import StartServer from './startServer';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

StartServer({ typeDefs, resolvers });