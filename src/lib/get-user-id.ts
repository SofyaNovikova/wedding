import { guests } from "constants/guests";

export const getUser = () => {
  const id = new URL(window.location.href).searchParams.get("id");
  if (id) {
    return guests[id] ?? null;
  }

  return null;
};
