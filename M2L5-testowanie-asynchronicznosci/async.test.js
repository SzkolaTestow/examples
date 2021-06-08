const { getUser, getUserForId } = require("./async");

describe("getUser", () => {
  it("return props data", (done) => {
    getUser((user) => {
      expect(user).toEqual(expect.objectContaining({ name: "Jon Snow" }));
      done();
    });
  });
});

describe("getUserForId", () => {
  it("returns proper data for the specified id", () => {
    return getUserForId(1).then((user) => {
      expect(user).toEqual(
        expect.objectContaining({ id: 1, name: "Jon Snow" })
      );
    });
  });

  it("promise is rejected when the user is not found", () => {
    expect.assertions(1);

    return getUserForId(99).catch((error) => {
      expect(error).toBe("No user found for id: 99");
    });
  });
});

describe("getUserForId - async/await", () => {
  it("returns proper data for the specified id", async () => {
    const user = await getUserForId(1);
    expect(user).toEqual(expect.objectContaining({ id: 1, name: "Jon Snow" }));
  });

  it("promise is rejected when the user is not found", async () => {
    expect.assertions(1);
    try {
      const user = await getUserForId(99);
    } catch (e) {
      expect(e).toBe("No user found for id: 99");
    }
  });
});
