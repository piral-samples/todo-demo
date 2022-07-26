import createStore from "zustand";

export interface TodoItem {
  id: string;
  completed: boolean;
  title: string;
}

export type Filters = "all" | "active" | "completed";

export interface Store {
  items: Array<TodoItem>;
  editing: TodoItem | undefined;
  filter: Filters;
  add(todo: TodoItem): void;
  update(todo: TodoItem): void;
  remove(todo: TodoItem): void;
  edit(todo: TodoItem): void;
  toggleAll(): void;
  clearAll(): void;
  filterBy(type: Filters): void;
}

export default createStore<Store>((set) => ({
  items: [],
  filter: "all",
  editing: undefined,
  toggleAll: () =>
    set((state) => ({
      items: state.items.find((m) => !m.completed)
        ? state.items.map((m) => ({ ...m, completed: true }))
        : state.items.map((m) => ({ ...m, completed: false })),
    })),
  edit: (todo) => set({ editing: todo }),
  filterBy: (filter) => set({ filter }),
  add: (todo) => set((state) => ({ items: [...state.items, todo] })),
  clearAll: () =>
    set((state) => ({ items: state.items.filter((item) => !item.completed) })),
  update: (todo) =>
    set((state) => ({
      items: state.items.map((m) => (m.id === todo.id ? todo : m)),
    })),
  remove: (todo) =>
    set((state) => ({ items: state.items.filter((item) => item !== todo) })),
}));
