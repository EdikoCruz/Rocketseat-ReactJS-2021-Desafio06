import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        Highlight: "#FFBA08",
        Dark: {
            Black: "#000000",
            Text: "#47585B",
            Info: "#999999",
        },
        Light: {
            White: "#FFFFFF",
            Text: "#F5F8FA",
            Info: "#DADADA",
        },
    },
    fonts: {
        body: 'Poppins',
        heading: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'Light.Text',
                color: 'Dark.Text'
            }
        }
    }
});