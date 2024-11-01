import { GraphQLNonNull } from 'graphql';
import { Context } from '../basic-types/context.js';
import { UUIDType } from '../basic-types/uuid.js';
import { NonNullListOfNonNull } from '../basic-types/nonNull.js';
import { User } from '../basic-types/user.js';

export const usersQuery = {
  type: NonNullListOfNonNull(User),
  resolve: async (_, _args, context: Context) => context.prisma.user.findMany(),
};

export const userQuery = {
  type: User,
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
  },
  resolve: async (_, args: { id: string }, context: Context) =>
    await context.prisma.user.findUnique({ where: { id: args.id } }),
};
