import React from "react";
import { Pressable, ScrollView, View, Text } from "react-native";
import { styles } from "./App";
export const List = () => {
  return (
    <ScrollView>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Do nothing</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>Go to walk</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>clean the house</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};
