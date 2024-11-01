import { GraphQLObjectType } from "graphql";
import { memberTypeQuery, memberTypesQuery } from "../query-types/memberTypeQueries.js";

export const rootQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    memberTypes: memberTypesQuery,
    memberType: memberTypeQuery,
  },
});
