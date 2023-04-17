import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import { Header } from '@/components/Header';
import { ContinentHero } from '@/components/ContinentHero';
import { ContinentDetails } from '@/components/ContinentDetails';
import { CityList } from '@/components/CityList';

import type { Continent } from "@/types/Continent";

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
        <Header />

        <ContinentHero continent={continent} />
        <ContinentDetails continent={continent} />

        <CityList />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'europa' } }],
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps<ContinentProps> = async ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      continent: {
        id: '1',
        name: "Europa",
        slug: "europa",
        CTA: {
          description: "O continente mais antigo.",
          imageUrl: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80",
        },
        description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
        imageUrl: "https://images.unsplash.com/photo-1616862890964-fd20e9dd106d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    }
  }
};