import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Contact = () => {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <Text style={styles.heading}>Contact Us</Text>
      <Text style={styles.subHeading}>
        We’d love to hear from you 🍽️
      </Text>

      {/* Contact Card */}
      <View style={styles.card}>
        
        <View style={styles.row}>
          <Ionicons name="location-outline" size={22} color="#E63946" />
          <Text style={styles.text}>
            123 Food Street, Chennai, India
          </Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="call-outline" size={22} color="#E63946" />
          <Text style={styles.text}>+91 98765 43210</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="mail-outline" size={22} color="#E63946" />
          <Text style={styles.text}>support@myrestaurant.com</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="time-outline" size={22} color="#E63946" />
          <Text style={styles.text}>10:00 AM – 11:00 PM</Text>
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

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    padding: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1D3557",
    textAlign: "center",
  },
  subHeading: {
    fontSize: 14,
    color: "#6C757D",
    textAlign: "center",
    marginBottom: 25,
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginLeft: 12,
    color: "#333",
  },
  button: {
    marginTop: 30,
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
