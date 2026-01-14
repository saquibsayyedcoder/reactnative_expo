import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import logo from "../assets/download (4).jpeg";
import { Ionicons } from "@expo/vector-icons";
import ThemeView from "../components/ThemeView";

const Index = () => {
  return (
    <ThemeView style={styles.container}>
      
      {/* Logo */}
      <Image source={logo} style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>Saquib Restaurant</Text>
      <Text style={styles.subtitle}>
        Delicious food, delivered with love 🍔❤️
      </Text>

      {/* Info Card */}
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Ionicons name="restaurant-outline" size={22} color="#E63946" />
          <Text style={styles.cardText}>Fresh & Tasty Food</Text>
        </View>

        <View style={styles.cardRow}>
          <Ionicons name="time-outline" size={22} color="#E63946" />
          <Text style={styles.cardText}>Fast Service</Text>
        </View>

        <View style={styles.cardRow}>
          <Ionicons name="heart-outline" size={22} color="#E63946" />
          <Text style={styles.cardText}>Loved by Customers</Text>
        </View>
      </View>

      {/* Buttons */}
      <Link href="/login" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/register" asChild>
        <TouchableOpacity style={styles.outlineButton}>
          <Text style={styles.outlineButtonText}>Register</Text>
        </TouchableOpacity>
      </Link>

    </ThemeView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1D3557",
  },
  subtitle: {
    fontSize: 14,
    color: "#6C757D",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cardText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#E63946",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  outlineButton: {
    borderWidth: 1.5,
    borderColor: "#E63946",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  outlineButtonText: {
    color: "#E63946",
    fontSize: 16,
    fontWeight: "600",
  },
});
