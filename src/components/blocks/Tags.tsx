import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { BaseSyntheticEvent } from "react";
import { useDispatch } from "react-redux";


type prop = {
  tag: string,
  tags: string[],
  setTag: ActionCreatorWithPayload<string, string>
}

export function Tags({ tag, tags, setTag }: prop) {
  const dispatch = useDispatch();

  const liStyleMain = "px-4 py-3 cursor-pointer hover:bg-stone-800 rounded-md";
  const liStyle = `${liStyleMain} text-white`;
  const liStyleActive = `${liStyleMain} text-orange-800`;

  function handleTag(e: BaseSyntheticEvent) {
    const li: HTMLLIElement = e.target;
    const tagText = li.innerText;
    dispatch(setTag(tagText))
  }

  return (
    <ul className="flex flex-wrap justify-evenly items-center w-full">
      {tags.map((t: string) => (
        <li key={t} className={t === tag ? liStyleActive : liStyle} onClick={handleTag}>{t}</li>
      ))}
    </ul>
  );
}