const { getUser, getUserForId } = require("./async");

describe("getUser", () => {
  it("returns proper data", (done) => {
    getUser((data) => {
      // expect(data).toEqual({ name: "Jon Snow", city: "Castle Black" });
      expect(data).toEqual(expect.objectContaining({ name: "Jon Snow" }));
      done();
    });
  });
});

describe("getDataPromise", () => {
  it("returns proper data for the specified id", () => {
    return getUserForId(1).then((data) =>
      expect(data).toEqual({ id: 1, name: "Jon Snow", city: "Castle Black" })
    );
  });

  it("promise is rejected when the user is not found", () => {
    expect.assertions(1);

    return getUserForId(99).catch((error) =>
      expect(error).toBe("No user found for id: 99")
    );
  });
});

describe("getDataAsync", () => {
  it("returns proper data for the specified id", async () => {
    const user = await getUserForId(1);
    expect(user).toEqual({ id: 1, name: "Jon Snow", city: "Castle Black" });
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
