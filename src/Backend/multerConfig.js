import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits: { fieldSize: 25 * 1024 * 1024 } });


export default upload;