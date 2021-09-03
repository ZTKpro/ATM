import styled from "styled-components";
import colors from "../style/colors";

function Button({ text, version, onClick }) {
  const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.9;
    font-size: 28px;
    background: ${version === "gradient"
      ? `linear-gradient(${colors.lightOrange} 0%, ${colors.orange} 100%)`
      : "white"};
    border: ${version === "gradient" ? `2px solid ${colors.orange}` : "none"};

    &:hover {
      opacity: 1;
    }
  `;

  return (
    <Btn className="button" onClick={onClick}>
      {text}
    </Btn>
  );
}

export default Button;
