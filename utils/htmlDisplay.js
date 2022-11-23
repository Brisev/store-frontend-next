import React from "react";
// import createDOMPurify from "dompurify";
// import { JSDOM } from "jsdom";

// const window = new JSDOM("").window;
// const DOMPurify = createDOMPurify(window);

const HtmlDisplay = (rawHtml) => (
  <div>{<div dangerouslySetInnerHTML={{ __html: rawHtml }} />}</div>
);

export default HtmlDisplay;
