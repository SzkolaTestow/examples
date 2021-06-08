const fetchBooks = () => {
  return fetch("/books", { method: "GET" });
};

const getFormattedBookInfo = async (id, formatter) => {
  const books = await fetchBooks();
  return books[id] ? formatter(books[id]) : null;
};

module.exports = { getFormattedBookInfo };
