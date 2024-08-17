import React, { useRef } from "react";
import domtoimage from "dom-to-image-more";

const ScreenshotCapture = () => {
  const captureRef = useRef();

  const handleCopyToClipboard = () => {
    const element = captureRef.current;
    const scale = 2; // Increase this for higher quality

    const options = {
      width: element.offsetWidth * scale,
      height: element.offsetHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: element.offsetWidth + "px",
        height: element.offsetHeight + "px",
      },
    };

    domtoimage
      .toBlob(element, options)
      .then((blob) => {
        const clipboardItem = new ClipboardItem({ "image/png": blob });
        navigator.clipboard
          .write([clipboardItem])
          .then(() => {
            console.log("Screenshot copied to clipboard!");
            alert("Screenshot copied to clipboard!");
          })
          .catch((error) => {
            console.error("Error copying image to clipboard:", error);
            alert("Failed to copy screenshot to clipboard.");
          });
      })
      .catch((error) => {
        console.error("Error capturing screenshot:", error);
      });
  };

  return (
    <div>
      <div
        ref={captureRef}
        style={{
          padding: "20px",
          backgroundColor: "#f0f0f0",
          width: "400px",
          height: "200px",
        }}
      >
        <h1>This is a screenshot area</h1>
        <p>Everything here will be captured and copied to clipboard.</p>
      </div>
      <button onClick={handleCopyToClipboard}>
        Copy Screenshot to Clipboard
      </button>
    </div>
  );
};

export default ScreenshotCapture;
