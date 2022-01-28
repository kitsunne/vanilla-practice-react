import React from "react";
import styled from "styled-components";

const MenuItem = ({ items }) => {
  return (
    <MenuItemsContainer>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <MenuItemContainer key={id}>
            <div>
              <ItemImage src={img} />
            </div>
            <ItemContent>
              <ItemHeader>
                <div>
                  <ItemName>{title}</ItemName>
                </div>
                <div>
                  <ItemPrice>{price}</ItemPrice>
                </div>
              </ItemHeader>
              <div className="item-description">
                <ItemDescription>{desc}</ItemDescription>
              </div>
            </ItemContent>
          </MenuItemContainer>
        );
      })}
    </MenuItemsContainer>
  );
};

const MenuItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  width: 80vw;
  margin: 0 auto;
  max-width: 1170px;
`;
const MenuItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  height: 180px;
  margin: 0 15px 15px;
  cursor: pointer;
`;

const ItemImage = styled.img`
  object-fit: cover;
  height: 130px;
  width: 200px;
  border: 0.25rem solid var(--clr-gold);
  border-radius: var(--radius);
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding-left: 20px;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px dotted var(--clr-grey-5);
`;

const ItemName = styled.h1`
  font-size: 17px;
  margin-bottom: 0.2rem;
  letter-spacing: -0.1px;
`;

const ItemPrice = styled.h1`
  font-size: 16px;
  color: var(--clr-gold);
`;

const ItemDescription = styled.p`
  margin-bottom: 0;
  padding-top: 0.4rem;
  font-size: 12px;
`;
export default MenuItem;
