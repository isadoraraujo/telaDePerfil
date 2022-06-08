import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, Linking } from 'react-native';

const colorGitHub = '#010409'
const colorFontGitHub = '#C9D1D9'
const colorFontDarkGitHub = '#4F565E'
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/93020656?v=4'
const urlToMyGitHub = 'https://github.com/isadoraraujo'

const App = () => {

  const handlePressGoToGitHub = async () => {
    const res = await Linking.canOpenURL(urlToMyGitHub)
    if (res) {
      await Linking.openURL(urlToMyGitHub)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle='light-content' />
      <View style={styles.content}>
        <Image
          accessibilityLabel='Isadora sentada em frente ao notebook sorrindo'
          style={styles.avatar}
          source={{ uri: imageProfileGitHub }}
        />
        <Text
          accessibilityLabel='Nome Isadora Araújo'
          style={[styles.defaultText, styles.name]}>
          Isadora Araújo
        </Text>
        <Text
          accessibilityLabel='Nickname isadoraraujo'
          style={[styles.defaultText, styles.nickname]}>
          isadoraraujo
        </Text>
        <Text
          accessibilityLabel='Descrição Beginner in the world of programming, focused on studies on JS (React and React Native), HTML and CSS.'
          style={[styles.defaultText, styles.description]}>
          Beginner in the world of programming, focused on studies on JS (React and React Native), HTML and CSS.
        </Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={styles.button}>
            <Text style={[styles.defaultText, styles.textButton]}>Open on GitHub</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGitHub,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGitHub,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  nickname: {
    fontSize: 18,
    color: colorFontDarkGitHub,
  },
  decription: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 20,
    backgroundColor: colorFontDarkGitHub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 14,
  }
});
