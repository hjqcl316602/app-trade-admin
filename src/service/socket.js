

import {BASEURL} from './http'

//let Stomp = require("stompjs");

//let SockJS = require("sockjs-client");


export default function(url='chat/chat-webSocket'){

  let stompClient = null;

  let http = BASEURL + url ;
  
  let socket = new SockJS(http);
  
  stompClient = Stomp.over(socket);
  
  stompClient.debug = false;
  
  return stompClient
}