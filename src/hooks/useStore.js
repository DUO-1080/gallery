const { useState, useEffect } = require('react');
const { fireStore } = require('../firebase/config');

const useStore = (collection) => {
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    const unsubscribe = fireStore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        const images = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setDocs(images);
      });

    return () => unsubscribe();
  }, [collection]);

  return { docs };
};

export default useStore;
