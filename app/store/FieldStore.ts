import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export type FieldTypes =
  | null
  | "Number"
  | "TextArea"
  | "TextArea"
  | "Text"
  | "Date"
  | "DateRange"
  | "Select"
  | "Radio"
  | "Checkbox";

export type ShowFieldStoreTypes = {
  id: string;
  title: string;
  displayName: string;
  description: string;
  required: boolean;
  type: FieldTypes;
};
export type ActionsType = "EDIT" | "ADD";

interface FieldStore {
  type: FieldTypes;
  id: string;
  title: string;
  displayName: string;
  description: string;
  required: boolean;
  fields: ShowFieldStoreTypes[];
  action: ActionsType;
  updateType: (newType: FieldTypes) => void;
  addTitle: (newTitle: string) => void;
  addDisplayName: (newDisplayName: string) => void;
  addDescription: (newDescription: string) => void;
  addRequired: (newRequired: boolean) => void;
  resetForm: () => void;
  addField: (newField: ShowFieldStoreTypes) => void;
  deleteField: (id: string) => void;
  editField: (id: string) => void;
}

interface SelectOptionProp {
  option1: string;
  option2: string;
  option3: string;
  setOption1: (newOption1: string) => void;
  setOption2: (newOption2: string) => void;
  setOption3: (newOption3: string) => void;
}

export const useFieldStore = create<FieldStore>((set, get) => ({
  type: null,
  id: uuidv4(),
  title: "",
  displayName: "",
  description: "",
  required: false,
  action: "ADD",
  updateType: (newType: FieldTypes) => set({ type: newType as FieldTypes }),
  addTitle: (newTitle: string) => {
    set({ title: newTitle });
  },
  addDisplayName: (newDisplayName: string) => {
    set({ displayName: newDisplayName });
  },
  addDescription: (newDescription: string) => {
    set({ description: newDescription });
  },
  addRequired: (newRequired: boolean) => {
    set({ required: newRequired });
  },
  resetForm: () => {
    set({
      type: null,
      id: uuidv4(),
      title: "",
      displayName: "",
      description: "",
      required: false,
      action: "ADD",
    });
  },
  fields: [],
  addField: (newField: ShowFieldStoreTypes) => {
    const fieldsState = get().fields;
    set({ fields: [...fieldsState, newField] });
  },
  deleteField: (id: string) => {
    const fieldsState = get().fields;
    set({ fields: fieldsState.filter((i) => i.id !== id) });
  },
  editField: (id: string) => {
    const fieldsState = get().fields;
    fieldsState.filter((i) => i.id === id);
    const selected = fieldsState.filter((i) => i.id === id);
    set({
      type: selected[0].type,
      id: selected[0].id,
      title: selected[0].title,
      displayName: selected[0].displayName,
      description: selected[0].description,
      required: selected[0].required,
      action: "EDIT",
    });
  },
}));

export const useSelcetOptions = create<SelectOptionProp>((set) => ({
  option1: "",
  option2: "",
  option3: "",
  setOption1: (newOption1: string) => set({ option1: newOption1 }),
  setOption2: (newOption2: string) => set({ option2: newOption2 }),
  setOption3: (newOption3: string) => set({ option3: newOption3 }),
}));
