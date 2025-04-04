import React,{useEffect} from "react";
import { Text } from "react-native-web";

import { carregaProdutores } from "../../../servicos/carregaDados";

export default function Produtores(){
       useEffect(() =>{
       const retorno = carregaProdutores();
       console.log(retorno);
}, []);




    return <text>Produtores</text>
}