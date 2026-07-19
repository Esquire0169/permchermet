export type PriceItem = {
  id: string;
  category: "black" | "nonferrous" | "cable" | "battery";
  name: string;
  unit: string;
  price: string;
  note: string;
};

export const priceCategories = [
  { id: "all", label: "Все" },
  { id: "black", label: "Черный лом" },
  { id: "nonferrous", label: "Цветной лом" },
  { id: "cable", label: "Кабель" },
  { id: "battery", label: "АКБ" },
] as const;

export const prices: PriceItem[] = [
  {
    id: "3a",
    category: "black",
    name: "Лом 3А",
    unit: "т",
    price: "по запросу",
    note: "Крупногабаритный черный лом",
  },
  {
    id: "5a",
    category: "black",
    name: "Лом 5А",
    unit: "т",
    price: "по запросу",
    note: "Габаритный черный лом",
  },
  {
    id: "12a",
    category: "black",
    name: "Лом 12А",
    unit: "т",
    price: "по запросу",
    note: "Чугун",
  },
  {
    id: "copper",
    category: "nonferrous",
    name: "Медь блеск / микс",
    unit: "кг",
    price: "по запросу",
    note: "Зависит от чистоты партии",
  },
  {
    id: "aluminum",
    category: "nonferrous",
    name: "Алюминий",
    unit: "кг",
    price: "по запросу",
    note: "Профиль, электротех, микс",
  },
  {
    id: "brass",
    category: "nonferrous",
    name: "Латунь / бронза",
    unit: "кг",
    price: "по запросу",
    note: "Оценка по факту",
  },
  {
    id: "cable-cu",
    category: "cable",
    name: "Кабель медный",
    unit: "кг",
    price: "по запросу",
    note: "С учетом жилы и оболочки",
  },
  {
    id: "cable-al",
    category: "cable",
    name: "Кабель алюминиевый",
    unit: "кг",
    price: "по запросу",
    note: "С учетом сечения",
  },
  {
    id: "akb",
    category: "battery",
    name: "АКБ свинцовые",
    unit: "кг",
    price: "по запросу",
    note: "Целые и разбитые",
  },
];

export const teaserPrices = prices.filter((p) =>
  ["3a", "copper", "aluminum", "cable-cu", "akb"].includes(p.id),
);
