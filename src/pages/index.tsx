import { GetStaticProps } from "next";
import Head from "next/head";
import axios from 'axios';

import { Header } from "@/components/Header";
import { MainHero } from "@/components/MainHero";
import { TraitList } from "@/components/TraitList";
import { ContinentList } from "@/components/ContinentList";

import type { Continent } from "@/types/Continent";
import type { Trait } from "@/types/Trait";

interface HomeProps {
  traits: Trait[],
  continents: Continent[],
}

export default function Home({ traits, continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>World trip</title>
      </Head>
      <main>
        <Header />

        <MainHero />

        <TraitList traits={traits} />

        <ContinentList continents={continents} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const api = axios.create({
    baseURL: 'http://localhost:3333/'
  });

  try {
    const traits = (await api.get('traits')).data as Trait[];
    const continents = (await api.get('continents')).data as Continent[];
    return {
      props: {
        traits,
        continents,
      }
    }
  } catch (error) {
    return {
      props: {
        traits: [],
        continents: [],
      }
    }
  }
}