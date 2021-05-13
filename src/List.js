import React from "react";

const List = (props) => {
  const { id, name, age, image } = props;
  console.log(props);
  return (
    <>
      <article key={id} className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
      </article>
    </>
  );
};

export default List;
