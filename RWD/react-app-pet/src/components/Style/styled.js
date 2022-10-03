import styled from "styled-components";

export const DivHeader = styled.div`
    background-color:'#222';
    position: relative;
    width:100%;
    height: 80px;
    h1{text-align: center; background: #fff};` 


export const DivFooter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    display: flex;
    justidy-content: center;
    background-color: #222;
    height: 90px;`


export const DivLista = styled.div`
    width: 100%;
    min-height: 85vh;
    padding: 20px;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;`