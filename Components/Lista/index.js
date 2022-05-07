import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";
import { colors } from "../../Styles/Colors";

/**
 * Componente lista para renderizar todos
 * @param handleModal Manejar la visibilidad del modal
 * @param todoList Listado de todos
 */

const Lista = ({ handleModal, todoList }) => {
  const renderTodo = ({ item }) => (
    <TodoItem onPress={handleModal} todo={item}></TodoItem>
  );

  return (
    <View style={styles.itemList}>
      {todoList.length !== 0 && (
        <FlatList
          data={todoList}
          keyExtractor={(todo) => todo.id}
          renderItem={renderTodo}
        />
      )}

      {todoList.length === 0 && (
        <Text style={styles.empyText}>No hay todos cargados...</Text>
      )}
    </View>
  );
};

export default Lista;

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: colors.turquoise,
    width: "85%",
    padding: 20,
    flex: 0.8,
    borderRadius: 10,
  },
  empyText: {
    textAlign: "center",
    fontSize: 15,
    backgroundColor: colors.black,
    padding: 15,
    color: colors.white,
    borderRadius: 15,
    fontWeight: "bold",
  },
});
