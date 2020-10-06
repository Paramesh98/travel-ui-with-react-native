import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const image = { uri: require("../images/1.jpg") };
  const recentImage = { uri: require("../images/7.jpg") };
  const [gallery, setGallery] = useState([
    {
      image: { uri: require("../images/2.jpg"), title: "SwizerLand", key: "1" },
    },
    { image: { uri: require("../images/3.jpg"), title: "Asia", key: "2" } },
    { image: { uri: require("../images/4.jpg"), title: "Pris", key: "3" } },
    { image: { uri: require("../images/5.jpg"), title: "Ooty", key: "4" } },
    { image: { uri: require("../images/6.jpg"), title: "Bali", key: "5" } },
  ]);

  const goToPost = () => {
    navigation.navigate("Post");
  };
  return (
    <View style={{ flexGrow: 1, height: "100%", paddingBottom: 60 }}>
      <View>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: 230 }}
          imageStyle={{ borderBottomRightRadius: 60 }}
        >
          <View style={styles.DarkOverlay}></View>
          <View style={styles.SearchContainer}>
            <Text style={styles.UserGreet}>Hi, Krishna</Text>
            <Text style={styles.UserText}>
              {" "}
              Where would you like to eat today
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.SearchBox}
              placeholder="Enter Destination"
              placeholderTextColor="#666"
            ></TextInput>
            <Feather
              name="search"
              color="#666"
              size={22}
              style={{ position: "absolute", top: 26, right: 60 }}
            />
          </View>
          <Feather
            name="menu"
            color="#fff"
            size={22}
            style={{ position: "absolute", top: 30, left: 30 }}
          />
          <Feather
            name="bell"
            color="#fff"
            size={22}
            style={{ position: "absolute", top: 30, right: 30 }}
          />
        </ImageBackground>
      </View>
      <ScrollView>
        <View style={{ paddingVertical: 20, padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Top Trending</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity onPress={goToPost}>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        marginRight: 14,
                        height: 250,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.ImageOverlay}></View>
                    <Feather
                      name="map-pin"
                      size={16}
                      color={"#fff"}
                      style={styles.ImageLocationIcons}
                    />
                    <Text style={styles.ImageText}>{item.image.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Recently Viewed
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#ff6200" }}
            >
              View All
            </Text>
          </View>
          <Image
            source={recentImage}
            style={{
              width: "94%",
              alignSelf: "center",
              height: 250,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              padding: 16,
              marginHorizontal: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather
                size={22}
                color="#fff"
                style={{ position: "relative", marginRight: 10, top: 4 }}
                name="map-pin"
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "#fff",
                  fontWeight: "normal",
                  marginBottom: 10,
                }}
              >
                Venice
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "normal",
                color: "#fff",
                marginBottom: 10,
                opacity: 0.9,
                marginLeft: 16,
              }}
            >
              Venice the capital for northeren Italy
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  DarkOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    height: 230,
    backgroundColor: "#000",
    opacity: 0.5,
    borderBottomRightRadius: 60,
  },
  SearchContainer: {
    paddingTop: 90,
    paddingLeft: 16,
  },
  UserGreet: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
  UserText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#fff",
  },
  SearchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },
  ImageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.5,
  },
  ImageLocationIcons: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  ImageText: {
    position: "absolute",
    marginTop: 4,
    fontSize: 14,
    color: "white",
    left: 30,
    bottom: 10,
  },
});

export default Home;
