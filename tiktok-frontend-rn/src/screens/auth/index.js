import React from 'react'
import { StyleSheet, View } from 'react-native';
import AuthMenu from '../../components/auth/menu'

export default function AuthScreen() {
    return (
        <View style={styles.container}>
            <AuthMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1
    },
});

