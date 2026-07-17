import next from "eslint-config-next";
const config = [
  { ignores: ["tmp/**", "output/**", "out/**"] },
  ...next,
];

export default config;
