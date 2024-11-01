import { GraphQLObjectType } from 'graphql';
import { memberTypeQuery, memberTypesQuery } from '../query-types/memberTypeQueries.js';
import { postQuery, postsQuery } from '../query-types/postQueries.js';
import { profileQuery, profilesQuery } from '../query-types/profileQueries.js';
import { userQuery, usersQuery } from '../query-types/userQueries.js';

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
