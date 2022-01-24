import { useState } from "react";
import "./tabComponent.css";
import styled from "styled-components";

function TabComponent() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <TabsItems className="container-tabs">
      <TabBlock>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          History
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Vision
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Goals
        </button>
      </TabBlock>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>History</h2>

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
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Vision</h2>

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
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Goals</h2>
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
      </div>
    </TabsItems>
  );
}

const TabsItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 350px;
  background: #f1f1f1;
  border-radius: var(--radius);
  background: var(--clr-white);
  padding: 0;
`;

const TabBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 500px;
`;
const TabsButtons = styled.div`
  border-top-right-radius: var(--radius);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const TabsText = styled.p`
  font-size: 1rem;
  width: 400px;
`;

export default TabComponent;
