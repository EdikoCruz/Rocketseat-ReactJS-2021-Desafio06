import Image from 'next/image'
import { Box, Flex, Text } from "@chakra-ui/react"

export function MainHero() {
    return (
        <Box w="100%" h="335px" background="linear-gradient(176deg, rgba(0,13,30,1) 0%, rgba(0,31,55,1) 40%, rgba(8,47,76,1) 100%)">
            <Flex h="100%" w="100%" maxW="1160px" p="1" mx="auto" justify="space-between" align="flex-end">
                <Flex h="100%" justify="center" align="flex-start" direction="column">
                    <Text fontSize="2.25rem" fontWeight="medium" color="Light.Text">
                        5 Continentes,<br />infinitas possibilidades.
                    </Text>
                    <Text marginTop="20px" fontSize="1.25rem" fontWeight="medium" color="Light.Info">
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Flex>

                <Box width={418} height={271} marginBottom="-35px" display={{
                    base: 'none',
                    md: 'block'
                }}>
                    <Image
                        style={{ transform: "rotate(3deg)" }}
                        src="/airplane.svg"
                        alt="Imagem de avião"
                        width={418}
                        height={271}
                        priority
                    />
                </Box>
            </Flex>
        </Box>
    )
}