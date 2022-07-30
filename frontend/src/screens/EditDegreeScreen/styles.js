import { StyleSheet } from "react-native";

export default StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        margin: 25,
        marginBottom: 0
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 29,
        alignSelf: "center",
    },

    fieldTitle: {
        fontSize: 16,
        marginBottom: 5,
        color: "#919090",
        fontWeight: "500"
    },

    field: {
        marginBottom: 20,
        paddingBottom: 5,
        textAlignVertical: 'bottom',
        alignItems:"flex-start",
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: "#919090"
    },

    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "103%",
    },
})