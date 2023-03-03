import { useState, useEffect } from "react";
export const useTyper = (array) => {
  const [arrayLength, setArrayLength] = useState(0);
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let showLetter1, showLetter2, showLetter3, showLetter4;
    if (index < fullText.length) {
      clearTimeout(showLetter1);
      showLetter1 = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    } else if (index === fullText.length && index > 0) {
      clearTimeout(showLetter2);
      showLetter2 = setTimeout(() => {
        setText(text.substring(0, text.length - 1));
        setFullText(fullText.substring(0, fullText.length - 1));
        setIndex(index - 1);
      }, 100);
    } else if (index === 0) {
      if (arrayLength < 2) {
        clearTimeout(showLetter3);
        showLetter3 = setTimeout(() => {
          console.log("reached");
          setArrayLength((arrayLength) => arrayLength + 1);
          setIndex(0);
          setText("");
          setFullText(array[arrayLength]);
        }, 100);
      } else {
        clearTimeout(showLetter4);
        showLetter4 = setTimeout(() => {
          setArrayLength(0);
          setIndex(0);
          setText("");
          setFullText(array[arrayLength]);
        }, 100);
      }
    }
  }, [index, arrayLength]);
  return text;
};
