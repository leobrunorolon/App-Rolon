import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../Styles/Colors";

const CustomModal = ({
  modalVisible,
  setModalVisible,
  handleEdit,
  todoSelected,
  handleDelete,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <View style={styles.editContainer}>
            <TextInput
              style={styles.input}
              onChangeText={handleEdit}
              value={todoSelected.todo}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cambiar</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.button} onPress={handleDelete}>
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    height: 150,
    width: 300,
    backgroundColor: colors.blueGreen,
    borderRadius: 10,
    justifyContent: "center",
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    width: 200,
    marginRight: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    height: 35,
    backgroundColor: colors.turquoise,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    margin: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.orchid,
  },
  editContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  editText: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 5,
  },
});
