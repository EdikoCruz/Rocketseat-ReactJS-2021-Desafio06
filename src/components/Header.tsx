import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Box, Flex } from "@chakra-ui/react"
import { FaChevronLeft } from "react-icons/fa";

export function Header() {
    const router = useRouter()
    return (
        <Flex
            w="100%"
            maxW="1160px"
            mx="auto"
            padding={2}
            position="relative"
            justify="center"
            align="center"
        >
            {
                router.asPath !== "/"
                    ? <Box position="absolute" left="0">
                        <Link href="/">
                            <FaChevronLeft size={32} color='Dark.Text' />
                        </Link>
                    </Box>
                    : <></>
            }
            <Image
                src="/logo.svg"
                alt="Logo da World Trip"
                width={185}
                height={46}
                priority
            />
        </Flex>
    )
}