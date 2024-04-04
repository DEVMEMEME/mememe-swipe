import { Text, View, StyleSheet, TextInput } from "react-native";
import { useForm, Resolver } from "react-hook-form";
import Constants from "expo-constants";
import Button from "@components/Button";

type FormValues = {
  user: string;
  password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.user ? values : {},
    errors: !values.user
      ? {
          user: {
            type: "required",
            message: "This is required.",
          },
          password: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const Login = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = async (data: any) => {
    console.log("Getting Whitelist status for: ", data);
    // Check if data is valid
    // Submit to API for validation
    // Store in State if valid
  };

  return (
    <View style={styles.container}>
      <View className="flex-1 items-center justify-center bg-white">
      <Text style={styles.title}>Welcome to MEMEME</Text>
      <Text className="text-md font-bold">If you are whitelisted please login:</Text>
        </View>
      <Text style={styles.label}>Wallet Address</Text>
      <TextInput
        placeholder="Whitelisted Wallet Address"
        placeholderTextColor= "#475569"
        {...register("user")}
        style={[styles.input]}
        onChangeText={(text) => setValue("user", text)}
      />
      {errors.user && <Text style={{ color: "red" }}>{errors.user.message}</Text>}
      {/* <Text style={styles.label}>Contraseña</Text> */}
      {/* <TextInput
        {...register("password")}
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => setValue("password", text)}
      />
      {errors.password && <Text style={{ color: "red" }}>{errors.password.message}</Text>} */}

      <View style={styles.buttonContainer}>
        <Button onPress={handleSubmit(onSubmit)} title="Login"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "black",
    margin: 20,
    marginLeft: 0,
  },
  buttonContainer: {
    paddingVertical: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    // backgroundColor:"black"
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
});

export default Login;
