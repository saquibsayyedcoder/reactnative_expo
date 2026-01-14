import React from "react";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

import ThemeView from "../../components/ThemeView";
import ThemeCard from "../../components/ThemeCard";
import ThemeLogo from "../../components/ThemeLogo";
import ThemeText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";

const Login = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemeLogo style={styles.logo}>FoodApp</ThemeLogo>

      <Spacer height={24} />

      <ThemeCard style={styles.card}>
        <ThemeText style={styles.title}>Welcome Back</ThemeText>
        <ThemeText style={styles.subtitle}>
          Login to your account
        </ThemeText>

        <Spacer height={30} />

        {/* Inputs will come here later */}

        <ThemeText style={styles.helperText}>
          Forgot password?
        </ThemeText>

        <Spacer height={20} />

        <Link href="/register">
          <ThemeText style={styles.link}>
            Don’t have an account? Register
          </ThemeText>
        </Link>
      </ThemeCard>
    </ThemeView>
  );
};

export default Login;

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
  helperText: {
    textAlign: "right",
    fontSize: 13,
    opacity: 0.7,
  },
  link: {
    textAlign: "center",
    fontWeight: "600",
  },
});
