import React from 'react'
import { Text, TextInput, Button, View } from "react-native"
import estilo from '../estilo'
import MegaNumLayout from './MegaNumLayout'

export default class Mega extends React.Component {
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros :[]
    }
    
    alterarQtdeNumeros = (qtde) => {
        this.setState({qtdeNumeros: +qtde})
    }

    gerarNumeroNaoContido = nums =>{
        const novo = parseInt(Math.random() * 60) + 1 // gerador de numero aleatorios
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo //includes(verifica em nums se novo ja foi sorteado retornando um true or false) se n retorna um novo numero
    }

    /* Formato Funcional
    gerarNumero = () =>{
        const numeros = Array(this.state.qtdeNumeros)
        .fill()
        .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
        .sort((a, b) => a - b)
        this.setState({numeros})
    }*/
    
    //Formato procedural (imperativo)
    gerarNumero = () =>{
    const {qtdeNumeros} = this.state
    const numeros = []

    for(let i = 0; i < qtdeNumeros; i++){
        const n = this.gerarNumeroNaoContido(numeros)
        numeros.push(n)
    }
    numeros.sort((a, b) => a - b)
    this.setState({numeros})
}
    exibirNumeros =() =>{
        const nums = this.state.numeros
        return nums.map(num =>{
            return <MegaNumLayout key = {num} num = {num} />
        })
    }

    render(){
        return (
           <>
            
            <Text style = {estilo.FontG}>
                Gerador Mega-Sena
            </Text>
            
            <View style = {{
                justifyContent:'center'
            }}>
            <TextInput 
            keyboardType={'numeric'}
            style={{borderBottomWidth:1}}
            placeholder = "Digite aqui"
            value = {`${this.state.qtdeNumeros}`}
            onChangeText={this.alterarQtdeNumeros}
            />
            </View>
            
            <View style = {{
                marginTop: 20
            }}>
            <Button 
                title='Gerar'
                onPress={this.gerarNumero}
                
            />
            </View>
            
            <View style = {{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
            }}>
            {this.exibirNumeros()}
            </View>
        </> 
        )
    }
}
