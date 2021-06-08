const { getFormattedBookInfo } = require("./mocks");

describe("getFormattedBookInfo", () => {
  it("properly envokes formatter with a book object", () => {
    const mockFormatter = jest.fn();
    getFormattedBookInfo(1, mockFormatter);

    expect(mockFormatter).toHaveBeenCalled();
    expect(mockFormatter).toHaveBeenCalledWith({
      id: 2,
      title: "Kierunek jakość. Jak unikać błędów w projekcie",
      author: "Aleksandra Kunysz",
    });
  });

  it("uses formatter to return properly formatted information about a book", () => {
    const mockFormatter = jest.fn((book) => {
      return `This is "${book.title}" written by ${book.author}`;
    });

    const bookInfo = getFormattedBookInfo(0, mockFormatter);
    expect(bookInfo).toBe('This is "Radical Candor" written by Kim Scott');
  });

  it("returns null when book is not found", () => {
    const mockFormatter = jest.fn();
    const bookInfo = getFormattedBookInfo(99, mockFormatter);

    expect(bookInfo).toBe(null);
    expect(mockFormatter).not.toHaveBeenCalled();
  });
});
