import { GraphQLObjectType } from 'graphql';
import { memberTypeQuery, memberTypesQuery } from '../query-types/memberTypeQueries.js';
import { postQuery, postsQuery } from '../query-types/postQueries.js';
import { profileQuery, profilesQuery } from '../query-types/profileQueries.js';
import { userQuery, usersQuery } from '../query-types/userQueries.js';
import {
  changeUserMutation,
  createUserMutation,
  deleteUserMutation,
} from '../mutation-types/userMutations.js';
import {
  changePostMutation,
  createPostMutation,
  deletePostMutation,
} from '../mutation-types/postMutations.js';

export const rootQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    memberTypes: memberTypesQuery,
    memberType: memberTypeQuery,
    posts: postsQuery,
    post: postQuery,
    profiles: profilesQuery,
    profile: profileQuery,
    users: usersQuery,
    user: userQuery,
  },
});

export const rootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: createUserMutation,
    changeUser: changeUserMutation,
    deleteUser: deleteUserMutation,
    createPost: createPostMutation,
    changePost: changePostMutation,
    deletePost: deletePostMutation,
  },
});
