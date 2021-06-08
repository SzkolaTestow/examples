const api = require("./api");
const { getFormattedBookInfo } = require("./books");
jest.mock("./api");

describe("getFormattedBookInfo - API version", () => {
  it("properly formats book info", async () => {
    api.fetchBook.mockResolvedValue({
      id: 1,
      title: "Murder on the Orient Express",
      author: "Agatha Christie",
    });
    const formattedBook = await getFormattedBookInfo(
      1,
      (book) => `${book.title} - ${book.author}`
    );

    expect(formattedBook).toBe(
      "Murder on the Orient Express - Agatha Christie"
    );
  });
});
