import React from "react";

const MenuItem = ({ items }) => {
	return (
		<div className="menu-items-container">
			{items.map((menuItem) => {
				const { id, title, img, desc, price } = menuItem;
				return (
					<div className="item-container" key={id}>
						<div className="item-image-container">
							<img src={img} />
						</div>
						<div className="item-info-container">
							<div className="item-header">
								<div className="item-header-name">
									<ItemName text={title} />
								</div>
								<div className="item-header-price">
									<ItemPrice text={price} />
								</div>
							</div>
							<div className="item-description">
								<ItemDescription text={desc} />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

const ItemName = ({ text }) => {
	return <h1>{text}</h1>;
};

const ItemPrice = ({ text }) => {
	return <h1>{text}</h1>;
};

const ItemDescription = ({ text }) => {
	return <p>{text}</p>;
};

export default MenuItem;
