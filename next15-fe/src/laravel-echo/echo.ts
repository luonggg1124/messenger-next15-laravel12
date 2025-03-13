import Echo from "laravel-echo";
import dotenv from "dotenv";
import Pusher from "pusher-js";
dotenv.config();
declare global {
  interface Window {
    Pusher: any;
    Echo: any;
  }
}
const echo = new Echo({
  broadcaster: "pusher",
  key: process.env.PUSHER_APP_KEY, 
  wsHost: process.env.PUSHER_HOST || "127.0.0.1",
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
  enabledTransports: ["ws", "wss"],
  authEndpoint: "http://127.0.0.1/api/broadcasting/auth", 
  auth: {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`, 
    },
  },
});
if (typeof window !== "undefined") {
  window.Pusher = Pusher;
  window.Echo = echo;
}
