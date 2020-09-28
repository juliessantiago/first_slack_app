//configurações da WebAPI Slack 
const { WebClient } = require("@slack/web-api");

const token = "xoxb-1392516091058-1416715350944-qCbjcdCs2pMLaUb7LmZUHTgh";
const web = new WebClient(token);

class SlackService {
  postTextMessage(messageArguments) {
    web.chat.postMessage(messageArguments);
  }
}

module.exports = new SlackService();