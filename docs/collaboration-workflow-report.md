# Collaboration Workflow Report

## 1) Issues Created
Three GitHub issues were created to represent separate development tasks, simulating a three-person team workflow.

- **Issue #2 – User Authentication**  
  Requested implementation of a login endpoint with input validation and proper API responses.

- **Issue #3 – Database Connection**  
  Requested creation of a database connection module and routes to interact with stored data.

- **Issue #4 – API Endpoints**  
  Requested REST API endpoints for users and a health-check endpoint.

Each issue was linked to its corresponding Pull Request using the `Closes #issue-number` syntax.

## 2) PR Summary (3 PRs)

- **PR 1: [Feature] User Authentication**  
  - Linked Issue: #2  
  - Key changes: Added authentication controller, login route, validation logic, and documentation.  
  - Screenshots included: Yes

- **PR 2: [Feature] Database Connection**  
  - Linked Issue: #3  
  - Key changes: Added file-based database connection module, database routes, and documentation explaining design decisions.  
  - Screenshots included: Yes

- **PR 3: [Feature] API Endpoints**  
  - Linked Issue: #4  
  - Key changes: Added REST API endpoints for users and health checks, updated shared README documentation.  
  - Screenshots included: Yes

## 3) Review Simulation Evidence
Each Pull Request received at least two review comments to simulate team collaboration. Review comments focused on code structure, documentation clarity, and design decisions.

One Pull Request (Database Connection) used the **Request changes** option. The requested changes included adding clarification about the limitations of a file-based database. These changes were addressed by updating the documentation and pushing a follow-up commit. After the fixes, the review was re-requested and approved.

Quality was ensured by reviewing code readability, confirming documentation accuracy, and verifying that the application ran correctly before merging.

## 4) Merge Strategy
All Pull Requests were merged using **Squash and merge**. This strategy was chosen because it keeps the `main` branch history clean and easy to understand by combining all feature work into a single, meaningful commit per feature.

o
