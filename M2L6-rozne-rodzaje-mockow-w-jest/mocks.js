const books = [
  {
    id: 1,
    title: "Radical Candor",
    author: "Kim Scott",
  },
  {
    id: 2,
    title: "Kierunek jakość. Jak unikać błędów w projekcie",
    author: "Aleksandra Kunysz",
  },
  {
    id: 3,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
  },
];

const getFormattedBookInfo = (id, formatter) => {
  return books[id] ? formatter(books[id]) : null;
};

module.exports = { getFormattedBookInfo };
