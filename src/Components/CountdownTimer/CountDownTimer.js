import Timer from "./Timer";
import styled from "styled-components";

const CountDownTimer = () => {
  return (
    <CountDownWrapper>
      <CountDownImageContainer>
        <img
          src="https://github.com/john-smilga/javascript-basic-projects/blob/master/12-countdown-timer/final/gift.jpeg?raw=true"
          alt="timerImg"
        ></img>
      </CountDownImageContainer>
      <CountDownInfoContainer>
        <CountDownInfo>
          <h1>OLD IPHONE GIVEAWAY</h1>
          <Text>Giveaway Ends On Monday, 31 Dec 2022 11:30am</Text>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit molestiae cum libero atque ut voluptate qui
            consectetur aliquid incidunt voluptatem quos, dolore, non commodi
            quaerat aliquam eligendi, quisquam totam blanditiis.
          </Text>
          <Timer />
        </CountDownInfo>
      </CountDownInfoContainer>
    </CountDownWrapper>
  );
};
const CountDownWrapper = styled.div`
  min-height: auto;
  margin: 200px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    width: 85vw;
    margin: 110px auto;
    align-items: center;
  }
`;
const CountDownImageContainer = styled.div`
  margin: 0 40px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  img {
    border-radius: var(--radius);
    object-fit: cover;
    width: 500px;
    height: 320px;
    @media screen and (max-width: 768px) {
      width: 270px;
      height: 170px;
    }
  }
`;

const CountDownInfoContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 210px;
  }
`;
const CountDownInfo = styled.div`
  h1 {
    font-size: 35px;
    text-transform: uppercase;
    color: var(--clr-primary-3);
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const Text = styled.p`
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export default CountDownTimer;
