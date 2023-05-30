"use client";
import {
  ShowFieldStoreTypes,
  useFieldStore,
  useSelcetOptions,
} from "@/app/store/FieldStore";
import React, { FC } from "react";
import { FiEdit, FiX } from "react-icons/fi";

interface FieldCardProps {
  cardData: ShowFieldStoreTypes;
}

const FieldCard: FC<FieldCardProps> = ({ cardData }) => {
  const deleteField = useFieldStore((state) => state.deleteField);
  // const editField = useFieldStore((state) => state.editField);
  const SelectOptions = useSelcetOptions((state) => state);

  return (
    <div className="bg-slate-100 rounded-md w-[30rem] mb-2">
      <div className="border-b-[2px] h-7 w-full flex justify-between gap-2 items-center px-2">
        <div className="text-sm">{cardData.title}</div>
        <div className="flex gap-2 items-center">
          {/* <div
            className="text-green-700 cursor-pointer"
            onClick={() => editField(cardData.id)}
          >
            <FiEdit />
          </div> */}
          <div
            className="text-rose-700 cursor-pointer"
            onClick={() => deleteField(cardData.id)}
          >
            <FiX />
          </div>
        </div>
      </div>
      <div className="p-2">
        {cardData.type !== "Radio" && (
          <div>
            {cardData.type !== "Checkbox" && cardData.displayName}{" "}
            {cardData.type !== "Checkbox" && cardData.required && (
              <span className="text-rose-700">*</span>
            )}
          </div>
        )}
        {cardData.type === "Text" ? (
          <input
            type="text"
            className="border-gray-400 border-[2px] rounded-md w-full h-12 p-2"
          />
        ) : cardData.type === "Number" ? (
          <input
            type="number"
            className="border-gray-400 border-[2px] rounded-md w-full h-12 p-2"
          />
        ) : cardData.type === "TextArea" ? (
          <textarea className="border-gray-400 border-[2px] rounded-md w-full h-12" />
        ) : cardData.type === "Date" ? (
          <input
            type="date"
            className="border-gray-400 border-[2px] rounded-md w-full h-12 p-2"
          />
        ) : cardData.type === "DateRange" ? (
          <div className="flex gap-1">
            <div className="w-full">
              <label htmlFor="StartDate">From:</label>
              <input
                id="StartDate"
                type="date"
                className="border-gray-400 border-[2px] rounded-md w-full h-12 p-2"
              />
            </div>
            <div className="w-full">
              <label htmlFor="EndDate">To:</label>
              <input
                id="EndDate"
                type="date"
                className="border-gray-400 border-[2px] rounded-md w-full h-12 p-2"
              />
            </div>
          </div>
        ) : cardData.type === "Select" ? (
          <select className="border-gray-400 border-[2px] rounded-md w-full h-12 p-2">
            <option value={SelectOptions.option1}>
              {SelectOptions.option1}
            </option>
            <option value={SelectOptions.option2}>
              {SelectOptions.option2}
            </option>
            <option value={SelectOptions.option3}>
              {SelectOptions.option3}
            </option>
          </select>
        ) : cardData.type === "Radio" ? (
          <>
            <input
              id={cardData.displayName}
              type="radio"
              className="border-gray-400 border-[2px] rounded-md p-2 mr-1"
            />
            <label htmlFor={cardData.displayName}>
              {cardData.displayName}{" "}
              {cardData.required && <span className="text-rose-700">*</span>}
            </label>
          </>
        ) : cardData.type === "Checkbox" ? (
          <>
            <input
              id={cardData.displayName}
              type="checkbox"
              className="border-gray-400 border-[2px] rounded-md p-2 mr-1"
            />
            <label htmlFor={cardData.displayName}>
              {cardData.displayName}{" "}
              {cardData.required && <span className="text-rose-700">*</span>}
            </label>
          </>
        ) : null}
        <div className="text-xs text-slate-400 pt-1">
          {cardData.description}
        </div>
      </div>
    </div>
  );
};

export default FieldCard;
