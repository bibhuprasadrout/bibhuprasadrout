import { useState, useEffect } from "react";
export const useTyper = (array) => {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [fullText, setFullText] = useState(array[arrayIndex]);
  const arrayItemChangeHandler = () => {
    if (arrayIndex < 2) {
      setArrayIndex((arrayIndex) => arrayIndex + 1);
      setFullText(array[arrayIndex + 1]);
    } else {
      setArrayIndex(0);
      setFullText(array[0]);
    }
  };
  useEffect(() => {
    let showLetter1, showLetter2;
    if (index < fullText.length) {
      clearTimeout(showLetter1);
      showLetter1 = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    } else if (index === fullText.length && index > 0) {
      clearTimeout(showLetter2);
      showLetter2 = setTimeout(() => {
        text.length > 1
          ? setText(text.substring(0, text.length - 1))
          : setText("");
        text.length > 1
          ? setFullText(fullText.substring(0, fullText.length - 1))
          : arrayItemChangeHandler();
        setIndex(index - 1);
      }, 100);
    }
  }, [index, arrayIndex]);
  return text;
};
