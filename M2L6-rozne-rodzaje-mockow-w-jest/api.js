const api = {
  async fetchBook(id) {
    const response = await fetch(`/book/${id}`, { method: GET });
    return await response.json();
  },
};

module.exports = api;
