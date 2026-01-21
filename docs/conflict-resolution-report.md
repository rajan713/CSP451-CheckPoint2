# Conflict Resolution Report (≈300 words)

## 1) Conflict Scenario
The merge conflict occurred in the file `src/app.js`. The branches involved were
`feature/database-connection` and `feature/api-endpoints`. Both branches modified
the same section of the application where routes are imported and registered
with the Express app.

The database connection branch added a database route and related middleware,
while the API endpoints branch added user-related and health-check routes.
Because these changes were made to the same lines in the same file, Git was
unable to automatically merge the branches into `main`.

## 2) What You Saw
When attempting to merge the branches, Git displayed conflict markers in
`src/app.js`, including `<<<<<<< HEAD`, `=======`, and `>>>>>>> feature/database-connection`.
These markers showed two competing versions of the same code block, one from
each feature branch. A screenshot was captured showing these conflict markers
before resolution, as required by the assignment.

## 3) Resolution Strategy
The conflict was resolved manually by carefully reviewing both versions of the
code inside the conflict markers. Instead of choosing one version over the
other, the necessary logic from both branches was preserved. All conflict marker
lines were removed, while the route imports and `app.use()` statements from both
features were combined into a single, clean implementation.

After resolving the conflict, the application was tested locally by running
`npm run dev` to confirm that the server started correctly and all routes were
registered without errors.

## 4) Prevention Methods
In a real development team, this type of conflict can be reduced by creating
smaller and more focused pull requests, communicating before making changes to
shared files, and avoiding editing the same lines across multiple branches.
Regularly merging or rebasing from the `main` branch can also help detect
conflicts earlier. Clear ownership of core files and early code reviews further
reduce the likelihood of complex merge conflicts.

