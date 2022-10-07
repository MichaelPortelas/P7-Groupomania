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
    
    const postObject = req.file ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    const post = new Post({
        ...postObject,
        userId: req.auth.userId,
        pseudo: req.auth.pseudo,
        likes: 0,
        date: Date.now(),
        usersLiked: [],
    });

    post.save()
        .then(() => res.status(201).json({ 
            message: 'Post engeristré !',
            post: post,
        }))
        .catch(error => res.status(400).json({ error }));

};

exports.modifyPost = (req, res, next) => {
    
    const postObject = req.file ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    Post.findOne({_id: req.params.id})
        .then((post) => {
            console.log(post);
            if(!req.auth.admin && post.userId != req.auth.userId){
                res.status(401).json({ message : 'Not authorized'});
            }else {
                if(req.file && post.imageUrl){
                    const filename = post.imageUrl.split('/images/')[1];
                    fs.unlink(`public/images/${filename}`, (err => {
                        if (err) console.log(err);
                        else {
                          console.log(`\n Deleted file: ${filename}`);
                        }
                    }))
                }
                
                Post.updateOne({_id: req.params.id}, {...postObject, _id: req.params.id})
                    .then(() => res.status(200).json({ 
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

    Post.findOne({ _id: req.params.id })
        .then(post => {
            if(!req.auth.admin && post.userId != req.auth.userId){
                res.status(401).json({ message: 'Not authorized' });
            }else {
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink(`public/images/${filename}`, () => {
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

            switch(req.body.like){
                case 1:
                    if(listUsersLiked.length != 0){
                        for(let i=0; i < listUsersLiked.length; i++){
                            if(listUsersLiked[i] == req.auth.userId){
                                res.status(401).json({ message: 'Vous avez déjà liké cette sauce ! '});
                            }
                        };
                        
                        listUsersLiked.push(req.auth.userId);

                    }else {
                        listUsersLiked.push(req.auth.userId);
                    };

                    Post.updateOne({_id: req.params.id}, {
                        likes: listUsersLiked.length,
                        usersLiked: listUsersLiked,
                    })
                    .then(() => res.status(200).json({ message: 'Votre avis est enregistré !'}))
                    .catch(error => res.status(401).json({ error }));

                    break;
                case 0:
                    for(let i=0; i < listUsersLiked.length; i++){
                        if(listUsersLiked[i]  == req.auth.userId){
                            listUsersLiked.splice(i,1);
                        }
                    };

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