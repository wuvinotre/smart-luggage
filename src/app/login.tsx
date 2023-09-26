import { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { COLORS } from "../assets";
import { useLoginStore } from "../store/login/store";

const { width, height } = Dimensions.get("window");

const initialValues = {
  email: __DEV__ ? (process.env.EXPO_PUBLIC_LOGIN as string) : "",
  password: __DEV__ ? (process.env.EXPO_PUBLIC_PASSWORD as string) : "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Digite um email válido"),
  password: yup.string().min(6).required("Digite uma senha válida"),
});

const Login = () => {
  const { isLoggedIn, login } = useLoginStore((state) => state);

  console.log("isLoggedIn", isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/home");
    }
  }, [isLoggedIn]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.content}>
        <StatusBar style="light" />
        <Text style={styles.title}>Login</Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            login(values);
          }}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <>
              <TextInput
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                style={styles.input}
              />
              {touched.email && errors.email && (
                <Text style={{ fontSize: 12, color: COLORS.red }}>
                  {errors.email}
                </Text>
              )}
              <TextInput
                placeholder="Senha"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                style={styles.input}
              />
              {touched.password && errors.password && (
                <Text style={{ fontSize: 12, color: COLORS.red }}>
                  {errors.password}
                </Text>
              )}
              <TouchableOpacity
                activeOpacity={0.3}
                style={styles.button}
                onPress={handleSubmit as any}
              >
                <Text style={styles.title}>Entrar</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: width,
    height: height,
    justifyContent: "center",
    backgroundColor: COLORS.lightBlue,
  },
  content: {
    paddingHorizontal: "10%",
    paddingVertical: "30%",
  },
  title: {
    fontSize: 32,
    color: COLORS.white,
    fontFamily: "Roboto-Bold",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.darkBlue,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    justifyContent: "center",
    alignItems: "center",
  },
});
