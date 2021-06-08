const { getFormattedBookInfo } = require("./mocks");

describe("getFormattedBookInfo", () => {
  it("properly envokes callback with a book object", () => {
    const myMockFunction = jest.fn();
    getFormattedBookInfo(1, myMockFunction);

    expect(myMockFunction).toHaveBeenCalled();
    expect(myMockFunction).toHaveBeenCalledWith({
      id: 2,
      title: "Kierunek jakość. Jak unikać błędów w projekcie",
      author: "Aleksandra Kunysz",
    });
  });

  it("uses formatter to return properly formatted information about a book", () => {
    const myMockFunction = jest.fn(
      (book) => `This is "${book.title}" written by ${book.author}`
    );
    const bookInfo = getFormattedBookInfo(0, myMockFunction);
    expect(bookInfo).toBe('This is "Radical Candor" written by Kim Scott');
  });

  it("returns null when book is not found", () => {
    const mock = jest.fn();
    const bookInfo = getFormattedBookInfo(99, mock);
    expect(bookInfo).toBe(null);
    expect(mock).not.toHaveBeenCalled();
  });
});
