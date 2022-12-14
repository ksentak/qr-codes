import { useState } from 'react';
import QRCode from 'react-qr-code';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisplayingQrCode, setIsDisplayingQrCode] = useState(false);
  const [qrValue, setQrValue] = useState('');

  const generateQrCode = (): void => {
    setIsDisplayingQrCode(false);
    setIsLoading(true);
    const isValidQr = validateQrValue();

    if (isValidQr) {
      setTimeout(() => {
        setIsLoading(false);
        setIsDisplayingQrCode(true);
      }, 1500);
    } else {
      setIsLoading(false);
      alert('Please enter a valid URL');
    }
  };

  const handleQrChange = (e: any): void => {
    setIsDisplayingQrCode(false);
    setQrValue(e.target.value);
  };

  const validateQrValue = (): boolean => {
    const urlRegex =
      '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
    const url = new RegExp(urlRegex, 'i');

    return qrValue.length < 2083 && url.test(qrValue);
  };

  return (
    <div className='App'>
      <header className='bg-blue-500 p-4 mb-10'>
        <div className='max-w-5xl m-auto'>
          <div className='text-xl font-bold text-white'>QR Code Generator</div>
        </div>
      </header>
      <main>
        <div className='flex align-center justify-center p-10 m-auto md:max-w-2xl'>
          <div className='w-full'>
            <h1 className='text-3xl font-bold mb-5 md:text-4xl text-center'>
              QR Code Generator
            </h1>
            <p className='mb-4'>
              QR Codes allow smartphone users to access your website quickly and
              simply.
            </p>
            <p>
              Enter your desired URL below to generate a QR Code and download
              the image.
            </p>
            <input
              className='w-full border-2 boder-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5 mt-4'
              type='url'
              placeholder='Enter a URL'
              value={qrValue}
              onChange={handleQrChange}
            />
            <button
              className='bg-gray-600 rounded w-full text-white py-3 px-4 mt-5 hover:bg-blue-500'
              onClick={generateQrCode}
            >
              Generate QR Code
            </button>
          </div>
        </div>
        <div className='flex align-center justify-center p-10 m-auto md:max-w-2xl'>
          {isLoading && <Spinner />}
          {qrValue && isDisplayingQrCode && <QRCode value={qrValue} />}
        </div>
      </main>
    </div>
  );
};

export default App;
