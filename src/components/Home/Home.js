import React, { useEffect } from "react";
import Search from "../Search/Search";
import List from "../List/List";
import Header from "../Header/Header";

import { useLazyQuery } from "@apollo/client";
import { LIST } from "../../graphql/queries";

export default function Home() {
  const [getList, { error, loading, data }] = useLazyQuery(LIST, {
    variables: { term: "" },
  });

  useEffect(() => {
    getList();
  }, [getList]);

  const search = (term) => {
    getList({ variables: { term: term } });
  };

  return (
    <>
      <Header />
      <Search search={search} />
      <List loading={loading} error={error} data={data} />
    </>
  );
}
