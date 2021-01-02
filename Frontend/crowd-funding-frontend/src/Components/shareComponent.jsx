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
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const ShareButtons = (props) => {
  const url = props.url,
    title = props.title;
  //   const url = "uyguyhui",
  //     title = "props.title";
  return (
    <React.Fragment>
      <div className="p-2 bg-light" style={{ textAlign: "center" }}>
        <h4>Share with your friends:</h4>
        <FacebookShareButton url={url} className="m-2">
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton url={url} title={title} className="m-2">
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <TwitterShareButton url={url} title={title} className="m-2">
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <LinkedinShareButton url={url} title={title} className="m-2">
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>

        <EmailShareButton url={url} className="m-2">
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>
    </React.Fragment>
  );
};
export default ShareButtons;
