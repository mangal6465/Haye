import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image as DisplayImage,
    SafeAreaView
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux'

import { Box, Header,CircleButton } from '../../components'
import { selectIcon } from '../../Tools/LoadLibrary';
import Carousel from 'react-native-banner-carousel';
import { Searchbar } from 'react-native-paper';
import { Images } from '../../utils'
// import CircleButton from "react-native-circle-floatmenu";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 150;
const images = [
    "https://reactjs.org/logo-og.png",
    "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
    "https://static.javatpoint.com/images/logo/jtp_logo.png"
];


const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const { colors } = useTheme();
    const [getLocalStorage, setLocalStorage] = React.useState(false);
    const MaterialIcons = selectIcon('MaterialIcons')


    function renderPage(image, index) {
        return (
            <View key={index}>
                <DisplayImage
                    style={{
                        //  width: BannerWidth, height: BannerHeight 
                        height: 100,
                    }}
                    resizeMode="contain"
                    source={{ uri: image }} />
            </View>
        );
    }

    function onChangeSearch() { }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>

                <Header
                    leftIconType={'Ionicons'}
                    LeftIcon={'menu-sharp'}
                    RightIconType={'Ionicons'}
                    RightIcon={'cart-sharp'}
                />

                <>
                    <View style={{ flex: 0.2, paddingLeft: 10, paddingRight: 10 }}>
                        <Searchbar
                            inputStyle={{ fontSize: 12 }}
                            style={{ borderRadius: 10, height: 40, backgroundColor: '#E9E9E9' }}
                            placeholder="Enter your location"
                            icon={Images.Location}
                            onChangeText={onChangeSearch}
                        />
                    </View>
                    <View style={{ marginTop: 10, height: 100 }}>
                        <Carousel
                            autoplay
                            autoplayTimeout={5000}
                            loop
                            index={0}
                            pageSize={BannerWidth}
                        >
                            {images.map((image, index) => renderPage(image, index))}
                        </Carousel>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-around', padding: 20, marginTop: 10, paddingTop: 0 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Box IconType={'MaterialCommunityIcons'} Icon={'bike'} value="Bike" onPress={() => { navigation.navigate('RaidingScreen') }} />
                            <Box IconType={'MaterialCommunityIcons'} Icon={'car'} value="Cab" onPress={() => { navigation.navigate('RaidingScreen') }} />
                            <Box IconType={'MaterialCommunityIcons'} Icon={'auto'} value="Auto" onPress={() => { navigation.navigate('RaidingScreen') }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-around' }}>
                            <Box IconType={'MaterialCommunityIcons'} Icon={'delivery'} value="Delivery" onPress={() => { navigation.navigate('RaidingScreen') }} />
                            <Box IconType={'MaterialCommunityIcons'} Icon={'errands'} value="Errands" onPress={() => { navigation.navigate('RaidingScreen') }} />
                            <Box IconType={'MaterialIcons'} Icon={'ProfessionalServices'} value="Professional Service" onPress={() => { navigation.navigate('RaidingScreen') }} />
                        </View>
                    </View>
                    <View style={{ height: 150, borderTopWidth: 2, borderTopColor: '#ccc', paddingTop: 20 }}>
                        <Text style={{ paddingLeft: 20 }}>Pick Your Order   </Text>
                        <Carousel
                            autoplay
                            autoplayTimeout={5000}
                            loop
                            index={0}
                            pageSize={BannerWidth}
                        >
                            {images.map((image, index) => renderPage(image, index))}
                        </Carousel>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', bottom: 20 }}>
                        {/* <DisplayImage
                            source={Images.Logo} resizeMode="contain" /> */}

                        <CircleButton 
                        buttonColor="rgba(0,0,0,1)" position="center">
                            <CircleButton.Item
                                position="absolute"
                                buttonColor="#000"
                                title="Perfil"
                                onPress={() => console.log("BtnPress")}
                            >
                                <Icon
                                    name="card-account-details"
                                    style={styles.circleButtonIcon}
                                />
                            </CircleButton.Item>
                            <CircleButton.Item
                                position="absolute"
                                buttonColor="#000"
                                title="Perfil"
                                onPress={() => console.log("BtnPress")}
                            >
                                <Icon name="bookmark-outline" style={styles.circleButtonIcon} />
                            </CircleButton.Item>
                            <CircleButton.Item
                                position="absolute"
                                buttonColor="#000"
                                title="Perfil"
                                onPress={() => console.log("BtnPress")}
                            >
                                <Icon
                                    name="briefcase-outline"
                                    style={styles.circleButtonIcon}
                                />
                            </CircleButton.Item>
                            <CircleButton.Item
                                position="absolute"
                                buttonColor="#000"
                                title="Perfil"
                                onPress={() => console.log("BtnPress")}
                            >
                                <Icon
                                    name="reply"
                                    style={styles.circleButtonIcon}
                                />
                            </CircleButton.Item>
                            <CircleButton.Item
                                position="absolute"
                                buttonColor="#000"
                                title="Perfil"
                                onPress={() => console.log("BtnPress")}
                            >
                                <Icon
                                    name="reply"
                                    style={styles.circleButtonIcon}
                                />
                            </CircleButton.Item>
                       
                        </CircleButton>
                    </View>
                </>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        // width: height_logo,
        // height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    btn_container: {
        flex: 1,
        backgroundColor: "#59a6eb",
        justifyContent: "center",
        width: "100%",
        elevation: 8,
        borderRadius: 5,
        margin: 1,
      },
      circleButtonIcon: {
        fontSize: 20,
        height: 22,
        color: "white",
      },
});

