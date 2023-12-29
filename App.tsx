import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { Home } from "./src/Home";
import theme from "./src/global/styles/theme";

const App: React.FunctionComponent = () => {
    return (
        <ThemeProvider theme={theme}>
            <Home />
            <StatusBar backgroundColor={"#000"} />
        </ThemeProvider>
    );
};

export default App;
