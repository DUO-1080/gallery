import { useEffect, useState } from 'react';
import { fireStorage, fireStore, timestamp } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = fireStorage.ref(file.name);
    const collection = fireStore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => setErr(err),
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);

        collection.add({ url, createdAt: timestamp() });
      }
    );
  }, [file]);

  return { progress, url, err };
};

export default useStorage;
