"use client"
import React, { useState, useEffect } from "react";

function TruncateText({ text, maxWords, className }) {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (text.split(" ").length > maxWords) {
      const truncated = text.split(" ").slice(0, maxWords).join(" ");
      setTruncatedText(truncated + "...");
    }
  }, []);

  return <p className={className}>{truncatedText}</p>;
}


export default TruncateText