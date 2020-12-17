import React from "react";
import Campaign from "./campaigns";

const LandingPage = (props) => {
  let id = "abc";
  let image =
    "data:image/jpeg;base64,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";
  let data =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque dicta, accusamus sapiente ad aspernatur odio. Aspernatur, eum. Dolorem consequuntur molestias voluptatem reiciendis, deserunt unde placeat soluta perferendis exercitationem sit? Porro?";
  const handleClick = (p) => {
    let url = "/campaign/" + p;
    props.history.push(url);
  };
  return (
    <React.Fragment>
      <div className="col-10">
        <h1>Landing Page</h1>
      </div>
      <Campaign
        id={id}
        handleClick={handleClick}
        title="This is title"
        description={data}
        image={image}
        requiredAmount="1000"
      />
      <Campaign
        id={id}
        handleClick={handleClick}
        title="This is title"
        description={data}
        image={image}
        requiredAmount="1000"
      />
      <Campaign
        id={id}
        handleClick={handleClick}
        title="This is title"
        description={data}
        image={image}
        requiredAmount="1000"
      />
      <Campaign
        id={id}
        handleClick={handleClick}
        title="This is title"
        description={data}
        image={image}
        requiredAmount="1000"
      />
    </React.Fragment>
  );
};

export default LandingPage;
