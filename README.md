# P7-Groupomania

Ce repo contient le frontend et le backend du Projet 7 Groupomania  ------.

## Recupérer le projet
Pour cela :
1. Faites un `git clone https://github.com/MichaelPortelas/P7-Groupomania.git`

## Lancer l'API en local
1. Allez dans le dossier `backend`
2. Initialiser avec `yarn install`
3. Creer un fichier .env avec comme variable PORT={n° du port} et MOONGOSEDB={lien de connection à votre DB}
4. Faites tourner l'API avec `yarn devstart`
5. Vérifier le lancement de l'API sur [http://localhost:3000](http://localhost:3000)

## Lancer le SITEWEB en local
1. Allez dans le dossier `frontend`
2. Initialiser avec `yarn install`
3. Lancez le frontend avec `yarn start`
4. Le site web doit ce lancer automatiquement.

## Consommer l 'API
L'API Groupomania est une API REST.
Une fois lancée, cette API met plusieurs routes à votre disposition :

- La route pour créer un utilisateur  
`POST /api/auth/signup`  
Prend en Corps `{ pseudo: String , email: String , password: String } `  
Retourne `{ message: String }`

- La route pour connecter un utilisateur  
`POST /api/auth/login`  
Prend en Corps `{ email: String , password: String } `  
Retourne `{ userId: String, pseudo: String, admin: Boolean , token: String }`

- La route pour récuperer tous les posts  
`GET /api/posts` 
Retourne `{posts}`

- La route pour recupérer le detail d'un post  
`GET /api/posts/{id}`
Retourne `{post}`

- La route pour créer un post  
`POST /api/posts`  
Prend en Corps `{ post: String , image: File } `  
Retourne `{ message: String, post: {post} }`

- La route pour mettre à jour un post  
`PUT /api/post/{id}`  
Prend en Corps soit `{ post: String } ` soit `{ post: String , image: File }`  
Retourne `{ message: String, post: {modifs} }`

- La route pour supprimer un post  
`DELETE /api/post/{id}`  
Retourne `{ message: String}`

- La route pour Liker un post  
`POST /api/posts/{id}/like`  
Prend en Corps `{ like: Number } `  
Retourne `{ message: String}`  