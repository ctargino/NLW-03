import multer from 'multer';
import path from 'path'; //utiliza o path pois os caminhos em sistemas windows, linux e mac são escritos de forma diferentes

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    },
  })
};