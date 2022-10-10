const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.signup = (req, res, next) => {
    // on encrypte avec 10 passe le mdp recu
    bcrypt.hash(req.body.password, 10)
      .then(hash => {

        // on créer le nouvel user
        const user = new User({
          pseudo: req.body.pseudo,  
          email: req.body.email,
          password: hash,
          admin: false,
        });

        // on enregistre l'user dans la base via la mathode SAVE
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };
  
  exports.login = (req, res, next) => {
    // on recheche l'user via sont email avec la methode findOne
     User.findOne({ email: req.body.email })
         .then(user => {
            // si il n'existe pas on renvoie une erreur générique WCAG
             if (!user) {
                 return res.status(401).json({ error: 'Identification incorrect !' });
             }

             // on compare le mot de passe envoyé a celui de la base
             bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    // si il n'est pas valide on renvoie une erreur générique WCAG
                    if (!valid) {
                         return res.status(401).json({ error: 'Identification incorrect !' });
                    }
                    
                    // on renvois l'id, le pseudo, le status admin ainsi qu'un token d'authentification.
                    res.status(200).json({
                        userId: user._id,
                        pseudo: user.pseudo,
                        admin: user.admin,
                        token: jwt.sign(
                        { 
                            userId: user._id,
                            pseudo: user.pseudo,
                            admin: user.admin,                                 
                        },
                            'KSkCQocJLzlx1-UkEaOtjKcrH0oP5C1bWadvVAqOeNHr7yL7eTd6GX80DvQ1cFh7FVZQ',
                            { expiresIn: '24h' }
                        ),
                    });
                 })
                 .catch(error => res.status(500).json({ error }));
         })
         .catch(error => res.status(500).json({ error }));
  };