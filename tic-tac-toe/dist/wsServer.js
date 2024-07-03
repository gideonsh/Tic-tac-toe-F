"use strict";
// import { Server, WebSocket } from "ws";
// import { joinGame, playMove } from "./services/gameService";
// const wss = new Server({ noServer: true });
// interface WebSocketWithId extends WebSocket {
//   id?: string;
// }
// wss.on("connection", (ws: WebSocketWithId) => {
//   ws.on("message", (message: string) => {
//     const parsedMessage = JSON.parse(message);
//     if (parsedMessage.type === "join") {
//       const result = joinGame();
//       if ("error" in result) {
//         ws.send(JSON.stringify({ error: result.error }));
//       } else {
//         ws.id = result.playerId;
//         ws.send(JSON.stringify(result));
//       }
//     } else if (parsedMessage.type === "move") {
//       const { playerId, move } = parsedMessage;
//       const result = playMove(playerId, move);
//       if ("error" in result) {
//         ws.send(JSON.stringify({ error: result.error }));
//       } else {
//         wss.clients.forEach((client) => {
//           if (client.readyState === WebSocket.OPEN) {
//             client.send(JSON.stringify(result));
//           }
//         });
//       }
//     }
//   });
// });
// export default wss;
