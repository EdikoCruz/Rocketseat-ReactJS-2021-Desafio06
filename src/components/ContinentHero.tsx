import { Box, Flex, Text } from "@chakra-ui/react"

import type { Continent } from "@/types/Continent";

export function ContinentHero({ continent }: { continent: Continent }) {
    return (
        <Box w="100%" h="500px" backgroundImage={continent.imageUrl} backgroundSize="cover">
            <Box w="100%" h="100%" padding="16" background="#1C140190">
                <Flex w="100%" h="100%" justify="flex-start" align="flex-end">
                    <Text fontSize="3rem" fontWeight="semibold" color="Light.Text">
                        {continent.name}
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}