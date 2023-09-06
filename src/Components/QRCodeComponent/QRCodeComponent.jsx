import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');

  const generateQRCode = () => {
    setQRCodeValue(text);
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text for QR code"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeValue && (
        <div>
          <h3>QR Code:</h3>
          <QRCode value={qrCodeValue} />
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
