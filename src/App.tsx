import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Main} from "./pages/Main";
import {RouteName} from "./utils/constants/routes";
import {Providers} from "./providers/Providers";

function App() {
    return (
        <Providers>
            <BrowserRouter>
                <Routes>
                    <Route path={RouteName.Main} element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </Providers>
    );
}

export default App;
