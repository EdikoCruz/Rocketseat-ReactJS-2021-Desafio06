import Image from 'next/image'
import { Flex, Text } from "@chakra-ui/react"

import type { Trait } from "@/types/Trait";

function Card({ trait }: { trait: Trait }) {
    return (
        <Flex justify="center" align="center" direction="column">
            <Image
                src={trait.imageUrl}
                alt={trait.imageAlt}
                width={85}
                height={85}
                priority
            />
            <Text fontSize="1.5rem" fontWeight="semibold" color="Dark.Text" marginTop="1.5rem">
                {trait.label}
            </Text>
        </Flex>
    )
}

export function TraitList({ traits }: { traits: Trait[] }) {
    return (
        <Flex
            w="100%"
            maxW="1160px"
            p="1"
            mx="auto"
            justify="space-around"
            align="flex-end"
            marginY="5rem"
            wrap='wrap'
        >
            {
                traits.map(trait => <Card key={trait.label} trait={trait} />)
            }
        </Flex>
    )
}