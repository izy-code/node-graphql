import { GraphQLFloat, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";
import { Post } from "./post.js";
import { Profile } from "./profile.js";
import { NonNullListOfNonNull } from "./nonNull.js";

export const User = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    balance: { type: new GraphQLNonNull(GraphQLFloat) },
    profile: { type: Profile },
    posts: { type: NonNullListOfNonNull(Post) },
    userSubscribedTo: {
      type: NonNullListOfNonNull(User),
    },
    subscribedToUser: {
      type: NonNullListOfNonNull(User),
    },
  }),
});