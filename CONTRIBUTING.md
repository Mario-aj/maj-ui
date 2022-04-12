# @maj/react-ui Contributing Guide

<p align="center">Hi! I'm really excited that you are interested in contributing to @maj/react-ui. Before submitting your contribution, please make sure to take a moment and read through the following this guideline</p>

## Issue Reporting

- Always before opening a new PR, you need to create a new issue explaining the purpose of the PR.

## Pull Request Guidelines

- Firstly you need to clone or fork this repository.

- The main branch is just a snapshot of the latest stable release. All development should be done in dedicated branches. Do not submit PRs against the main branch.

- Work in the src folder and DO NOT checkin dist in the commits.

- It's OK to have multiple small commits as you work on the PR.

- Make sure `npm run lint` or `yarn run lint` passes in local and remote.

### Create new branch

1. `git pull --rebase origin dev` to ensure you have the latest dev code.
2. `git checkout -b type/the-name-of-branch`.

   #### Type

   - Replacing type with one of these:
     1. `docs` when your changes are related to documentation(README, CONTRIBUTING, ect...).
     2. `feature` When your changes are related to new features and functionalities.
     3. `fix` When your changes are related to fix any bug.

   #### Name of branch

   - Replacing `the-name-of-branch` with a suitable name.

### Make the change

- Write your code.

### Testing the changes

1. Save all files and check in the real <a href="https://reactjs.org/docs/getting-started.html">reactjs</a> project.
2. Run `yarn lint` or `npm run lint` from the project root. (This will run ESLint).

### Push the changes

1. `git add --all && git commit -m "My message"` (replacing My message with a commit message to stage and commit your changes).
2. `git push origin type/the-name-of-branch` to send your changes to the remote repo.
3. Go to the `@maj/react-ui` repo and you should see recently pushed branches.
4. Follow GitHub's instructions to open your branch.
5. Add `description, code example, reviewrs, labels, assignees`.
6. wait for review from other contributors.
