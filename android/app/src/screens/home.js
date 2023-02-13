import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import Icons from "react-native-vector-icons/Ionicons"
import Iconss from "react-native-vector-icons/MaterialIcons"
import Iconsss from "react-native-vector-icons/Entypo"

const Home = () => {



    return <>
        <ScrollView>
            <View>
                <View style={styles.navhead}>

                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Iconsss name="flower" size={50} color={"#0D986A"} style={{ paddingTop: 10, paddingLeft: 10 }} />
                        <Text style={styles.navtext}>plantify</Text>
                    </View>
                </View>
                <Image style={styles.imgsty} source={require("./image19.png")} />

                <View    >
                    <View style={styles.shadow}>
                        <Icons name="search" color={"black"} size={22} style={{ paddingTop: 14 }} />
                        <TextInput placeholder="Search" style={{ paddingLeft: 5 }} />

                    </View>
                </View>


                <View style={styles.navigation}>
                    <View  >
                        <Text style={[styles.lines, { color: "green" }]} >top pick</Text>
                    </View>
                    <View >
                        <Text style={styles.lines} >indoor</Text>
                    </View>
                    <View >
                        <Text style={styles.lines}> outdoor</Text>
                    </View>
                    <View >
                        <Text style={styles.lines}>seeds</Text>
                    </View>

                </View>



                <View style={[styles.card, { backgroundColor: "#9CE5CB", }]}>
                    <Image style={{ position: "absolute", top: 7, right: 2, width: 150, height: 200 }} source={require("./pot.png")} />

                    <Text style={styles.texthead}> Air purifier</Text>
                    <Text style={styles.textmain} >pepromia</Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.text} >$400</Text>
                        <View style={{ display: "flex", flexDirection: "row", marginTop: 32, marginLeft: 24 }}>
                            <Iconss name="favorite" color={"black"} size={30} />
                            <Icons color={"black"} style={{ marginLeft: 10 }} name="cart-sharp" size={30} />
                        </View>
                    </View>
                </View>



                <View style={[styles.card, { backgroundColor: "#FFE899" }]}>
                    <Image style={{ position: "absolute", top: 7, right: 0, width: 150, height: 200 }} source={require("./sage.png")} />

                    <Text style={styles.texthead}> Air purifier</Text>
                    <Text style={[styles.textmain, { fontSize: 25 }]} >watermelon</Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.text} >$300</Text>
                        <View style={{ display: "flex", flexDirection: "row", marginTop: 32, marginLeft: 24 }}>
                            <Iconss name="favorite" color={"black"} size={30} />
                            <Icons color={"black"} style={{ marginLeft: 10 }} name="cart-sharp" size={30} />
                        </View>
                    </View>
                </View>

                <View style={[styles.card, { backgroundColor: "#56D1A7", }]}>
                    <Image style={{ position: "absolute", top: 7, right: 2, width: 150, height: 200 }} source={require("./pot2.png")} />

                    <Text style={styles.texthead}> Air purifier</Text>
                    <Text style={[styles.textmain, { fontSize: 25 }]}  >croton petra</Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.text} >$200</Text>
                        <View style={{ display: "flex", flexDirection: "row", marginTop: 32, marginLeft: 24 }}>
                            <Iconss name="favorite" color={"black"} size={30} />
                            <Icons color={"black"} style={{ marginLeft: 10 }} name="cart-sharp" size={30} />
                        </View>
                    </View>
                </View>

                <View style={[styles.card, { backgroundColor: "#B2E28D", }]}>
                    <Image style={{ position: "absolute", top: 7, right: 2, width: 150, height: 200 }} source={require("./Layer8.png")} />

                    <Text style={styles.texthead}> Air purifier</Text>
                    <Text style={[styles.textmain, { fontSize: 25 }]}  >bird's nest fern</Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.text} >$100</Text>
                        <View style={{ display: "flex", flexDirection: "row", marginTop: 32, marginLeft: 24 }}>
                            <Iconss name="favorite" color={"black"} size={30} />
                            <Icons color={"black"} style={{ marginLeft: 10 }} name="cart-sharp" size={30} />
                        </View>
                    </View>
                </View>

                <View style={[styles.card, { backgroundColor: "#F5EDA8", }]}>
                    <Image style={{ position: "absolute", top: 7, right: 2, width: 150, height: 200 }} source={require("./Layer27.png")} />

                    <Text style={styles.texthead}> Air purifier</Text>
                    <Text style={styles.textmain} >aloe vera</Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.text} >$50</Text>
                        <View style={{ display: "flex", flexDirection: "row", marginTop: 32, marginLeft: 24 }}>
                            <Iconss name="favorite" color={"black"} size={30} />
                            <Icons color={"black"} style={{ marginLeft: 10 }} name="cart-sharp" size={30} />
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footext}>plant a life live amongst living spread the joy !</Text>
                </View>

            </View>

        </ScrollView>
    </>
}

export default Home;

const styles = StyleSheet.create({
    sucessfully: {

        color: "blue",
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold"

    },
    imgsty: {
        width: "100%",
        height: "10%"
    },

    shadow: {
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderRadius: 20,
        height: 50,
        margin: 10,
        paddingLeft: 20,
        display: "flex",
        flexDirection: "row"


    },
    navigation: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8
    },
    card: {

        height: 220,
        paddingTop: 50,
        paddingLeft: 10,
        position: "relative",
        margin: 10,
        borderRadius: 25
    },
    textmain: {
        color: "#002140",
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold",


    }, texthead: {
        color: "#002140",
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "bold",

        marginBottom: 5
    }, text: {
        color: "#002140",
        fontSize: 25,
        marginTop: 28
        , fontWeight: "bold"
    }
    , lines: {
        color: "#002140",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "capitalize"

    },
     footer: {
        borderTopWidth: 2.5,
        height: 300,
        marginTop: 30 ,
            borderColor:"#0D986A"

    }, footext: {
        color: "#002140",
        fontSize: 25,
        textAlign: "center",
        padding: 10,
        textTransform: "capitalize",
        color:"#0D986A"
    },
    navhead: {
        height: 74,
        borderBottomWidth: 2,
       borderColor:"#0D986A"



    },
    navtext: {

        // position: "absolute",
        paddingTop: 25,
        paddingLeft: 25,
        fontSize: 25,
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 22,
        display: "flex",
        alignIitems: "center",
        textAlign: "center",
        letterSpacing: 0.1,
        textTransform: "uppercase",
        color: "#002140",
    }

})