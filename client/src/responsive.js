import { css } from "styled-components";

export const mobile500 = (props) => {
  return css`
    @media only screen and (max-width: 500px) {
      ${props}
    }
  `;
};

export const mobile750 = (props) => {
  return css`
    @media only screen and (max-width: 750px) {
      ${props}
    }
  `;
};

export const mobile600 = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};
