const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // on donne le dossier de destination de l'image
        callback(null, 'public/images');
    },
    filename: (req, file, callback) => {
        //on remplace les espace par des _ dans le nom original de l'image
        const name = file.originalname.split(' ').join('_');

        //on detecte l'extention du fichier
        const extension = MIME_TYPES[file.mimetype];

        //on créer un nom unique avec (nouveau Nom + timestamp + extension)
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({storage: storage}).single('image');