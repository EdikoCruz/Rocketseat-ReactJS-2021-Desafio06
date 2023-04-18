import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';

import { Header } from '@/components/Header';
import { ContinentHero } from '@/components/ContinentHero';
import { ContinentDetails } from '@/components/ContinentDetails';
import { CityList } from '@/components/CityList';

import type { City } from "@/types/City";
import type { Continent } from "@/types/Continent";

interface ContinentProps {
  continent: Continent;
  cities: City[];
}



export default function Continent({ continent, cities }: ContinentProps) {
  return (
    <>
      <Header />

      <ContinentHero continent={continent} />
      <ContinentDetails continent={continent} cities={cities} />

      <CityList cities={cities} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const api = axios.create({
    baseURL: 'http://localhost:3333/'
  });

  try {
    const continents = (await api.get('continents')).data as Continent[];
    return {
      paths: continents.map((continent) => ({ params: { slug: continent.id } })),
      fallback: false,
    }
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    }
  }
};

export const getStaticProps: GetStaticProps<ContinentProps> = async ({ params }: GetStaticPropsContext) => {
  const api = axios.create({
    baseURL: 'http://localhost:3333/'
  });
  
  const continent = (await api.get(`continents/${params?.slug}`)).data as Continent;
  const cities = (await api.get(`cities?continent=${params?.slug}`)).data as City[];

  return {
    props: {
      continent,
      cities,
    }
  }
};