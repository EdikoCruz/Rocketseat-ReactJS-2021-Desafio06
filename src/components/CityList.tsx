import { Flex, Spacer, Image, Text } from "@chakra-ui/react"


function Card() {
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
                src="https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80"
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
                    <Text marginBottom="0.75rem" fontFamily="Barlow" fontSize="1.25rem" fontWeight="semibold" color="Dark.Text">Londres</Text>
                    <Text fontFamily="Barlow" fontSize="1rem" fontWeight="400" color="Dark.Text">Londres</Text>
                </Flex>
                <Spacer />
                <Image
                    src="https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80"
                    alt="Bandeira do país"
                    width={30}
                    height={30}
                    borderRadius={50}
                />
            </Flex>
        </Flex>
    )
}

export function CityList() {
    return (
        <Flex
            w="100%" maxW="1160px" p="1" mx="auto"
            justify="flex-start" align="flex-start" direction="column"
            marginBottom="2.1875rem"
        >
            <Text marginBottom="2.5rem" fontSize="2.25rem" color="Dark.Text">Cidades +100</Text>

            <Flex w="100%" justify="space-between" align="center" direction="row" wrap="wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Flex>
        </Flex>
    )
}