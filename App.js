import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [total, setTotal] = useState();
  const [result, setResult] = useState([]);
  //id laitettu mukaan itselleni muistiin
  const add = () => {
    const sum = +value1 + +value2;
    setResult([
      ...result,
      { key: value1 + " + " + value2 + " = " + sum, id: 1 },
    ]);
    setTotal(sum);
    setValue1("");
    setValue2("");
  };
  const subtract = () => {
    const sum = +value1 - +value2;
    setResult([
      ...result,
      { key: value1 + " - " + value2 + " = " + sum, id: 2 },
    ]);
    setTotal(sum);
    setValue1("");
    setValue2("");
  };
  console.log(...result); //loggeri muistissa
  return (
    <View style={styles.container}>
      <Text style={{ fontweight: "bold" }}>Result: {total} </Text>

      <View style={styles.Text}>
        <TextInput
          value={value1}
          onChangeText={(text) => setValue1(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.Text}>
        <TextInput
          value={value2}
          onChangeText={(text) => setValue2(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.ButtonView}>
        <TouchableOpacity style={styles.Button} onPress={add}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={subtract}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <Text>History:</Text>
        <FlatList
          data={result}
          renderItem={({ item, index }) => <Text key={index}>{item.key}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    borderWidth: 2,
    borderColor: "gray",
    width: "50%",
    margin: 5,
  },
  ButtonView: {
    marginTop: 4,
    flexDirection: "row",
  },

  Button: {
    height: 40,
    width: 40,
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "gray",
    borderWidth: 1,
  },
  list: {
    marginTop: 20,
    width: "40%",
    alignItems: "center",
  },
});
