import { useRef, useState } from "react";

export function UserForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [QR, setQR] = useState("");

  function handleSubmit() {
    if (inputRef.current) {
      setQR(inputRef.current.value);
    }
  }

  return (
    <div data-testId="user-form">
      <h1>enter url and click to get QR code</h1>
      <input ref={inputRef} type="text" name="QRCode" />
      <button onClick={handleSubmit}>verify</button>
      <div>
        {QR && (
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${QR}&size=pixels]x[pixels`}
            alt="QR"
          />
        )}
      </div>
    </div>
  );
}
