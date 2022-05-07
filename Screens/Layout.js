import { View, StyleSheet } from "react-native";
import { useState } from "react";
import Header from "../Components/Header";
import Lista from "../Components/Lista";
import CustomModal from "../Components/Modal";
import { colors } from "../Styles/Colors";
import HeadList from "../Components/HeadList";
const Layout = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoSelected, setTodoSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleAdd = (input) => {
    {
      setTodoList([...todoList, { id: Date.now(), todo: input }]);
    }
  };

  const handleModal = (todoSelected) => {
    setModalVisible(true);
    setTodoSelected(todoSelected);
  };

  const handleDelete = () => {
    const todosFiltrados = todoList.filter((item) => item !== todoSelected);
    setTodoList(todosFiltrados);
    setModalVisible(false);
  };

  const handleEdit = (text) => {
    const todoToEdit = todoList.find((todo) => todo.id === todoSelected.id);
    todoToEdit.todo = text;
    const todoAux = [];
    todoList.forEach((item) => {
      todoAux.push(item);
    });
    setTodoList(todoAux);
  };

  return (
    <View style={styles.container}>
      <HeadList />
      <Header handleAdd={handleAdd} />
      <Lista handleModal={handleModal} todoList={todoList} />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        todoSelected={todoSelected}
      />
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    backgroundColor: colors.blueGreen,
  },
});
