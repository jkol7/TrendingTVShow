const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");

const TrendingShowType = new GraphQLObjectType({
  name: "TrendingShows",
  fields: () => ({
    trendingShowNames: { type: GraphQLString },
    trendingShowImages: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    trendingShows: {
      type: TrendingShowType,
      args: { data: { type: GraphQLString } },
      resolve(parent, args) {
        return trendingShows.find((data) => data === args.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
