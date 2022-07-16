import { useState } from 'react';

export const Input: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <span>{name}</span>
    </>
  );
};
