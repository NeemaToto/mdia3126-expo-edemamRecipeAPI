import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import TacoSalad from '../components/TacoSalad'

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
          <TacoSalad/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
});
