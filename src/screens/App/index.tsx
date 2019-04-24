import {createMemoryHistory} from "history";
import * as React from "react";
import {Platform, StyleSheet, Text, View} from "react-native";
import {Router} from "react-router";
import TestRouter from "../testrouter";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center"
  }
});

const history = createMemoryHistory();

export const App = () => {
  const instructions = Platform.select({
    android:
      "Double tap R on your keyboard to reload,\n" +
      "Shake or press menu button for dev menu",
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu"
  });

  return (
      <View style={styles.container}>
        <Router history={history}>
          <TestRouter history={history} />
        </Router>
        <Text>{instructions}</Text>
      </View>

  );
};
