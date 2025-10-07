import { atom } from "jotai";

export const ratingFilterAtom = atom<number | null>(null);
export const priceFilterAtom = atom({
  min: null as number | null,
  max: null as number | null,
});
export const categoriesFilterAtom = atom<number[]>([]);
export const lessonsFilterAtom = atom({
  min: null as number | null,
  max: null as number | null,
});

export const allFiltersAtom = atom((get) => ({
  rating: get(ratingFilterAtom),
  price: get(priceFilterAtom),
  categories: get(categoriesFilterAtom),
  lessons: get(lessonsFilterAtom),
}));
