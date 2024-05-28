import { Guest } from "typings/types";
import { Sex } from "./constants";

export const guests: Record<string, Guest> = {
  "e8f5b75a-7a30-48fd-acc5-ac278cbc791f": {
    id: "e8f5b75a-7a30-48fd-acc5-ac278cbc791f",
    name: "Валентина и Анатолий",
  },
  "c3607f1f-9bd3-4d55-a97b-620ee7437377": {
    id: "c3607f1f-9bd3-4d55-a97b-620ee7437377",
    name: "Лёша, Оля, Аня и Серафим",
  },
  "093d7c0e-df82-4921-9c0b-007399208d8f": {
    id: "093d7c0e-df82-4921-9c0b-007399208d8f",
    name: "Катя",
    single: true,
    sex: Sex.female,
  },
  "53c4c666-44f9-4eae-8974-2b61340013a3": {
    id: "53c4c666-44f9-4eae-8974-2b61340013a3",
    name: "Екатерина и Андрей",
  },
  "3367596e-ec3d-4445-a6dd-259a549a0ccb": {
    id: "3367596e-ec3d-4445-a6dd-259a549a0ccb",
    name: "Марина и Андрей",
  },
  "a986a810-eb30-4b49-8308-ca1ff5ee9e09": {
    id: "a986a810-eb30-4b49-8308-ca1ff5ee9e09",
    name: "Алёнка и Паша",
  },
  "33d50a95-f917-44ba-87cd-4517908614dc": {
    id: "33d50a95-f917-44ba-87cd-4517908614dc",
    name: "Светлана",
    single: true,
    sex: Sex.female,
  },
  "b9532eaa-b24c-42a0-8d02-f0d92295b72b": {
    id: "b9532eaa-b24c-42a0-8d02-f0d92295b72b",
    name: "Людмила и Николай",
  },
  "2ccdacdf-da41-48c5-a30d-81c290b43ac5": {
    id: "2ccdacdf-da41-48c5-a30d-81c290b43ac5",
    name: "Марина, Саша, Максим и Мишка",
  },
  "7c643bf7-9cc8-4651-af32-a7227a79a0ee": {
    id: "7c643bf7-9cc8-4651-af32-a7227a79a0ee",
    name: "Саша",
    single: true,
    sex: Sex.female,
  },
  "6f5768a1-35b0-4079-a746-c7624ff7f94e": {
    id: "6f5768a1-35b0-4079-a746-c7624ff7f94e",
    name: "Андрей",
    single: true,
    sex: Sex.male,
  },
  "3efacd4c-7556-4632-9794-63e003c69973": {
    id: "3efacd4c-7556-4632-9794-63e003c69973",
    name: "Анжела и Ваня",
  },
  "e913034b-af9f-43f5-99c3-1412d8ec8aa9": {
    id: "e913034b-af9f-43f5-99c3-1412d8ec8aa9",
    name: "Лиля и Николай",
  },
  "57f48970-b03f-4aac-a2fb-496bce6b7ba2": {
    id: "57f48970-b03f-4aac-a2fb-496bce6b7ba2",
    name: "Наталья, Владимир и Максим",
  },
  "d5574a00-ffa7-44b4-a4ab-d8b2324c4eff": {
    id: "d5574a00-ffa7-44b4-a4ab-d8b2324c4eff",
    name: "Елена и ", // TODO муж и дети
  },
  "013e0c2c-c609-4403-9f1a-1209cf1a8865": {
    id: "013e0c2c-c609-4403-9f1a-1209cf1a8865",
    name: "Мария и Сергей",
  },
  "8ec9749f-646c-428a-808e-02dfe5ada073": {
    id: "8ec9749f-646c-428a-808e-02dfe5ada073",
    name: "Татьяна, Денис и Даша",
  },
  "f28208c0-4c44-4036-b4e8-93d11e37e4e7": {
    id: "f28208c0-4c44-4036-b4e8-93d11e37e4e7",
    name: "Наталья, Владимир и Максим",
  },
  "f9379130-ed2f-4e76-8cf9-d6631109f91e": {
    id: "f9379130-ed2f-4e76-8cf9-d6631109f91e",
    name: "Аня, Николай, Галина и Рома",
  },
  "feeb672d-5755-4891-ab47-8117dcd12831": {
    id: "feeb672d-5755-4891-ab47-8117dcd12831",
    name: "Маргарита и Влад",
  },
  "2838ea8a-3bb8-494d-823b-c4ea50424b90": {
    id: "2838ea8a-3bb8-494d-823b-c4ea50424b90",
    name: "Вова, Настя, Паша, Варя и Дуся",
  },
  "16a6987b-acf5-40c4-b6e8-1bebf6cd1559": {
    id: "16a6987b-acf5-40c4-b6e8-1bebf6cd1559",
    name: "Галина и Сергей",
  },
  "ec48556e-e4fa-45ce-b9a0-6d299ab0754a": {
    id: "ec48556e-e4fa-45ce-b9a0-6d299ab0754a",
    name: "Валера",
    single: true,
    sex: Sex.male,
  },
  "92ad0d4f-22ac-4351-b38a-6fcd3894f49b": {
    id: "92ad0d4f-22ac-4351-b38a-6fcd3894f49b",
    name: "Сергей и Оля",
  },
};
