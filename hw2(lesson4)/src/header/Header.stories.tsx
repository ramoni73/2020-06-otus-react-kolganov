import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Header from "./Header";

export default {
  title: "hw2(lesson4) / Header",
  decorators: [withKnobs],
};

export const header = () => [<Header />];
