# Horse betting App

It's small web app which I extended just in self improvement purpose.

## Source code of this task:

[https://github.com/zakhar-bozhok-jito/jun-frontend-test-task](https://github.com/zakhar-bozhok-jito/jun-frontend-test-task)

Information about distance run by horses is available from a locally running server (http://localhost:3002).

---

## Stack:

- React (create-react-app)
- TypeScript
- Socket.io - to connect to the server
  <br/>
  [https://socket.io/how-to/use-with-react-hooks](https://socket.io/how-to/use-with-react-hooks) - Socket.io React DOCs

  [https://www.youtube.com/watch?v=djMy4QsPWiI&ab_channel=PedroTech](https://www.youtube.com/watch?v=djMy4QsPWiI&ab_channel=PedroTech) - Youtube tutorial for quick start

- Tailwind

---

### How to run the server:

`cd server && npm install && npm run start`
You can visit [http://localhost:3002](http://localhost:3002) to check that the service is working correctly and inspect the data it produces.

---

### How to run you web application

`cd client && npm install && npm run start`
You can visit [http://localhost:3000](http://localhost:3000) to check that web app is working correctly.

---

### Quick Heroku setup guide:

[https://medium.com/karolis-stulgys/deploy-client-and-server-code-to-heroku-from-a-single-git-repo-44c5b65da10a](https://medium.com/karolis-stulgys/deploy-client-and-server-code-to-heroku-from-a-single-git-repo-44c5b65da10a)

---

### WebApp (client folder) is hosted on Heroku:

[https://racing-horses-client.herokuapp.com/](https://racing-horses-client.herokuapp.com/)

### This Server (server folder) is hosted on Heroku:

[https://racing-horses-server.herokuapp.com/](https://racing-horses-server.herokuapp.com/)

---

### How does the app work:

- Simple Start Race button in middle of screen. A
- After pressing the button is connecting socket.io, you emitting event `socket.emit('start')`, it emit's to server.
- After that in useEffect you waiting for 'response' event `socket.on('ticker', (data: Horse[]) => { setHorses(data); })` where you have access to data.

## Author of this task / Inspired by :

[https://github.com/zakhar-bozhok-jito](https://github.com/zakhar-bozhok-jito)
