import { useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  let [count, setCount] = useState(0);
  const handleClickIn = () => {
    setCount(count + 1);
  };
  const handleClickDe = () => {
    setCount(count - 1);
  };
  return (
    <div className={s.counterContainer}>
      <div className={s.counterNumber}>{count}</div>
      <div className={s.counterButtons}>
        <button className={s.counterButtonIn} onClick={handleClickIn}>
          Increase
        </button>
        <button className={s.counterButtonDe} onClick={handleClickDe}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
