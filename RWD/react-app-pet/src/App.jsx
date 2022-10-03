import React from 'react'
import ListaDePets from './components/ListaDePets';
import { DivFooter, DivHeader, DivHome } from './components/Style/styled';


export default function App() {
    return (

        <DivHome>
            <DivHeader />

            <ListaDePets />
            <DivFooter />
        </DivHome>

    );
}