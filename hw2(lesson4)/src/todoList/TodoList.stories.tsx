import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import TodoList from "./TodoList";
import { action } from "@storybook/addon-actions";

export default {
  title: "hw2(lesson4) / TodoList",
  decorators: [withKnobs],
};

const todoData = [
  {
    id: 1,
    label: "Drink a lot of coffee",
    important: true,
    done: false,
  },
  {
    id: 2,
    label: "Make this sotries",
    important: false,
    done: false,
  },
  {
    id: 3,
    label: "Drink more coffee",
    important: false,
    done: false,
  },
];

export const todoList = () => [
  <TodoList
    toDos={todoData}
    onDeleted={action("click")}
    onToggleImportant={action("click")}
    onToggleDone={action("click")}
  />,
];
