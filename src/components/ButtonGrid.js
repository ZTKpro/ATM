import styled from "styled-components";
import colors from "../style/colors";

import Button from "../components/Button";

function ButtonGrid({ arrayTable }) {
  const Wrapper = styled.section`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    .button {
      position: absolute;
      bottom: 90px;
      border-radius: 0 120px 120px 0;
      position: absolute;
      height: 110px;
      width: 400px;
      padding: 25px;

      &:nth-child(1) {
        border-radius: 120px 0 0 120px;
        right: 0;
      }
    }
  `;

  return (
    <Wrapper>
      {arrayTable.map(({ text, version }) => (
        <Button text={text} version={version} />
      ))}
    </Wrapper>
  );
}

export default ButtonGrid;
