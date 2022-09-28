# P7-Groupomania

Ce repo contient le code de l'API Groupomania Projet 7 ------.

## Lancer l'API en local
Pour cela :
1. Faites un `git clone https://github.com/MichaelPortelas/P7-Groupomania.git`
2. Allez dans le dossier `backend`
3. Installez les `node_modules` avec `yarn install`
4. Faites tourner l'API avec `nodemon server`
5. Vérifier le lancement de l'API sur `http://localhost:3000`

## Consommer l 'API
L'API Groupomania est une API REST.
Une fois lancée, cette API met plusieurs routes à votre disposition :

- La route pour créer un utilisateur  
`POST /api/auth/signup`  
Prend en parametre `{ pseudo: String , email: String , password: String } `  
Retourne `{ message: String }`

- La route pour connecter un utilisateur  
`POST /api/auth/login`  
Prend en parametre `{ email: String , password: String } `  
Retourne `{ userId: String , token: String }`

- La route pour récuperer tous les posts  
`GET /api/posts`  

- La route pour recupérer le detail d'un post  
`GET /api/posts/{id}`  

- La route pour créer un post  
`POST /api/posts`  
Prend en parametre `{ post: String , image: File } `  
Retourne `{ message: String }`

- La route pour mettre à jour un post  
`PUT /api/post/{id}`  
Prend en parametre soit `post au format JSON` soit `{ post: String , image: File }`  
Retourne `{ message: String}`

- La route pour supprimer un post  
`DELETE /api/post/{id}`  
Retourne `{ message: String}`

- La route pour Liker un post  
`POST /api/posts/{id}/like`  
Prend en parametre `{ userId: String , like: Number } `  
Retourne `{ message: String}`  