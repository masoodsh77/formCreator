"use client";

import {
  FieldTypes,
  useFieldStore,
  useSelcetOptions,
} from "@/app/store/FieldStore";

const SidebarForm = () => {
  const type = useFieldStore((state) => state.type);
  const setType = useFieldStore((state) => state.updateType);
  const formdata = useFieldStore((state) => state);
  const addToList = useFieldStore((state) => state.addField);
  // const editField = useFieldStore((state) => state.editField);
  const reset = useFieldStore((state) => state.resetForm);
  const SelectOptions = useSelcetOptions((state) => state);

  return (
    <div>
      <div className="bg-slate-200 rounded-md h-10 flex items-center justify-center">
        Select your field type to begin
      </div>
      <div className="SelectType py-2 flex justify-start flex-wrap gap-1">
        <input
          type="radio"
          id="Number"
          name="FormType"
          value="Number"
          aria-label="Number"
          onChange={(e) => setType(e.target.value as FieldTypes)}
          checked={formdata.type === "Number"}
        />
        <input
          type="radio"
          id="TextArea"
          name="FormType"
          value="TextArea"
          aria-label="TextArea"
          onChange={(e) => setType(e.target.value as FieldTypes)}
          checked={formdata.type === "TextArea"}
        />
        <input
          type="radio"
          id="Text"
          name="FormType"
          value="Text"
          aria-label="Text"
          onChange={(e) => setType(e.target.value as FieldTypes)}
          checked={formdata.type === "Text"}
        />
        <input
          type="radio"
          id="Date"
          name="FormType"
          value="Date"
          aria-label="Date"
          onChange={(e) => setType(e.target.value as FieldTypes)}
          checked={formdata.type === "Date"}
        />
        <input
          type="radio"
          id="DateRange"
          name="FormType"
          value="DateRange"
          aria-label="DateRange"
          onChange={(e) => setType(e.target.value as FieldTypes)}
          checked={formdata.type === "DateRange"}
        />
        <input
          type="radio"
          id="Select"
          name="FormType"
          value="Select"
          aria-label="Select"
          onChange={(e) => setType(e.target.value as FieldTypes)}
          checked={formdata.type === "Select"}
        />
        <input
          type="radio"
          id="Radio"
          name="FormType"
          value="Radio"
          aria-label="Radio"
          onChange={(e) => setType(e.target.value as FieldTypes)}
          checked={formdata.type === "Radio"}
        />
        <input
          type="radio"
          id="Checkbox"
          name="FormType"
          value="Checkbox"
          aria-label="Checkbox"
          onChange={(e) => setType(e.target.value as FieldTypes)}
          checked={formdata.type === "Checkbox"}
        />
      </div>
      <div className="bg-slate-200 rounded-md h-10 flex items-center justify-center">
        Enter the requested information
      </div>
      {!type ? (
        <div className="text-center py-5 text-gray-500">
          Please select an option first
        </div>
      ) : (
        <div>
          <div className="my-3">
            <label htmlFor="title">{type} Field Title</label>
            <input
              type="text"
              id="title"
              className="border-gray-400 border-[2px] rounded-md w-full h-12"
              value={formdata.title}
              onChange={(e) => formdata.addTitle(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label htmlFor="title">{type} Field Display Title</label>
            <input
              type="text"
              id="displayTitle"
              className="border-gray-400 border-[2px] rounded-md w-full h-12"
              value={formdata.displayName}
              onChange={(e) => formdata.addDisplayName(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label htmlFor="title">{type} Field Description</label>
            <input
              type="text"
              id="title"
              className="border-gray-400 border-[2px] rounded-md w-full h-12"
              value={formdata.description}
              onChange={(e) => formdata.addDescription(e.target.value)}
            />
          </div>
          <div className="SelectType flex gap-5 my-3">
            <input
              type="radio"
              id="Required"
              name="require"
              value="Required"
              aria-label="Required"
              className="w-full text-center"
              onChange={(e) => formdata.addRequired(true)}
            />
            <input
              type="radio"
              id="Unrequired"
              name="require"
              value="Unrequired"
              aria-label="Unrequired"
              className="w-full text-center"
              onChange={(e) => formdata.addRequired(false)}
            />
          </div>
          <button
            onClick={() => {
              addToList({
                id: formdata.id,
                title: formdata.title,
                displayName: formdata.displayName,
                description: formdata.description,
                required: formdata.required,
                type: formdata.type,
              });
              reset();
            }}
            className="bg-emerald-300 w-full h-12 rounded-md my-5"
          >
            {formdata.action === "ADD" ? "Add Field" : "Edit Field"}
          </button>
        </div>
      )}
      {type === "Select" && (
        <div>
          <div className="bg-slate-200 rounded-md h-10 flex items-center justify-center">
            Please add options os Select box
          </div>
          <div className="my-3">
            <label htmlFor="title">
              Select Option #1<span className="text-rose-700"> * </span>
            </label>
            <input
              type="text"
              id="displayTitle"
              className="border-gray-400 border-[2px] rounded-md w-full h-12"
              value={SelectOptions.option1}
              onChange={(e) => SelectOptions.setOption1(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label htmlFor="title">Select Option #2</label>
            <input
              type="text"
              id="displayTitle"
              className="border-gray-400 border-[2px] rounded-md w-full h-12"
              value={SelectOptions.option2}
              onChange={(e) => SelectOptions.setOption2(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label htmlFor="title">Select Option #3</label>
            <input
              type="text"
              id="displayTitle"
              className="border-gray-400 border-[2px] rounded-md w-full h-12"
              value={SelectOptions.option3}
              onChange={(e) => SelectOptions.setOption3(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarForm;
