import { Flex, Spacer, Image, Text } from "@chakra-ui/react"

import type { City } from "@/types/City";

function Card({city}:{city:City}) {
    return (
        <Flex
            w="256px"
            justify="stretch"
            align="center"
            direction="column"
            background="Light.White"
            marginBottom="3rem"
        >
            <img src="" alt="" />
            <Image
                src={city.imageUrl}
                alt="Foto da cidade"
                width={256}
                height={175}
            />
            <Flex
                w="100%"
                p="1.5rem"
                justify="space-between"
                align="center"
                direction="row"
            >
                <Flex
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                >
                    <Text marginBottom="0.75rem" fontFamily="Barlow" fontSize="1.25rem" fontWeight="semibold" color="Dark.Text">
                        {city.name}
                    </Text>
                    <Text fontFamily="Barlow" fontSize="1rem" fontWeight="400" color="Dark.Text">
                        {city.country}
                    </Text>
                </Flex>
                <Spacer />
                <Image
                    objectFit="cover"
                    src={city.flag.imageUrl}
                    alt={city.flag.imageAlt}
                    width={30}
                    height={30}
                    borderRadius={50}
                />
            </Flex>
        </Flex>
    )
}

export function CityList({cities}:{cities:City[]}) {
    return (
        <Flex
            w="100%" maxW="1160px" p="1" mx="auto"
            justify="flex-start" align="flex-start" direction="column"
            marginBottom="2.1875rem"
        >
            <Text marginBottom="2.5rem" fontSize="2.25rem" color="Dark.Text">Cidades +100</Text>

            <Flex w="100%" justify="space-between" align="center" direction="row" wrap="wrap">
                {
                    cities.map(city => <Card key={city.id} city={city}/>)
                }
            </Flex>
        </Flex>
    )
}