import styled from "styled-components";
import background from "../img/background.png";

function BackgroundImg() {
  const Wrapper = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  `;

  const Img = styled.img`
    width: 100vw;
  `;

  return (
    <Wrapper>
      <Img src={background} alt="image"></Img>
    </Wrapper>
  );
}

export default BackgroundImg;
