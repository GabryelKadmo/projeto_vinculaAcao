import { StyleSheet, Dimensions } from "react-native";
import { themas } from "@/global/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxTop: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMid: {
    height: Dimensions.get("window").height / 2.5,
    width: "100%",
    paddingHorizontal: 37,
    alignItems: "center", // Adicionado para centralizar horizontalmente
    justifyContent: "center", // Adicionado para centralizar verticalmente
  },
  boxBottom: {
    height: Dimensions.get("window").height / 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boxInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: themas.Colors.lightGray,
    backgroundColor: themas.Colors.bgScreen,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  logo: {
    width: 140,
    height: 140,
    marginTop: 40,
  },
  text: {
    marginTop: 35,
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    height: "100%",
    width: "100%",
    borderRadius: 40,
    paddingHorizontal: 20,
  },
  titleInput: {
    color: themas.Colors.gray,
    marginTop: 20,
    marginBottom: 5, 
    textAlign: "left",
  },
  textBottom: {
    fontSize: 16,
    color: themas.Colors.gray,
    marginTop: 10,
  },
  textBottomCreate: {
    fontSize: 16,
    color: themas.Colors.primary,
  },
});
