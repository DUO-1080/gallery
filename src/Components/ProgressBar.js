import { useEffect } from 'react';
import { motion } from 'framer-motion';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      className="progress-bar"
    />
  );
};

export default ProgressBar;
