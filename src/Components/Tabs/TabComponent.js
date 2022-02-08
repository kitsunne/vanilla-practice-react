import { useState } from "react";
import styled from "styled-components";

function TabComponent() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <TabsItems>
      <TabBlock>
        <TabButton
          className={toggleState === 1 ? "active" : "default"}
          onClick={() => toggleTab(1)}
        >
          History
        </TabButton>
        <TabButton
          className={toggleState === 2 ? "active" : "default"}
          onClick={() => toggleTab(2)}
        >
          Vision
        </TabButton>
        <TabButton
          className={toggleState === 3 ? "active" : "default"}
          onClick={() => toggleTab(3)}
        >
          Goals
        </TabButton>
      </TabBlock>

      <TabsContent>
        <div
          style={toggleState === 1 ? { display: "block" } : { display: "none" }}
        >
          <TabsName>History</TabsName>

          <TabsText>
            I'm baby wolf pickled schlitz try-hard normcore marfa man bun
            mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights.
            Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde
            try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh
            wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie
            ugh chambray, craft beer pork belly flannel tacos single-origin
            coffee art party migas plaid pop-up.
          </TabsText>
        </div>

        <div
          style={toggleState === 2 ? { display: "block" } : { display: "none" }}
        >
          <TabsName>Vision</TabsName>

          <TabsText>
            Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
            crucifix offal deep v hella biodiesel. Church-key listicle polaroid
            put a bird on it chillwave palo santo enamel pin, tattooed meggings
            franzen la croix cray. Retro yr aesthetic four loko tbh helvetica
            air plant, neutra palo santo tofu mumblecore. Hoodie bushwick
            pour-over jean shorts chartreuse shabby chic. Roof party hammock
            master cleanse pop-up truffaut, bicycle rights skateboard affogato
            readymade sustainable deep v live-edge schlitz narwhal.
          </TabsText>
        </div>

        <div
          style={
            toggleState === 3
              ? { display: "block", padding: 0 }
              : { display: "none" }
          }
        >
          <TabsName>Goals</TabsName>
          <TabsText>
            Chambray authentic truffaut, kickstarter brunch taxidermy vape
            heirloom four dollar toast raclette shoreditch church-key. Poutine
            etsy tote bag, cred fingerstache leggings cornhole everyday carry
            blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape
            hashtag marfa readymade direct trade man braid cold-pressed roof
            party. Small batch adaptogen coloring book heirloom. Letterpress
            food truck hammock literally hell of wolf beard adaptogen everyday
            carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo
            booth quinoa chicharrones.
          </TabsText>
        </div>
      </TabsContent>
    </TabsItems>
  );
}
const TabsName = styled.h2`
  color: black;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const TabsContent = styled.div`
  font-size: 20px;
  background: white;
  letter-spacing: 0;
  color: var(--clr-grey-5);
  padding: 2rem;
  margin: 0.2rem 0;
  height: fit-content;
`;

const TabButton = styled.button`
  &.default {
    color: black;
    padding: 1rem 0;
    text-transform: capitalize;
    font-size: 1rem;
    display: block;
    background: var(--clr-primary-7);
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: var(--spacing);
    margin: 0;
  }
  &.active {
    color: black;
    padding: 1rem 0;
    text-transform: capitalize;
    font-size: 1rem;
    display: block;
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: var(--spacing);
    margin: 0;
    background: var(--clr-white);
  }
  &:nth-child(1) {
    border-top-left-radius: var(--radius);
  }
  &:nth-child(3) {
    border-top-right-radius: var(--radius);
  }
  :hover {
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
  }
  h2 {
    color: black;
    font-size: 20px;
    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
  }
`;
const TabsItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 350px;
  border-radius: var(--radius);
  background: var(--clr-white);
  padding: 0;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 350px;
    margin-bottom: 50px;
  }
`;

const TabBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;
const TabsText = styled.p`
  font-size: 18px;
  width: 480px;
  @media screen and (max-width: 768px) {
    width: 250px;
    font-size: 12px;
  }
`;

export default TabComponent;
