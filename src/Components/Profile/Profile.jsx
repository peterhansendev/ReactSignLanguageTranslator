import { useEffect, useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [translateData, setTranslateData] = useState([]);

  useEffect(() => {
    setTranslateData(JSON.parse(localStorage.getItem("displayedResult")));
  }, []);

  var renderedWords = translateData.map((img, index) => {
    return (
      <div key={index}>
        <button
          class="hovertext"
          data-hover="Copy to clipboard"
          onClick={() => navigator.clipboard.writeText(img)}
          id="storedValues"
        >
          <span>{img}</span>
        </button>
      </div>
    );
  });

  return (
    <div class="mouse-cursor-gradient-tracking">
      <div id="top">
        <h1>Profile</h1>
      </div>
      {renderedWords}
      <a
        id="profileLink"
        onClick={() => localStorage.removeItem("displayedResult")}
        href="/TranslationView"
      >
        Delete and go to the translation section
      </a>

    </div>
  );
}
