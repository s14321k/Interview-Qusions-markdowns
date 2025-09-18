* [Git & GitHub Q\&A and Commands](#git--github-qa-and-commands)

---

# Git & GitHub Q\&A and Commands

---

<details open>
<summary><strong>1. Git vs GitHub</strong></summary>

* **Git:** A distributed version control system to track changes in source code during software development.
* **GitHub:** A web-based hosting service for Git repositories, providing collaboration tools, issue tracking, and more.
* You **can use Git without GitHub**, but GitHub requires Git to manage repositories.

</details>

---

<details>
<summary><strong>2. Create a New Repository on the Command Line</strong></summary>

```bash
echo "# Sarath69Kumar.github.io" >> README.md

git init
git add README.md        # Add single file
git add .                # Add all files (new and existing)
git commit -m "first commit"
git remote add origin git@github.com:s14321k/SbMsDocKub.git
git branch -M main       # Rename current branch to main
git push -u origin main  # Push to remote repository
```

---

If push or commit fails due to index.lock file:

```bash
rm -f .git/index.lock
```

</details>

---

<details>
<summary><strong>3. Push Contents to an Existing Repo</strong></summary>

```bash
cd /path/to/repo
git add .
git commit -m "commit message"
git branch -M branchName
git push -u origin main
```

---

**Common Git commands**

* Check local changes: `git status`
* Fetch remote changes (without merge): `git fetch`
* Pull remote changes and merge: `git pull`

</details>

---

<details>
<summary><strong>4. Navigate Directories in Git Bash</strong></summary>

* Go home directory: `cd` or `cd ~`
* Go up one directory: `cd ..`
* Go back to previous directory: `cd -`
* Go to root: `cd /`
* Navigate multiple levels: `cd ~/folder/subfolder/`

Example:

```bash
cd ~/Desktop
```

</details>

---

<details>
<summary><strong>5. Remove Files/Folders</strong></summary>

```bash
git checkout branch_name     # Ensure on correct branch
git rm -r folder-name        # Remove folder recursively
git commit -m "Remove folder"
git push origin branch_name
```

---

Rename files:

```bash
git mv oldfilename newfilename
git commit -m "Renamed file"
```

</details>

---

<details>
<summary><strong>6. Rollback Commit</strong></summary>

* Rollback last commit but keep changes staged:

```bash
git reset --soft HEAD~1
```

* Rollback last commit and discard changes:

```bash
git reset --hard HEAD~1
```

* Undo merge:

```bash
git reset --hard ORIG_HEAD
```

</details>

---

<details>
<summary><strong>7. Branch Management</strong></summary>

* Create a new branch:

```bash
git branch new-branch-name
```

* Create and switch to new branch:

```bash
git checkout -b new_branch_name
# or
git switch -c new_branch_name
```

* Check branch origin:

```bash
git reflog
```

* Compare two branches:

```bash
git merge-base current_branch comparing_branch
```

</details>

---

<details>
<summary><strong>8. SSH Key Generation for GitHub</strong></summary>

Generate SSH key:

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

* Press enter to accept default file location.
* Enter a passphrase or leave blank.
* Add generated public key (`id_ed25519.pub`) to GitHub at [https://github.com/settings/ssh/new](https://github.com/settings/ssh/new).

List `.ssh` folder:

```bash
ls -al ~/.ssh
```

</details>

---

<details>
<summary><strong>9. Pushing to Codeberg (or other Git hosting)</strong></summary>

```bash
touch README.md
git init
git checkout -b main
git add README.md
git commit -m "first commit"
git remote add origin https://codeberg.org/username/repository.git
git push -u origin main
```

---

Push existing repo:

```bash
git remote add origin https://codeberg.org/username/repository.git
git push -u origin main
```

</details>

---

<details>
<summary><strong>10. Using Git in IDE (e.g., IntelliJ)</strong></summary>

* Clone repository via VCS > Git > paste clone URL > Clone.
* Switch branches via bottom-right corner branch icon.
* Use `Ctrl+Shift+R` to find/replace in project.
* Use commit tab to select files, commit and push.

</details>

---

<details>
<summary><strong>11. NPM Commands</strong></summary>

* Install packages with offline mode and no audit:

```bash
npm install --prefer-offline --no-audit
```

* Show npm config:

```bash
npm config list
```

* Update npm globally:

```bash
npm install npm -g
```

* List globally installed packages:

```bash
npm list -g --depth=0
```

* Show outdated packages:

```bash
npm outdated
```

</details>

---

<details>
<summary><strong>12. Git Pull vs Fetch</strong></summary>

| Command     | Description                                                                    | Use case                                 |
| ----------- | ------------------------------------------------------------------------------ | ---------------------------------------- |
| `git fetch` | Downloads changes from remote but **does not merge** into your working branch. | Review changes before merging. Safer.    |
| `git pull`  | Downloads changes and **immediately merges** into your current branch.         | Quick update and merge. More convenient. |

---

**Summary:**

* Fetch = get changes only
* Pull = get + merge changes

Use fetch to review first, pull to update fast.

</details>

---


Sure! Here’s a **step-by-step Git beginner tutorial** in a clear, friendly way:

<details>
<summary><strong>Step 1: Install Git</strong></summary>

* Download Git from [git-scm.com](https://git-scm.com/downloads) and install it on your computer.
* After installation, you can use Git via command line (Git Bash on Windows) or GUI tools like GitHub Desktop.

</details>

<details>
<summary><strong>Step 2: Configure Git</strong></summary>

Open your terminal or Git Bash and set your identity so Git knows who you are:

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

This info will appear in your commits.

</details>

<details>
<summary><strong>Step 3: Create a New Repository</strong></summary>

To create a new Git repository in an existing folder:

```bash
cd your-project-folder
git init
```

This starts tracking files in that folder.

</details>

<details>
<summary><strong>Step 4: Stage and Commit Changes</strong></summary>

1. Add files to the staging area (preparing them for commit):

```bash
git add filename.txt          # add a single file
git add .                    # add all new and changed files
```

2. Commit your changes with a message:

```bash
git commit -m "Add initial project files"
```

Each commit is like a snapshot of your project.

</details>

<details>
<summary><strong>Step 5: Connect to a Remote Repository</strong></summary>

If you want to push your code to GitHub or any Git server:

```bash
git remote add origin git@github.com:username/repo.git
```

Replace the URL with your repo URL.

</details>

<details>
<summary><strong>Step 6: Push Changes to Remote</strong></summary>

Send your commits to the remote server:

```bash
git push -u origin main
```

The `-u` sets the upstream branch so next pushes can be done simply by `git push`.

</details>

<details>
<summary><strong>Step 7: Pull Latest Changes</strong></summary>

To update your local repo with changes from remote:

```bash
git pull
```

This fetches and merges remote changes.

</details>

---

Great! Here’s a clear, friendly explanation of **branching and merging in Git** with collapsible sections:

<details>
<summary><strong>What is a Branch?</strong></summary>

* A **branch** is a separate line of development in your project.
* Think of it like a parallel universe where you can try new features or fixes without affecting the main code.
* The default branch is usually called `main` or `master`.

</details>

<details>
<summary><strong>Why Use Branches?</strong></summary>

* To work on new features independently.
* To fix bugs safely.
* To experiment without breaking the stable code.
* To collaborate with others without conflict.

</details>

<details>
<summary><strong>How to Create and Switch Branches</strong></summary>

1. **Create a new branch:**

```bash
git branch feature-branch
```

2. **Switch to the new branch:**

```bash
git checkout feature-branch
```

Or combine both in one command:

```bash
git checkout -b feature-branch
```

From Git 2.23+, you can also use:

```bash
git switch -c feature-branch
```

</details>

<details>
<summary><strong>Check Which Branch You Are On</strong></summary>

```bash
git branch
```

The current branch will be highlighted with a `*`.

</details>

<details>
<summary><strong>Make Changes and Commit on Your Branch</strong></summary>

Just like usual:

```bash
git add .
git commit -m "Add new feature"
```

These commits stay isolated on your branch.

</details>

<details>
<summary><strong>Merging Branches</strong></summary>

When your feature or fix is ready, merge your branch into another branch (usually `main`):

1. Switch to the branch you want to merge into:

```bash
git checkout main
```

2. Merge the feature branch:

```bash
git merge feature-branch
```

This will bring all the commits from `feature-branch` into `main`.

</details>

<details>
<summary><strong>Resolving Merge Conflicts</strong></summary>

* Sometimes Git can’t automatically merge files because of conflicting changes.
* You will see conflict markers like `<<<<<<`, `======`, `>>>>>>`.
* You need to manually edit the files to resolve conflicts.
* After fixing, add and commit:

```bash
git add conflicted-file.txt
git commit -m "Resolve merge conflict"
```

</details>

<details>
<summary><strong>Deleting a Branch After Merge</strong></summary>

If you no longer need the feature branch:

```bash
git branch -d feature-branch
```

If the branch is not merged and you want to force delete:

```bash
git branch -D feature-branch
```

</details>

---

Awesome! Here’s a clear and friendly explanation of **Git Rebase** with collapsible markdown:

<details>
<summary><strong>What is Git Rebase?</strong></summary>

* Git rebase is a way to **reapply commits from one branch onto another base commit**.
* Instead of merging branches with a merge commit, rebase **rewrites history** by moving your branch’s commits on top of another branch.
* It helps keep a **clean, linear commit history**.

</details>

<details>
<summary><strong>Why Use Rebase?</strong></summary>

* To keep commit history simple and linear.
* To avoid unnecessary merge commits.
* To update your feature branch with the latest changes from the main branch before merging.
* Makes reviewing history easier.

</details>

<details>
<summary><strong>How to Use Rebase</strong></summary>

Suppose you’re working on `feature-branch` and want to update it with the latest `main` branch changes:

1. Checkout your feature branch:

```bash
git checkout feature-branch
```

2. Rebase on top of `main`:

```bash
git rebase main
```

This takes your feature commits and reapplies them after the latest commits from `main`.

</details>

<details>
<summary><strong>What Happens During Rebase?</strong></summary>

* Git **temporarily saves** your commits.
* Resets your branch to point at the target branch (`main`).
* Reapplies your commits one by one on top of `main`.
* If there are conflicts, Git pauses and asks you to resolve them.

</details>

<details>
<summary><strong>Resolving Conflicts During Rebase</strong></summary>

* Git will stop on a conflicted commit and show which files have conflicts.
* Fix the conflicts manually.
* Stage the resolved files:

```bash
git add conflicted-file.txt
```

* Continue the rebase:

```bash
git rebase --continue
```

* To abort the rebase and go back to the original state:

```bash
git rebase --abort
```

</details>

<details>
<summary><strong>Rebase vs Merge</strong></summary>

| Feature           | Merge                                          | Rebase                                                         |
| ----------------- | ---------------------------------------------- | -------------------------------------------------------------- |
| History           | Creates a merge commit, keeps branch structure | Rewrites commits to create linear history                      |
| Commit Graph      | Branching and merging shown                    | Linear commit history                                          |
| Conflict Handling | Conflicts handled once during merge            | Conflicts may need to be resolved multiple times during rebase |
| Use Case          | Good for preserving full history               | Good for clean history before merging feature branches         |

</details>

<details>
<summary><strong>When NOT to Rebase</strong></summary>

* Don’t rebase commits that have already been pushed to a shared/public repository — it rewrites history and can cause problems for others.
* Safe to rebase only your **local** branches or branches that nobody else is using yet.

</details>

---



