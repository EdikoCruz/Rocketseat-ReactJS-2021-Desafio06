import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import type { Continent } from "@/types/Continent";

function ContinentCTA() {
    return (
        <>
            <Box w="90px" h="2px" marginX="auto" background="Dark.Text" />
            <Flex w="100%" maxW="1160px" p="1" mx="auto" justify="center" align="center" direction="column" marginY="3.25rem">
                <Text fontSize="2.25rem" fontWeight="medium" color="Dark.Text">
                    Vamos nessa?
                </Text>
                <Text fontSize="2.25rem" fontWeight="medium" color="Dark.Text">
                    Então escolha seu continente
                </Text>
            </Flex>
        </>
    )
}

function Card({ continent }: { continent: Continent }) {
    return (
        <Box w="100%" h="450px" backgroundImage={continent.CTA.imageUrl} backgroundSize="cover">
            <Flex w="100%" h="450px" justify="center" align="center" direction="column" backgroundColor="#1C140190">
                <Link href={`/continent/${continent.id}`}>
                    <Text fontSize="3rem" fontWeight="bold" color="Light.Text">
                        {continent.name}
                    </Text>
                </Link>
                <Link href={`/continent/${continent.id}`}>
                    <Text fontSize="1.5rem" fontWeight="bold" color="Light.Info">
                        {continent.CTA.description}
                    </Text>
                </Link>
            </Flex>
        </Box>
    )
}

export function ContinentList({ continents }: { continents: Continent[] }) {
    return (
        <>
            <ContinentCTA />
            <Box w="100%" maxW="1240px" mx="auto" mb="2.5rem">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {
                        continents.map(continent => <SwiperSlide key={continent.id}><Card continent={continent} /></SwiperSlide>)
                    }
                </Swiper>
            </Box>
        </>
    )
}