import { useEffect, useState } from "react";

import "./App.scss";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const password = "1006";

function App() {
  const [pressedNumbers, setPressedNumbers] = useState<number[]>([]);
  const [correctPassword, setCorrectPassword] = useState<boolean>(false);
  const [wrongPassword, setWrongPassword] = useState<boolean>(false);

  useEffect(() => {
    if (pressedNumbers.length === password.length) {
      if (pressedNumbers.join("") === password) {
        setCorrectPassword(true);
        setWrongPassword(false);
      } else {
        setWrongPassword(true);
        setPressedNumbers([]);
      }
    }
  }, [pressedNumbers]);

  return (
    <>
      {correctPassword ? (
        <>
          <h3>Correct!</h3>
          <p>Welcome.</p>
        </>
      ) : (
        <div className="container">
          <div className="password">{pressedNumbers}</div>
          <ul>
            {numbers.map((number, index) => (
              <li className={number === 0 ? "zero" : ""} key={index}>
                <button
                  onClick={() => {
                    setPressedNumbers((current) => [...current, number]);
                  }}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
          {wrongPassword && (
            <>
              <p className="error">Wrong password, try again.</p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
