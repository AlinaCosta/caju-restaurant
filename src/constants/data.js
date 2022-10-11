import images from "./images";

const wines = [
  {
    title: "Valahorum Chardonnay",
    price: "126 lei",
    tags: "RO | Bottle",
  },
  {
    title: "Budurească Premium Fumé",
    price: "118 lei",
    tags: "RO | Bottle",
  },
  {
    title: "Serve Cuvée Sissi Rosé",
    price: "136 lei",
    tags: "RO | 750 ml",
  },
  {
    title: "Guy Saget Sancer e",
    price: "278 lei",
    tags: "FR | 750 ml",
  },
  {
    title: "Banfi San Angelo Pinot Grigio",
    price: "185 lei",
    tags: "IT | 750 ml",
  },
  {
    title: "Principessa Gavia di Gavi",
    price: "144 lei",
    tags: "IT | 750 ml",
  },
];

const cocktails = [
  {
    title: "PASSION FRUIT BELINI",
    price: "34 lei",
    tags: "Passion fruit liqueur | lime | prosecco",
  },
  {
    title: "TROPICAL BREEZE",
    price: "34 lei",
    tags: "White rum | passion fruit | pineapple juice | Aperol",
  },
  {
    title: "HUGO",
    price: "34 lei",
    tags: "Prosecco | elderflower syrup | mint | lime",
  },
  {
    title: "CAJU NEGRONI",
    price: "38 lei",
    tags: "Campari infused | Tanqueray gin | red vermouth,",
  },
  {
    title: "CUCUMBER SMASH",
    price: "34 lei",
    tags: "Tanqueray gin | elderflower syrup | fresh lemon juice",
  },
  {
    title: "PURPLE H",
    price: "38 lei",
    tags: "Tanqueray gin | violet syrup | tonic water | lime",
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: "Horeca Awards 2021",
    subtitle: "CEL MAI BUN RESTAURANT CU SPECIFIC ORIENTAL",
  },
  {
    imgUrl: images.award01,
    title: "Horeca Awards 2019",
    subtitle: "Premiul pentru Cel mai bun chef",
  },
  {
    imgUrl: images.award02,
    title: "Horeca Awards 2018",
    subtitle: "Cel mai bun restaurant cu specific strain premium",
  },
  {
    imgUrl: images.award01,
    title: "Horeca Awards 2018",
    subtitle: "Cel mai bun restaurant cu specific strain casual",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { wines, cocktails, awards };
