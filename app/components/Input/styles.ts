import { StyleSheet, Dimensions } from "react-native";
import { themas } from "@/global/themes";
export const style = StyleSheet.create({
  boxInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: themas.Colors.lightGray,
    backgroundColor: themas.Colors.bgScreen,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    height: "100%",
    width: "80%",
    fontSize: 17,
    color: themas.Colors.semiBlack,
    paddingHorizontal: 10,
    paddingTop: 4,
    alignItems: "center",
    // justifyContent: "center",
    textAlign: "justify",
  },
  titleInput: {
    marginLeft: 5,
    color: themas.Colors.gray,
    marginTop: 20,
  },
  Button: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  Icon: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
  },
});
