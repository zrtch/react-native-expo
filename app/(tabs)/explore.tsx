import React from 'react'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('')
  const [number, onChangeNumber] = React.useState('')

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Type here!"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default TextInputExample
