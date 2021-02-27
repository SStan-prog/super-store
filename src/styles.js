import { css } from "styled-components";

const sizes = {
  tabland: 1200,
  tabport: 900,
  phone: 600,
  phonesmall: 450,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
