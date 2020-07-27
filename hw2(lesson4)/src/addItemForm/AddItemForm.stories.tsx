import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import AddItemForm from "./AddItemForm";
import { action } from "@storybook/addon-actions";

export default {
  title: "hw2(lesson4) / AddItemForm",
  decorators: [withKnobs],
};

export const emptyForm = () => [<AddItemForm onAdd={action("click")} />];
