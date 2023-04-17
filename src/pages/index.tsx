import Head from "next/head";

import { Header } from "@/components/Header";
import { MainHero } from "@/components/MainHero";
import { TraitList } from "@/components/TraitList";
import { ContinentList } from "@/components/ContinentList";
import { GetStaticProps } from "next";

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
  return {
    props: {
      traits: [
        {
          imageUrl: "traits/cocktail.svg",
          imageAlt: "Imagem de Bebida",
          label: "vida noturna",
        },
        {
          imageUrl: "traits/surf.svg",
          imageAlt: "Imagem de praia",
          label: "praia",
        },
        {
          imageUrl: "traits/building.svg",
          imageAlt: "Imagem de prédio",
          label: "moderno",
        },
        {
          imageUrl: "traits/museum.svg",
          imageAlt: "Imagem de museu",
          label: "clássico",
        },
        {
          imageUrl: "traits/earth.svg",
          imageAlt: "Imagem do mundo",
          label: "e mais...",
        },
      ],
      continents: [
        {
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
        {
          id: '2',
          name: "Europa",
          slug: "europa",
          CTA: {
            description: "O continente mais antigo.",
            imageUrl: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80",
          },
          description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
          imageUrl: "https://images.unsplash.com/photo-1616862890964-fd20e9dd106d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: '3',
          name: "Europa",
          slug: "europa",
          CTA: {
            description: "O continente mais antigo.",
            imageUrl: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80",
          },
          description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
          imageUrl: "https://images.unsplash.com/photo-1616862890964-fd20e9dd106d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: '4',
          name: "Europa",
          slug: "europa",
          CTA: {
            description: "O continente mais antigo.",
            imageUrl: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80",
          },
          description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
          imageUrl: "https://images.unsplash.com/photo-1616862890964-fd20e9dd106d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: '5',
          name: "Europa",
          slug: "europa",
          CTA: {
            description: "O continente mais antigo.",
            imageUrl: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80",
          },
          description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
          imageUrl: "https://images.unsplash.com/photo-1616862890964-fd20e9dd106d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
      ]
    }
  }
}