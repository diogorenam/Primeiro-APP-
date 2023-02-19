import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultIMC from './ResultImc';

export default function Form() {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder='Altura Ex. 1.75'
                    keyboardType='numeric'
                />

                <Text>Peso</Text>
                <TextInput
                    placeholder='Pesp Ex. 80'
                    keyboardType='numeric'
                />

                <Button title="Calcular IMC"/>

                <View>
                <ResultIMC
                ResultIMC={ResultIMC}
                MessageResultIMC={MessageResultIMC}
                />
                </View>
            </View>
        </View>
    )
}
