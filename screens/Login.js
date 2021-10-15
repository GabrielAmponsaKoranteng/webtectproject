
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Login() {
    return (
        <View style={styles.container}>
            <Image style={styles.iconImage} source={{ uri: require("../assets/bike2.png") }} />
            <Text style={styles.welcomeTxt}>
                Welcome to
            </Text>
            <Text style={styles.powerTxt}>
                Power Bike Shop
            </Text>
            <TouchableOpacity style={styles.clickableGmail}>
                <MaterialCommunityIcons name="gmail" size={24} color="rgb(256, 100, 10)" />
                <Text style={styles.gmailTxt}>Login with Gmail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickableApple}>
                <FontAwesome name="apple" size={24} color="white" />
                <Text style={styles.appleTxt}>Login with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notamemberTxt}>
                <Text style={styles.notaMember}>Not a member? {" "} <text style={{ color: 'rgb(256, 100, 10)', fontWeight: 'bold' }}>Signup</text> </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconImage: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginBottom: 50,
        transform: [{ rotate: "45deg" }]
    },

    welcomeTxt: {
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: 24
    },

    powerTxt: {
        color: "black",
        fontSize: 30,
        fontWeight: 600
    },

    clickableGmail: {
        backgroundColor: "#e3e3e3",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 60,
        borderRadius: 10,
        marginTop: 20
    },

    clickableApple: {
        backgroundColor: "black",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 60,
        borderRadius: 10,
        marginTop: 20
    },

    gmailTxt: {
        fontSize: 20,
        marginLeft: 15,
    },

    appleTxt: {
        fontSize: 17,
        color: "white",
        marginLeft: 15
    },
    notamemberTxt: {
        marginTop: 10,
        fontWeight: '500',
        color: 'grey',

    }
});