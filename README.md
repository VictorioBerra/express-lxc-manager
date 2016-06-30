
# express-lxc-manager

### A sample web app for managing linux containers (LXC)

I created the application as a self-motivated project to keep up my NodeJS skillset.

## Important notes

- You will probably need to run this as root. If you dont want to do that there is a way to create a new user for running your lxc containers using a bleeding edge feature called "unprivileged containers"
- No auth yet, its just a sample app. However, generating a JWT and exposing it at the console on runtime for the user to pass as a query string param would be trivial to add.


## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.

## TODO
- Authentication
- Form validation
- Confirmations (one flash?)

- Starting/Stopping
- Freezing/Unfreezing
- Snapshots
- ip addresses?