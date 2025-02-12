import { extendTheme, ThemeConfig } from "@chakra-ui/react";

//Note: chakra ui store the color mode value in localstorage, we need to clear the initial value after change.

//chakra ui color mode reference:
//Color mode: https://v2.chakra-ui.com/docs/styled-system/color-mode
//Custom theme: https://v2.chakra-ui.com/getting-started/vite-guide#3-customizing-theme-optional

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

const theme = extendTheme({config})

export default theme