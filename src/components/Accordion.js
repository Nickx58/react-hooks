import React, { Fragment } from "react";

const Accordion = ({items}) => {
    const renderItems = items.map(item => {
        return (
            <Fragment key={item.title}>
                <div className="title active">
                    <i className="dropdown icon" ></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </Fragment>
        )
    });
    return <div className="ui styled accordion">{renderItems}</div>
}

export default Accordion;