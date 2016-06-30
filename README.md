
# express-lxc-manager

### A sample web app for managing linux containers (LXC)

I created the application as a self-motivated project to keep up my NodeJS skillset.

## Important notes

- You will probably need to run this as root. If you dont want to do that there is a way to create a new user for running your lxc containers using a bleeding edge feature called "unprivileged containers"
- No auth yet, its just a sample app. However, generating a JWT and exposing it at the console on runtime for the user to pass as a query string param would be trivial to add.


## Running

1) clone
2) npm-install
3) npm run


## TODO
- Authentication
- Form validation
- Confirmations (one flash?)

- Starting/Stopping
- Freezing/Unfreezing
- Snapshots
- ip addresses?