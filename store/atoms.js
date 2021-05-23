import { atom } from "jotai";

export const isDark = atom(false);
export const selectedTask = atom({ id: 0, title: "" });
