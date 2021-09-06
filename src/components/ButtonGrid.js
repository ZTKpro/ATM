import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/Button";

function ButtonGrid({ buttons }) {
  const gapBtn = 90;

  const Wrapper = styled.section`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    .button {
      position: absolute;
      bottom: ${`${gapBtn}px`};
      border-radius: 0 120px 120px 0;
      position: absolute;
      height: 110px;
      width: 400px;
      padding: 25px;
    }

    .button__position--1,
    .button__position--3,
    .button__position--5,
    .button__position--7 {
      right: 0;
      border-radius: 120px 0 0 120px;
    }

    .button__position--2,
    .button__position--3 {
      bottom: ${`${gapBtn + 210}px`};
    }

    .button__position--4,
    .button__position--5 {
      bottom: ${`${gapBtn + 210 * 2}px`};
    }

    .button__position--6,
    .button__position--7 {
      bottom: ${`${gapBtn + 210 * 3}px`};
    }
  `;

  return (
    <Wrapper>
      {buttons.map(({ text, version, goTo, onClick, varFun }, nr) => (
        <Link to={goTo ? goTo : "/menu"}>
          <Button
            {...{ text, version }}
            onClickFun={onClick}
            classname={`button__position--${nr}`}
            value={varFun}
          />
        </Link>
      ))}
    </Wrapper>
  );
}

export default ButtonGrid;
