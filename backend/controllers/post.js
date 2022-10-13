const Post = require('../models/Post');

const fs = require('fs');

exports.getAllPost = (req, res, next) => {
    Post.find()
        .then(post => res.status(200).json(post))
        .catch(error => res.status(400).json({ error }));
}

exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({ error }));
};

exports.createPost = (req, res, next) => {
    
    // si il y a un fichier dans la requete on creer l'url de l'image
    const postObject = req.file ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    // on creer le post avec les diférent élement
    const post = new Post({
        ...postObject,
        userId: req.auth.userId,
        pseudo: req.auth.pseudo,
        likes: 0,
        date: Date.now(),
        usersLiked: [],
    });

    // on envois le post a la base via la methode SAVE
    post.save()
        .then(() => res.status(201).json({ 
            // on renvoies un message de confirmation avec le post enregistré
            message: 'Post engeristré !',
            post: post,
        }))
        .catch(error => res.status(400).json({ error }));

};

exports.modifyPost = (req, res, next) => {
    
    // si il y a un fichier dans la requete on creer l'url de l'image
    const postObject = req.file ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    // on recupère le post via l'id en paramatre avec la methode findOne
    Post.findOne({_id: req.params.id})
        .then((post) => {
            
            // on controle que l'user est authentifié comme admin ou créateur du post
            if(!req.auth.admin && post.userId != req.auth.userId){
                res.status(401).json({ message : 'Not authorized'});
            }else {
                // si la requete contient une image et que le post possédé deja une image
                // on supprime l'ancienne image du repertoire local
                if(req.file && post.imageUrl){
                    const filename = post.imageUrl.split('/images/')[1];
                    fs.unlink(`public/images/${filename}`, (err => {
                        if (err) console.log(err);
                        else {
                          console.log(`\n Deleted file: ${filename}`);
                        }
                    }))
                }
                
                // on envois les données a la base  via la methode updateOne
                Post.updateOne({_id: req.params.id}, {...postObject, _id: req.params.id})
                    .then(() => res.status(200).json({ 
                        // on renvoies un message de confirmation avec les modifications
                        message: 'Post modifié !',
                        post: postObject,                            
                    }))
                    .catch((error) => {
                        console.log(error);
                        res.status(401).json({ error })
                    });
            }
        })
        .catch(error => res.status(401).json({ error }));
};

exports.deletePost = (req, res, next) => {

    // on recupère le post via l'id en paramatre avec la methode findOne
    Post.findOne({ _id: req.params.id })
        .then(post => {
            // on controle que l'user est authentifié comme admin ou créateur du post
            if(!req.auth.admin && post.userId != req.auth.userId){
                res.status(401).json({ message: 'Not authorized' });
            }else {
                // on supprime l'ancienne image du repertoire local
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink(`public/images/${filename}`, () => {

                    // on supprime le poste de la base via la methode deleteOne
                    Post.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: 'Post supprimé !' })})
                        .catch(error => res.status(401).json({ error }));
                })
            }
        })
};

exports.checklikePost = (req, res, next) => {
    Post.findOne({_id: req.params.id})
        .then((post) => {
            const listUsersLiked = post.usersLiked;

            // on regarde si like vaut 0 ou 1
            switch(req.body.like){
                // si like vaut 1
                case 1:
                    // on regarde si il y a deja des likes
                    if(listUsersLiked.length != 0){
                        // on regarde si l'user fait partie des likes
                        for(let i=0; i < listUsersLiked.length; i++){
                            if(listUsersLiked[i] == req.auth.userId){
                                res.status(401).json({ message: 'Vous avez déjà liké ce post ! '});
                            }
                        };
                        
                        listUsersLiked.push(req.auth.userId);

                    }else {
                        listUsersLiked.push(req.auth.userId);
                    };

                    // on mets a jour le nombre de like et la liste des userId dans la base via la methode updateOne
                    Post.updateOne({_id: req.params.id}, {
                        likes: listUsersLiked.length,
                        usersLiked: listUsersLiked,
                    })
                    .then(() => res.status(200).json({ message: 'Votre avis est enregistré !'}))
                    .catch(error => res.status(401).json({ error }));

                    break;
                // si like vaut 0
                case 0:

                    // on recherche l'userId dans la liste et on le supprime 
                    for(let i=0; i < listUsersLiked.length; i++){
                        if(listUsersLiked[i]  == req.auth.userId){
                            listUsersLiked.splice(i,1);
                        }
                    };

                    // on mets a jour le nombre de like et la liste des userId dans la base via la methode updateOne
                    Post.updateOne({ _id: req.params.id}, {
                        likes: listUsersLiked.length,
                        usersLiked: listUsersLiked,
                    })
                    .then(() => res.status(200).json({ message: 'Votre avis est réinitialisé !'}))
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch(error => res.status(401).json({ error }));
}