import React from 'react'
import ListaDePets from './components/ListaDePets';
import { DivApp, DivFooter, DivHeader, DivHome } from './components/Style/styled';


export default function App() {
    return (

        <DivHome>
            <DivHeader />

            <DivApp />
            <ListaDePets />
            <DivFooter />
        </DivHome>

    );
}