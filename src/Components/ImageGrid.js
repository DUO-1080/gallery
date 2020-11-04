/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { motion } from 'framer-motion';
import useStore from '../hooks/useStore';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useStore('images');
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((img) => (
          <motion.div
            key={img.id}
            className="img-card"
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(img.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={img.url}
              alt=""
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
