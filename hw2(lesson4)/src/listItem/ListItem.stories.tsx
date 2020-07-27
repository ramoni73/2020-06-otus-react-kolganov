import React from "react";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";
import ListItem from "./ListItem";
import { action } from "@storybook/addon-actions";

export default {
  title: "hw2(lesson4) / ListItem",
  decorators: [withKnobs],
};

export const listItem = () => [
  <ListItem
    id={number("id is 1", 1)}
    label={text("label text", "item 1")}
    done={boolean("not done", false)}
    important={boolean("not important", false)}
    onToggleDone={action("click")}
    onToggleImportant={action("click")}
    onDeleted={action("click")}
  />,
];

export const listItemDone = () => [
  <ListItem
    id={number("id is 1", 1)}
    label={text("label text", "item 1")}
    done={boolean("not done", true)}
    important={boolean("important", false)}
    onToggleDone={action("click")}
    onToggleImportant={action("click")}
    onDeleted={action("click")}
  />,
];

export const listItemImportant = () => [
  <ListItem
    id={number("id is 1", 1)}
    label={text("label text", "item 1")}
    done={boolean("not done", false)}
    important={boolean("important", true)}
    onToggleDone={action("click")}
    onToggleImportant={action("click")}
    onDeleted={action("click")}
  />,
];

export const listItemImportantDone = () => [
  <ListItem
    id={number("id is 1", 1)}
    label={text("label text", "item 1")}
    done={boolean("not done", true)}
    important={boolean("important", true)}
    onToggleDone={action("click")}
    onToggleImportant={action("click")}
    onDeleted={action("click")}
  />,
];
