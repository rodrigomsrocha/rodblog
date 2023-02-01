import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from "urql";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({
  isClient: !isServerSide,
});

const client = createClient({
  url: "https://api-sa-east-1.hygraph.com/v2/cldfgamfl25vb01unhyme31j3/master",
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };
