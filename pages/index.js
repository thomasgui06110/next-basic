import React from "react";
import { Layout } from "../components/layout";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

import dynamic from "next/dynamic";

const Home = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid grey",
  };

  return (
    <>
      <Head>
        <title>Liste des régions</title>
      </Head>
      <Layout>
        <div className="container-fluid">
          <h1>Cette page utilise getServerSideProps</h1>
          {data.map((region) => (
            <div style={styles} key={region.code}>
              <Link
                href="/region/[code]"
                as={`/region/${region.code}`}
                passHref
              >
                <h1>{region.nom}</h1>
              </Link>
              <p>{region.code}</p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(`${process.env.API_GEO}/regions`);

  return {
    props: { data },
  };
};

export default Home;
