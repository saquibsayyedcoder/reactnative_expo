import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const About = () => {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.subHeading}>
        Serving love & flavors since 2015 ❤️
      </Text>

      {/* Image / Banner */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1555992336-cbfcb6c0f7d9",
        }}
        style={styles.image}
      />

      {/* Content Card */}
      <View style={styles.card}>
        <Text style={styles.description}>
          Welcome to <Text style={styles.bold}>My Restaurant</Text>, where taste
          meets tradition. We believe food is not just about eating, but about
          creating memories.
        </Text>

        <View style={styles.featureRow}>
          <Ionicons name="restaurant-outline" size={22} color="#E63946" />
          <Text style={styles.featureText}>Fresh & Quality Ingredients</Text>
        </View>

        <View style={styles.featureRow}>
          <Ionicons name="heart-outline" size={22} color="#E63946" />
          <Text style={styles.featureText}>Made with Love & Passion</Text>
        </View>

        <View style={styles.featureRow}>
          <Ionicons name="people-outline" size={22} color="#E63946" />
          <Text style={styles.featureText}>Friendly & Hygienic Service</Text>
        </View>
      </View>

      {/* Back Button */}
      <Link href="/" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1D3557",
    textAlign: "center",
    marginTop: 10,
  },
  subHeading: {
    fontSize: 14,
    color: "#6C757D",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 16,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  description: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    marginBottom: 15,
  },
  bold: {
    fontWeight: "bold",
    color: "#1D3557",
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  featureText: {
    marginLeft: 12,
    fontSize: 15,
    color: "#444",
  },
  button: {
    marginTop: 25,
    backgroundColor: "#E63946",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
