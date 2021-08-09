import React from 'react';
import { StyleSheet } from "react-native";

import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function AuthMenu() {
    return (
        <View style={styles.container}>
            
            <View style={styles.containerMain}>
            <Text style={styles.headerText}>Log in to Tiktok</Text>
            <Text style={styles.menuDescription}>Manage your account, check notifications, comment on videos, and more</Text>
            <TouchableOpacity style={styles.providerButton}>
                <Feather name="user" size={24} color="black" />
                    <Text style={styles.provider} > Use phone / email / username</Text>
                    <View />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.containerBottom}>
                <Text>Don’t have an account?  <Text style={styles.bottomButtonText}>Sign up</Text> </Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerMain: {
        padding: 30,
        flex: 1
    },
    containerBottom: {
        padding: 20,
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'flex-end',
    },
    menuDescription: {
        textAlign: 'center',
        lineHeight: 18,
        color: 'rgba(22,24,35,.5)',
        fontSize: 14,
        margin: 12
    },
    provider: {
        paddingRight: 20
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: "center",
        marginBottom: 25,
        color: '#161823'
    },
    providerButton: {
        borderColor: 'lightgray',
        borderStyle: 'solid',
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1
    },
        bottomButtonText: {
        fontWeight: 'bold',
        color: 'red'
    }
});
