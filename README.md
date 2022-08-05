# cypress-issue-23108

In order to reproduce:

1. Clone this repository
2. Run `yarn` to install dependencies
3. Open the folder in VS Code
4. Follow the prompts to install the dev container extension and open the folder in the development container
5. Open a terminal inside VSCode which will open inside the dev container, we will need this for later
6. Now after the dev container has built and opened successfully in a terminal outside of VS Code go this directory and run `yarn cypress open`
7. Follow the prompts to run E2E tests and run the only spec present (I personally ran it in Chrome 103 but I don't think that's important)
8. The test should timeout in the standard 4000ms
9. Now relatively quickly go back to VSCode and in the terminal we opened earlier, type in the command `yarn serve`
10. Still relatively quickly go back to the Cypress browser that is open and press the button to rerun tests
11. Wait for (60 - however long you took to do the above 2 steps) seconds and your test should error during the cy.wait which is a bug
