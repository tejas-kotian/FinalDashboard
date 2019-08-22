const assests = [
  {
    id: 1,
    name: "S&P 500 ®",
    options: [{ years: 1, value: "6.10" }]
  },
  {
    id: 2,
    name: "MSCI EAFE Index",
    options: [{ years: 1, value: "6.15" }]
  },
  {
    id: 3,
    name: "Dow Jones U.S. Real Estate Index",
    options: [{ years: 1, value: "6.50" }]
  },
  {
    id: 4,
    name: "Bloomberg Commodity Index",
    options: [{ years: 1, value: "6.15" }]
  }
];
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  assests
};
