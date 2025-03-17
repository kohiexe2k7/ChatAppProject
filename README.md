## Overview
This is an oversimplified chat app that was built using Node.js, Express, and Socket.io. I used sources like video tutorials, Reddit, chat apps created by others on GitHub, and GitHub Copilot to create this program.
Used VSCode for development.

## Features
- Scrollable chat
- Responsive design created using Bootstrap
- Real-time messaging
- Multiple users can chat independently

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/chat-app.git
    ```

2. Navigate to the project directory:
    ```sh
    cd chat-app
    ```

3. Type this in the "Terminal" to install the dependencies:
    ```sh
    npm install
    ```

## Usage
1. Go to the "Terminal" and type this to start the server:
    ```sh
    node server.js
    ```

2. Open your web browser and paste this link: `http://localhost:3000`.

3. Enter a message in the text area and click "Send Message" to send a message.

4. Messages will be displayed in the chat area. Messages sent by you will be aligned to the right, and messages received from others will be aligned to the left.

5. To clear all messages, click the "Restart" button. This will erase all previous messages from both the chat container and local storage.

## Project Structure
- `server.js`: The main server file that sets up the Express server and Socket.io.
- `index.html`: The main HTML file that contains the chat interface.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [GitHub.com](https://github.com/)
- [Reddit.com](https://www.reddit.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
