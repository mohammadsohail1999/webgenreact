import React from "react";

const Preview = ({ headerRef }) => {
  console.log(headerRef);

  function renderHtml() {
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        ${headerRef.current ? headerRef.current.innerHTML : `<p>No text</p>`}
        <script></script>
      </body>
    </html>
    `;
    return htmlContent;
  }

  return (
    <>
      <iFrame
        srcDoc={renderHtml()}
        height="400px"
        width="100%"
        style={{ border: "none" }}
      ></iFrame>
    </>
  );
};

export default Preview;
