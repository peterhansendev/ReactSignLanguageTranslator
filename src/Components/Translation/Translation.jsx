import { useState, useEffect } from "react";
import { translateSubmitted } from "../../api/translate";
import { useUser } from "../../context/UserContext";
import "./Translation.css";

export default function Translation() {
  const [input, setInput] = useState("");
  const { user } = useUser();
  const [results, setResults] = useState("");
  const [displayedResult, setDisplayedResults] = useState("");

  const catchInput = (e) => {
    setInput(e.target.value);
  };

  const handleClick = async () => {
    if (!input) {
      alert("Please type the text you wish translated");
    }
    const [error, result] = await translateSubmitted(user, input);
    console.log("error! " + error);
    //console.log("result! " + JSON.stringify(result.inputs));
    setResults(results + JSON.stringify(result.inputs));
    setDisplayedResults(result.inputs);
  };

  var letters = [];
  var s = JSON.stringify(displayedResult);
  for (var i = 2; i < s.length - 2; i++) {
    letters.push(s.charAt(i));
    var renderedLetters = letters.map((img, index) => {
      return (
        <div key={index}>
          <img src={`emoji/${img}.png`} alt="img" />
        </div>
      );
    });
  }

  useEffect(() => {
    let existingList = [];
    if (localStorage.getItem("displayedResult"))
      existingList = JSON.parse(localStorage.getItem("displayedResult"));
    if (existingList == null) existingList = [];
    existingList.unshift(displayedResult);

    let newList = existingList.filter(Boolean);
    const index = 10;
    newList.splice(index, 1);
    newList.filter(Boolean);
    localStorage.setItem("displayedResult", JSON.stringify(newList));
  }, [displayedResult]);

  return (
    <div>
      <form id="form" onSubmit={e => { e.preventDefault(handleClick()); }}>
        <div>
          <div className="search">
            <input
              type="translation"
              className="form-control"
              id="exampleInputtranslation"
              aria-describedby="translationHelp"
              placeholder="Enter text"
              onChange={catchInput}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            ></button>
          </div>
        </div>
      </form>

      <div style={{ display: displayedResult ? "block" : "none" }}>
        <div id="renderedLetters">{renderedLetters}</div>
        <p id="displayedResult">{displayedResult}</p>
      </div>
    </div>
  );
}
