import React from "react";
import { Layout } from "../components/layout";
import axios from "axios";
import Head from "next/head";

const Departements = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #DDD",
  };
  return (
    <>
      <Head>
        <title>Liste des départements</title>
      </Head>
      <Layout>
        <h1>Cette page utilise getInitialProps</h1>
        {data.map((dep) => (
          <div style={styles} key={dep.code}>
            <h1>{dep.nom}</h1>
            <div>Code du département : {dep.code}</div>
            <div>Code de la région : {dep.codeRegion}</div>
          </div>
        ))}
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const url = "https://geo.api.gouv.fr/departements";
  const { data } = await axios.get(url);

  return {
    props: { data },
  };
};

export default Departements;
