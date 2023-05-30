"use client";
import FieldCard from "./Components/FieldCard/FieldCard";
import Sidebar from "./Components/sidebar/Sidebar";
import { useFieldStore } from "./store/FieldStore";

export default function Home() {
  const type = useFieldStore((state) => state.type);
  const fields = useFieldStore((state) => state.fields);
  const formdata = useFieldStore((state) => state);
  return (
    <div className="flex justify-between h-full">
      <Sidebar />
      <div className="pl-[430px] pr-3 w-full h-full flex justify-start items-center flex-col pt-5">
        {fields.length !== 0 && (
          <div>
            {fields.map((field) => (
              <FieldCard key={field.id} cardData={field} />
            ))}
          </div>
        )}
        {!type && fields.length === 0 && "Please select an option first"}
        {type && <FieldCard cardData={formdata} />}
      </div>
    </div>
  );
}
