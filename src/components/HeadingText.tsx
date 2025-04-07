import React, { useEffect, useState } from "react";
import RadioBtn from "./landingPage/RadioBtn";
interface prop {
  btnNum: number;
  setBtnNum: (num: number) => any;
}
const HeadingText = ({ btnNum, setBtnNum }: prop) => {
  const [radioNum, setRadioNum] = useState(1);
  const [indexNum, setIndexNum] = useState(1);
  useEffect(() => {
    setTimeout((indexNum: number) => {
      indexNum + 1;
    }, 1000);
  }, []);
  return (
    <div>
      <h1 className="text-xl text-left leading-6 font-semibold tracking-[-1.5%] mb-2.5   text-black">
        {btnNum === 1 ? (
          "Choose Your Path"
        ) : btnNum === 2 ? (
          "Solve Questions"
        ) : btnNum === 3 ? (
          <span className="flex gap-2 ">
            <p className="text-purple-500">{radioNum}/4.</p>
            <p> AI Review✨</p>
          </span>
        ) : (
          "Gamified Learning"
        )}
      </h1>
      <div className="w-8/10 text-left font-light text-[18px] text-[#333333]">
        {btnNum === 1 ? (
          <div>
            Choose your path and have a personalized roadmap . We offer :<br />
            <ol type="1" className="list-decimal ml-6 mt-2">
              <li>Pyspark</li>
              <li>Scala</li>
              <li>DBT</li>
              <li>Post gre SQL</li>
              <li>Python</li>
            </ol>
          </div>
        ) : btnNum === 2 ? (
          "Engage in real-world coding challenges and get instant feedback to enhance your skills."
        ) : btnNum === 3 ? (
          <span className="flex flex-col">
            "Engage in real-world coding challenges and get instant feedback to
            enhance your skills"
            <div className="mt-2 flex items-center gap-1">
              <RadioBtn
                radioNum={radioNum}
                setRadioNum={setRadioNum}
                indexNum={1}
              />
              <RadioBtn
                radioNum={radioNum}
                setRadioNum={setRadioNum}
                indexNum={2}
              />
              <RadioBtn
                radioNum={radioNum}
                setRadioNum={setRadioNum}
                indexNum={3}
              />
              <RadioBtn
                radioNum={radioNum}
                setRadioNum={setRadioNum}
                indexNum={4}
              />
            </div>
          </span>
        ) : (
          "Level up skills through challenges, rewards & competition. Making learning addictive & effective"
        )}
      </div>
    </div>
  );
};

export default HeadingText;
