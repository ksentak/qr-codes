import { useState } from 'react';
import QRCode from 'react-qr-code';

const App: React.FC = () => {
  const [qrValue, setQrValue] = useState('');

  return (
    <div className='App'>
      <h1>Hello</h1>
      <QRCode value={qrValue} />
    </div>
  );
};

export default App;
