import React, { Fragment, useState } from "react";

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);
	const onTitleClicled = (index) => {
		setActiveIndex(index);
	}

	const renderItems = items.map((item, index) => {
		const active = index === activeIndex ? 'active' : '';

		return (
			<Fragment key={item.title}>
				<div onClick={() => onTitleClicled(index)} className={`title ${active}`}>
					<i className="dropdown icon" ></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</Fragment>
		)
	});
	return (
		<Fragment>
			<div className="ui styled accordion">{renderItems}</div>
		</Fragment>
	);
}

export default Accordion;
