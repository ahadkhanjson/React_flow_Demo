export const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { amount: 10 },
    type: "PaymentInit",
  },
  {
    id: "2",
    data: {
      currency: "dollar",
      country: "United States",
      countryCode: "US",
    },
    position: { x: 300, y: 20 },
    type: "paymentCountry",
  },
  {
    id: "3",
    data: { currency: "pound", country: "England", countryCode: "GB" },
    position: { x: 300, y: 200 },
    type: "paymentCountry",
  },
  {
    id: "4",
    data: { name: "Google Pay", code: "Gp" },
    position: { x: 550, y: -50 },
    type: "paymentProvider",
  },
  {
    id: "5",
    data: { name: "Stripe", code: "St" },
    position: { x: 550, y: 125 },
    type: "paymentProvider",
  },
  {
    id: "6",
    data: { name: "Apple Pay", code: "Ap" },
    position: { x: 550, y: 325 },
    type: "paymentProvider",
  },
  {
    id: "7",
    data: {},
    position: { x: 275, y: -100 },
    type: "paymentProviderSelect",
  }
];
export const initialEdges = [];
