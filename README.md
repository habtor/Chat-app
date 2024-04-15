# Chat-app
This application was created as a practice to improve my skills by createing a full-stack MERN application that use `socket.io` to make a real-time application.

## 1. Setup

First, we have to install all packages in the main folder, we run:

`npm install`

`cd front;npm install`

The first command will install the backend packages and the second will install all fronend packages.

In the main folder you have to create `.env` file and put your variables as:
- `PORT = 5000`
- `MONGO_DB_URL= {your MongoDB key}`
- `JWT_SECRET={your jwt secret}`
- `NODE_ENV = development`

To run the app you can run the following command in the main directory:

- `npm start`

## 2. Stack / external libraries

The base stack of the app is a MERN stack (Mongoose, Express, React, Node). Next to that we make use of the following extras:

### 2.1 Configuration libraries

- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `concurrently` || To run commands in parallel. See [docs](https://github.com/open-cli-tools/concurrently#readme)

### 2.2 Client-side libraries
- `react-hot-toast` || To display error messages to users. See [docs](https://www.npmjs.com/package/react-hot-toast)
- `react-icons` || Some icons for the app. See [docs](https://react-icons.github.io/react-icons/)
- `socket.io-client` || Used for real-time messaging (this is client API). See [docs](https://socket.io/docs/v4/client-api/)
- `zustand` || To manage states of our components. See [docs](https://github.com/pmndrs/zustand)

### 2.3 Server-side libraries
- `nodemon` || To automatically restart the server when in development mode. See [docs](https://nodemon.io/)
- `bcryptjs` || To encrypt the password. See [docs](https://nodemon.io/)
- `cors` || To open up our API. See [docs](https://github.com/expressjs/cors#readme)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)
- `cookie-parser` || To parse cookies. See [docs](https://www.npmjs.com/package/cookie-parser)
- `express` || To run the backend. See [docs](https://expressjs.com/)
- `jsonwebtoken` || For authentication. See [docs](https://jwt.io/)
- `socket.io` || For real-time messaging (for the backend). See [docs](https://socket.io/docs/v4/server-api/)


- Chat with your contact
<img src="https://res.cloudinary.com/domvgm4cs/image/upload/v1711886083/contact_j4nvw9.png">

<hr>

- Chat in group
<img src="https://res.cloudinary.com/domvgm4cs/image/upload/v1711886084/group_qxij37.png">

<hr>

- Responsive design

<img style="width: 24em;" align="left" src="https://res.cloudinary.com/domvgm4cs/image/upload/v1711886083/group-small_hh0ndf.png">
<img style="width: 24em;" src="https://res.cloudinary.com/domvgm4cs/image/upload/v1711886084/first_z32vyb.png">

<hr>

- Update profile and error dispaly with __toast__

<img style="width: 24em;" align="left" src="https://res.cloudinary.com/domvgm4cs/image/upload/v1711886084/contact-update_zggsdz.png">
<img style="width: 24em;"  src="https://res.cloudinary.com/domvgm4cs/image/upload/v1711886508/toast_oo8seb.png">

<hr>

- Update group
  
<img style="width: 24em;" src="https://res.cloudinary.com/domvgm4cs/image/upload/v1711886083/group-update_lt6ejn.png">
