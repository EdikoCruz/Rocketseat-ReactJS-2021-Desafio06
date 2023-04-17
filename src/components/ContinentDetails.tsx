import { Box, Flex, Text } from "@chakra-ui/react";

import { FaInfoCircle } from "react-icons/fa";

import type { Continent } from "@/types/Continent";

function Card({ value, label, marginRight }: { value: string, label: React.ReactNode, marginRight?: string }) {
    return (
        <Flex justify="center" align="center" direction="column" marginRight={marginRight}>
            <Text fontSize="3rem" fontWeight="semibold" color="Highlight">
                {value}
            </Text>
            <Text fontSize="1.5rem" fontWeight="semibold" color="Dark.Text" whiteSpace="nowrap">
                {label}
            </Text>
        </Flex>
    )
}

export function ContinentDetails({ continent }: { continent: Continent }) {
    return (
        <Flex
            w="100%" maxW="1160px" p="1" mx="auto"
            justify="space-between"
            align="center"
            marginY="5rem"
        >
            <Box marginRight="4.375rem">
                <Text fontSize="1.5rem" color="Dark.Text">
                    {continent.description}
                </Text>
            </Box>
            <Flex justify="center" align="center" direction="row">
                <Card value="50" label="países" marginRight="2.625rem" />
                <Card value="60" label="línguas" marginRight="2.625rem" />
                <Card value="27" label={
                    <>
                        cidades +100
                        <FaInfoCircle 
                            style={{display: "inline", marginLeft: "5px"}}
                            size="1rem"
                            color="Dark.info"
                            opacity={0.5}
                        />
                    </>
                }/>
            </Flex>
        </Flex>
    )
}