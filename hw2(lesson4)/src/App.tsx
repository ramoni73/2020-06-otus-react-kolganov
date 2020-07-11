import React, {Component} from "react";
import Header from "./header/Header";
import TodoList from "./todoList/TodoList";
import AddItemForm from "./addItemForm/AddItemForm";

interface AppProps {

}

interface AppState {
    todoData: Array<TodoObj>
}

export type TodoObj = {
    id: number,
    label: string,
    important: boolean,
    done: boolean
}

class App extends Component<AppProps, AppState>{
    constructor(props: AppProps) {
        super(props);

        this.state = {
            todoData: [
                this.createTodoItem("Drink coffie"),
                this.createTodoItem("Make awsome app"),
                this.createTodoItem("Have a lunch")
            ]
        };
    }

    maxId = 100

    createTodoItem(label: string): TodoObj {
        return {
            id: this.maxId++,
            label: label,
            important: false,
            done: false
        };
    }

    addItem = (text: string) => {
        this.setState(({ todoData }) => {
            const newItem = this.createTodoItem(text);
            const newArray = [...todoData, newItem];

            return {
                todoData: newArray
            };
        });
    };

    deleteItem = (id: number) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => el.id === id);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArray = [...before, ...after];

            return {
                todoData: newArray
            };
        });
    };

    toggleProperty(arr: Array<TodoObj>, id: number, prop: keyof TodoObj) {
        const idx: number = arr.findIndex((el:TodoObj) => el.id === id);
        const oldItem: TodoObj = arr[idx];
        const newItem: TodoObj = { ...oldItem, [prop]: !oldItem[prop] };

        const before = arr.slice(0, idx);
        const after = arr.slice(idx + 1);
        return [...before, newItem, ...after];
    }

    onToggleImportant = (id: number) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, "important")
            };
        });
    };

    onToggleDone = (id:number) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, "done")
            };
        });
    };

    render() {
        const {todoData} = this.state;
        return(
            <>
                <Header />
                <TodoList
                    toDos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItemForm onAdd={this.addItem} />
            </>
        )
    }
}

export default App