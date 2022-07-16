import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import OnBoardingTitle from '../../components/OnBoardingTitle'
import OnBoardingPrompt from '../../components/OnBoardingPrompt'
import { TextInput } from 'react-native-gesture-handler'
import FullWidthButton from '../../components/FullWidthButton'

export default function UpdateInfoScreen() {
  return (
    <View style={styles.container}>
        <OnBoardingTitle/>
        <OnBoardingPrompt message="Complete your info"/>
        <Text style={styles.sectionPrompt}>Fill your profile</Text>
        <Text style={styles.inputTitle}>Zoom rate</Text>
        <TextInput style={styles.input} placeholder="Zoom rate" keyboardType='decimal-pad'/>
        <Text style={styles.inputTitle}>Chat rate</Text>
        <TextInput style={styles.input} placeholder="Chat rate" keyboardType='decimal-pad'/>
        <Text style={styles.inputTitle}>About me</Text>
        <TextInput style={styles.aboutInput} placeholder="About me" multiline={true}/>
        <View style={styles.buttonContainer}>
            <FullWidthButton text="Next"/>
        </View>
    </View>
  )
}