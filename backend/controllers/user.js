const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          pseudo: req.body.pseudo,  
          email: req.body.email,
          password: hash,
          admin: false,
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };
  
  exports.login = (req, res, next) => {
     User.findOne({ email: req.body.email })
         .then(user => {
             if (!user) {
                 return res.status(401).json({ error: 'Utilisateur non trouvé !' });
             }
             bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                         return res.status(401).json({ error: 'Mot de passe incorrect !' });
                     }
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