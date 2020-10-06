import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Post = ({ navigation }) => {
  const image = { uri: require("../images/8.jpg") };

  const [gallery, setGallery] = useState([
    {
      image: { uri: require("../images/2.jpg"), title: "SwizerLand", key: "1" },
    },
    { image: { uri: require("../images/3.jpg"), title: "Asia", key: "2" } },
    { image: { uri: require("../images/4.jpg"), title: "Pris", key: "3" } },
    { image: { uri: require("../images/5.jpg"), title: "Ooty", key: "4" } },
    { image: { uri: require("../images/6.jpg"), title: "Bali", key: "5" } },
  ]);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}
      >
        <Text style={styles.TagLine}>Discover in Swizerland</Text>
        <Text style={styles.PlaceName}>
          Explore the senetic beauty in Swizerland
        </Text>
        <TouchableOpacity
          onPress={goBack}
          style={{
            position: "absolute",
            left: 20,
            top: 40,
            backgroundColor: "#ff6200",
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather size={26} name="arrow-left" color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 20,
            top: 40,
            backgroundColor: "#ff6200",
            padding: 10,
            borderRadius: 40,
          }}
        >
          <Feather size={26} name="heart" color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity style={styles.BookticketButton}>
        <Text style={styles.BookticketText}>Book Now</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={{ padding: 14, fontSize: 20, fontWeight: "bold" }}>
          About the place
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 14,
            fontWeight: "normal",
            opacity: 0.5,
            justifyContent: "flex-start",
            textAlign: "justify",
            lineHeight: 26,
          }}
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            fontSize: 14,
            fontWeight: "normal",
            opacity: 0.5,
            justifyContent: "flex-start",
            textAlign: "justify",
            lineHeight: 26,
          }}
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Text>

        <View>
          <Text style={{ padding: 14, fontSize: 14, fontWeight: "bold" }}>
            Suggested Place
          </Text>
          <FlatList
            data={gallery}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingBottom: 40 }}>
                  <View>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        height: 150,
                        marginHorizontal: 10,
                        borderRadius: 10,
                      }}
                    />
                    <Feather
                      name="map-pin"
                      size={16}
                      color="white"
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        position: "absolute",
                        left: 10,
                        bottom: 10,
                      }}
                    ></Feather>
                    <Text
                      style={{
                        marginHorizontal: 14,
                        marginTop: 4,
                        marginLeft: 30,
                        position: "absolute",
                        left: 10,
                        bottom: 10,
                        fontSize: 14,
                        color: "white",
                      }}
                    >
                      {" "}
                      {item.image.title}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
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
  image: {
    height: 380,
    justifyContent: "flex-end",
    backgroundColor: "transparent",
  },
  TagLine: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginVertical: 4,
  },
  PlaceName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginBottom: 30,
  },
  BookticketButton: {
    position: "absolute",
    right: 12,
    top: 350,
    padding: 16,
    backgroundColor: "#ff6200",
    borderRadius: 40,
  },
  BookticketText: {
    color: "white",
    fontSize: 14,
  },
});

export default Post;
