import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import React from 'react';

import { FaInfoCircle } from "react-icons/fa";

import type { City } from "@/types/City";
import type { Continent } from "@/types/Continent";

function Card({ value, label, marginRight }: { value: string, label: React.ReactNode, marginRight?: string }) {
    return (
        <Flex justify="center" align="center" direction="column" marginRight={marginRight}>
            <Text fontSize="3rem" fontWeight="semibold" color="Highlight">
                {value}
            </Text>
            {label}
        </Flex>
    )
}


const CustomLabel = React.forwardRef(({ children, ...rest }: any, ref) => (
    <Box ref={ref} {...rest}>
        {children}
    </Box>
))

export function ContinentDetails({ continent, cities }: { continent: Continent, cities: City[] }) {
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
                <Card value={String(continent.contries)} label={
                    <Text fontSize="1.5rem" fontWeight="semibold" color="Dark.Text" whiteSpace="nowrap">países</Text>
                } marginRight="2.625rem" />
                <Card value={String(continent.languages)} label={
                    <Text fontSize="1.5rem" fontWeight="semibold" color="Dark.Text" whiteSpace="nowrap">línguas</Text>
                } marginRight="2.625rem" />
                <Card value={String(cities.length)} label={
                    <Box whiteSpace="nowrap" position="relative" paddingRight="calc(1rem + 5px)">
                        <Text fontSize="1.5rem" fontWeight="semibold" color="Dark.Text">
                            cidades +100
                        </Text>
                        <Tooltip label='as 100 cidades mais visitadas do mundo'>
                            <CustomLabel style={{ position: "absolute", right: "0", bottom: "calc(50% - 0.5rem)" }}>
                                <FaInfoCircle
                                    size="1rem"
                                    color="Dark.info"
                                    opacity={0.5}
                                />
                            </CustomLabel>
                        </Tooltip>
                    </Box>
                } />
            </Flex>
        </Flex>
    )
}