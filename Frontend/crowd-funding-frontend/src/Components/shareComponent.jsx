import React from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const ShareButtons = (props) => {
  const url = props.url,
    title = props.title,
    description = props.description;
  // const url = "https://www.npmjs.com/package/react-share",
  //   title = "props.title",
  //   description =
  //     "Here is the props description for the element to be shared...";
  return (
    <React.Fragment>
      <div className="p-2 bg-light" style={{ textAlign: "center" }}>
        <h4>Share with your friends:</h4>
        <FacebookShareButton url={url} quote={description} className="m-2">
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton url={url} title={description} className="m-2">
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <TwitterShareButton url={url} title={title} className="m-2">
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <TelegramShareButton url={url} title={title} className="m-2">
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>

        <EmailShareButton url={url} subject={title} className="m-2">
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>
    </React.Fragment>
  );
};
export default ShareButtons;
