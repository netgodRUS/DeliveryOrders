import { sleep } from "../utils";

const fakeRequests = [
  {
    key: "0",
    original: [56.84660399, 30.29496392],
    destination: [59.82934196, 30.42423701],
    name: "Михайловская волость Псков Санк-Петербург",
  },
  {
    key: "1",
    original: [59.82934196, 30.42423701],
    destination: [59.82761295, 30.41705607],
    name: "по Санк-Петербургу",
  },
  {
    key: "2",
    original: [59.83537701, 30.38064206],
    destination: [59.84660399, 30.29496392],
    name: "по Санк-Петербургу ",
  },
  {
    key: "3",
    original: [59.83567701, 30.38064206],
    destination: [59.84660399, 30.29496392],
    name: "по Санк-Петербургу",
  },
  {
    key: "4",
    original: [59.84660399, 30.29496392],
    destination: [59.82761295, 30.41705607],
    name: "по Санк-Петербургу",
  },
];

const requestApi = {
  async getAll() {
    await sleep(1000);
    return fakeRequests;
  },
};

export default requestApi;
