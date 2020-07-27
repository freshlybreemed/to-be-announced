import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const importQR = () => import('react-qr-reader');

const QrReader = dynamic(importQR, {
  ssr: false,
});
export const ScanTicket: React.FunctionComponent = () => {
  const [result, setResult] = useState<string>('');
  const [facing, setFacing] = useState<boolean>(true);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <button onClick={() => setFacing(!facing)}>GO</button>
      <div className="w-80">
        <QrReader
          delay={300}
          facingMode={facing ? 'user' : 'environment'}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      </div>
      <p>{result}</p>
    </div>
  );
};
