const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
        // on récupère le token dans le header de la requête
        const token = req.headers.authorization.split(' ')[1];

        // on decode le token avec la clef via la methode verify de JWT
        const decodedToken = jwt.verify(token, 'KSkCQocJLzlx1-UkEaOtjKcrH0oP5C1bWadvVAqOeNHr7yL7eTd6GX80DvQ1cFh7FVZQ');

        // on récupère les element decodé
        const userId = decodedToken.userId;
        const pseudo = decodedToken.pseudo;
        const admin = decodedToken.admin;

        // on remplie la requete AUTH avec les element décodé
        req.auth = {
            userId: userId,
            pseudo: pseudo,
            admin: admin,
        };
	    next();

    } catch(error) {
        res.status(401).json({ error });
    }
};