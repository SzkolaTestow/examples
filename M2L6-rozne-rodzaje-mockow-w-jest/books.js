const api = require("./api");

const getFormattedBookInfo = async (id, formatter) => {
  const book = await api.fetchBook(id);
  return book ? formatter(book) : null;
};

module.exports = { getFormattedBookInfo };
