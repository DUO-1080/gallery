import { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setErr(null);
    } else {
      setFile(null);
      setErr('Please select an image file. (png | jpeg)');
    }
  };

  return (
    <form>
      <label htmlFor="file">
        <input type="file" id="file" accept="image/png,image/jpeg" onChange={handleChange} />
        <span className="plus">+</span>
      </label>
      <div className="output">
        {err && <div className="err"> {err} </div>}
        {file && <div className="filename">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
