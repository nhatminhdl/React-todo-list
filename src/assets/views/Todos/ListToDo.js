import React, { Component } from "react";
import AddToDo from "./AddToDo";
import "./Listodo.scss";
import { toast } from "react-toastify";

class ListToDo extends Component {
  state = {
    ListToDos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "Fixing bugs" },
    ],

    EditToDo: {},
  };

  handleAddNewToDo = (todo) => {
    this.setState({
      ListToDos: [...this.state.ListToDos, todo],
    });

    toast.success("Thành công");
  };

  handleDeleteToDo = (todo) => {
    let currentTodos = this.state.ListToDos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    // console.log(currentTodos);
    this.setState({
      ListToDos: currentTodos,
    });

    toast.success(`Delete success ${todo.id}`, { autoClose: 3000 });
  };

  handleEditToDo = (todo) => {
    let {EditToDo, ListToDos} = this.state;
    let isEmptyObj = Object.keys(EditToDo).length === 0;

    //Click Save
    if (isEmptyObj === false && EditToDo.id === todo.id) {
      let ListodosCopy = [...ListToDos];
      console.log(ListodosCopy);
      
      let objIndex = ListodosCopy.findIndex((item => item.id === todo.id));
      
      ListodosCopy[objIndex].title = EditToDo.title;

      this.setState({
        ListToDos: ListodosCopy,
        EditToDo: {}
      })
      toast.success("Updated success")
      return;
    } 
      // Click Edit
    this.setState({
        EditToDo: todo,
    });
    
  };

  handleEditTitleToDo = (event) => {
    let editToDoCopy = { ...this.state.EditToDo };
    editToDoCopy.title = event.target.value;
    this.setState({
      EditToDo: editToDoCopy,
    });
  };
  render() {
    let { ListToDos, EditToDo } = this.state;

    let isEmptyObj = Object.keys(EditToDo).length === 0;
    // let { id, title } = ListToDos;
    return (
      <div className="list-todo-container">
        <AddToDo handleAddNewToDo={this.handleAddNewToDo} />
        <div className="list-todo-content">
          {ListToDos &&
            ListToDos.length > 0 &&
            ListToDos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.title}{" "}
                    </span>
                  ) : (
                    <>
                      {EditToDo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={EditToDo.title}
                            onChange={(event) =>
                              this.handleEditTitleToDo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}{" "}
                        </span>
                      )}
                    </>
                  )}

                  <button
                    onClick={() => this.handleEditToDo(item)}
                    className="btn-edit"
                  >
                    {isEmptyObj === false && EditToDo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => this.handleDeleteToDo(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListToDo;
