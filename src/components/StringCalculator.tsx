import React, { useState } from 'react';
import { add } from '../StringCalculator';

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setResult(null);
        setError(err.message);
      } else {
        setResult(null);
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Enter numbers separated by commas or new lines"
        rows={10}
        cols={30}
      />
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default StringCalculator;
