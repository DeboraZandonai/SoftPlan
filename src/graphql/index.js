import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const contriesItemsVar = makeVar([]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        list: {
          read(_, { variables }) {
            return contriesItemsVar().filter((item) => {
              const name = item.nameTranslations[0].value;
              return (
                name.toLowerCase().indexOf(variables.term.toLowerCase()) >= 0
              );
            });
          },
        },
        details: {
          read(_, { variables }) {
            const found = contriesItemsVar().find(
              (item) => item._id === variables.id
            );
            if (found) return found;
            return [];
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  uri: "http://testefront.dev.softplan.com.br/",
  cache: cache,
});
