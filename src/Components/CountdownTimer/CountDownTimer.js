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
          <p>Giveaway Ends On Monday, 30 May 2022 11:30am</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit molestiae cum libero atque ut voluptate qui
            consectetur aliquid incidunt voluptatem quos, dolore, non commodi
            quaerat aliquam eligendi, quisquam totam blanditiis.
          </p>
          <Timer />
        </CountDownInfo>
      </CountDownInfoContainer>
    </CountDownWrapper>
  );
};
const CountDownWrapper = styled.div`
  min-height: auto;
  margin: 100px auto;
  display: flex;
  justify-content: center;
`;
const CountDownImageContainer = styled.div`
  margin-bottom: 2rem;
  margin: 0 40px;
  img {
    border-radius: var(--radius);
    object-fit: cover;
    width: 500px;
    height: 320px;
  }
`;

const CountDownInfoContainer = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
`;
const CountDownInfo = styled.div`
  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--clr-primary-3);
  }
  p:nth-child(even) {
    font-size: 1rem;
  }
`;

export default CountDownTimer;
