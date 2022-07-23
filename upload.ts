import multer from "multer";

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, 'user.jpg');
  }
});

const uploads = multer({ storage: storage });

export default uploads ;