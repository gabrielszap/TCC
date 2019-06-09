import React from 'react'


export default function(capacidadeMaxima, capacidadeAtual){
        if(capacidadeAtual > ((2/3) * capacidadeMaxima)){
            return 'green'
        }
        if(capacidadeAtual <= ((2/3) * capacidadeMaxima) && capacidadeAtual > ((1/3) * capacidadeMaxima)){
            return 'yellow'
        }
        if(capacidadeAtual <= ((1/3) * capacidadeMaxima)){
            return 'red'
        }
}