import React from "react";

export default function useLocalStorage(key: string) {
  const setItem = (value: unknown) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return { setItem };
}
