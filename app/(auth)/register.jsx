import React from "react";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

import ThemeView from "../../components/ThemeView";
import ThemeCard from "../../components/ThemeCard";
import ThemeLogo from "../../components/ThemeLogo";
import ThemeText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";

const Register = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemeLogo style={styles.logo}>FoodApp</ThemeLogo>

      <Spacer height={24} />

      <ThemeCard style={styles.card}>
        <ThemeText style={styles.title}>Create Account</ThemeText>
        <ThemeText style={styles.subtitle}>
          Register to continue
        </ThemeText>

        <Spacer height={30} />

        {/* Inputs will come here later */}

        <Spacer height={20} />

        <Link href="/login">
          <ThemeText style={styles.link}>
            Already have an account? Login
          </ThemeText>
        </Link>
      </ThemeCard>
    </ThemeView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    alignSelf: "center",
  },
  card: {
    marginTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    opacity: 0.7,
    marginTop: 6,
  },
  link: {
    textAlign: "center",
    fontWeight: "600",
  },
});
