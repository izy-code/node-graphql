import { GraphQLFloat, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { UUIDType } from './uuid.js';
import { Post } from './post.js';
import { Profile } from './profile.js';
import { NonNullListOfNonNull } from './nonNull.js';
import { Context } from './context.js';

export const User: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    balance: { type: new GraphQLNonNull(GraphQLFloat) },
    profile: {
      type: Profile,
      resolve: async (user: { id: string }, _args, context: Context) =>
        context.prisma.profile.findUnique({ where: { userId: user.id } }),
    },
    posts: {
      type: NonNullListOfNonNull(Post),
      resolve: async (user: { id: string }, _args, context: Context) =>
        context.prisma.post.findMany({ where: { authorId: user.id } }),
    },
    userSubscribedTo: {
      type: NonNullListOfNonNull(User),
      resolve: async (user: { id: string }, _args, context: Context) =>
        context.prisma.user.findMany({
          where: { subscribedToUser: { some: { subscriberId: user.id } } },
        }),
    },
    subscribedToUser: {
      type: NonNullListOfNonNull(User),
      resolve: async (user: { id: string }, _args, context: Context) =>
        context.prisma.user.findMany({
          where: { userSubscribedTo: { some: { authorId: user.id } } },
        }),
    },
  }),
});
