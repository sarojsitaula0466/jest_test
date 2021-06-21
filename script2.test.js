const fetch = require("node-fetch");
const swapi = require("./script2");

it("get people from swapi api", () => {
  expect.assertions(2);
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
