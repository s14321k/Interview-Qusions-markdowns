## Question and answers
### 1. Git vs Github
- Git is a version control. Github is a web-based hosting service for git repositories
- We can run git without github, but not github without git.

---

## Create a new repository on the command line
echo "# Sarath69Kumar.github.io" >> README.md
```
git init
git add README.md	//	For single file
git add .			//	To push all the files like new and existing at once
git commit -m "first commit"
git remote add origin git@github.com:s14321k/SbMsDocKub.git
git branch -M main	// This is used to rename the current branch. -M will force do the rename if the branch name is already main
git push -u origin main	//Push changes to repository
```

## Push the contents to the existing repo
```bash
cd ./go to the respective directory
cd add .	//To add all the files
cd comit -m "commit message"
git branch -M branchName
git push -u origin main
```

If commit can't be done
`Delete index.lock in-->repositoryFolder/.git/index.lock`

https://www.earthdatascience.org/courses/intro-to-earth-data-science/open-reproducible-science/bash/bash-commands-to-manage-directories-files/

https://www.geeksforgeeks.org/working-on-git-bash/#:~:text=Step%201%3A%20Go%20to%20Github,local%20repository%20will%20be%20pushed.&text=Step%203%3A%20Push%20the%20changes%20in%20your%20local%20repository%20to%20GitHub.&text=Here%20the%20files%20have%20been,master%20branch%20of%20your%20repository.

https://www.atlassian.com/git/tutorials/merging-vs-rebasing#workflow-walkthrough

First time opening Bash:
```
SARATH-555@SARATH-555 MINGW64 ~
$ ls
'3D Objects'/         IntelGraphicsProfiles/                                                                         NetHood@        Templates@
AppData/             Links/                                                                                         OneDrive/       Videos/
'Application Data'@  'Local Settings'@                                                                               Pictures/       eclipse/
Contacts/            Music/                                                                                         PrintHood@      jee-2020-06/
Cookies@            'My Documents'@                                                                                 Recent@         jee-2021-03/
Desktop/             NTUSER.DAT                                                                                    'Saved Games'/   ntuser.dat.LOG1
Documents/           NTUSER.DAT{53b39e88-18c4-11ea-a811-000d3aa4692b}.TM.blf                                        Searches/       ntuser.dat.LOG2
Downloads/           NTUSER.DAT{53b39e88-18c4-11ea-a811-000d3aa4692b}.TMContainer00000000000000000001.regtrans-ms   SendTo@         ntuser.ini
Favorites/           NTUSER.DAT{53b39e88-18c4-11ea-a811-000d3aa4692b}.TMContainer00000000000000000002.regtrans-ms  'Start Menu'@

SARATH-555@SARATH-555 MINGW64 ~
$ cd OneDrive/ECLIPSE/'JEE Struts'/
```

Directory Commamnds
> To navigate to your home directory, use "cd" or "cd ~"

> To navigate up one directory level, use "cd .."

> To navigate to the previous directory (or back), use "cd -"

> To navigate into the root directory, use "cd /"

> To navigate through multiple levels of directory at once, specify the full directory path that you want to go to.

> For example, use "cd ~/OFGT-data/images/" to go directly to the images subdirectory in the OFGT-data folder.

> As another example, "cd ~/Desktop" will move you to the Desktop subdirectory inside your home directory.


To remove files
In the command-line, navigate to your local repository.
Ensure you are in the default branch:
`$ git checkout branch_name`	checkout which branch you will be working on
The rm -r command will recursively remove your folder:
`$ git rm -r folder-name`
Commit the change:
`$ git commit -m "Remove duplicated directory"`
Push the change to your remote repository:
`git push origin branch_name`


**To check the local changes**

	$ git status

**To Check The remote Commits**

	$ git fetch

**rename a file**

	$ git checkout master
	$ git mv casesensitive tmp
	$ git mv tmp CaseSensitive
	$ git commit -m "Name changed"

**To Add a file**

	$ git add 'file name'
	$ git commit -m 'file name'
	$ git push

**To push all the files like new and existing at once**

	$ git add .
	$ git commit -m 'file name'
	$ git push

**To Roll Back commit**

	$ git reset --hard HEAD~1 	it will get you back 1 commit
	$ git reset --hard ORIG_HEAD	will point to a commit directly before merge has occurred.


**To pull all changes from remote**
	$ git pull

**To Create new branch**

	$ git branch new-branch-name

**To create new branch and checkout on single command**
	
	$ git checkout -b new_branch_name

	or

	$ git switch -c new_branch_name

**To check from which branch this new branch is created**
	
	$ git reflog

**Compare with another branch**
	$ git merge-base current_branch_name comparing_branch_name

~~~~~~~~~~~~
SSH creation
~~~~~~~~~~~~

stack overflow --> https://stackoverflow.com/questions/32910928/ssh-keygen-no-such-file-or-directory

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key

--open gitbash
```
SARATH-555@SARATH-555 MINGW64 ~
$ ssh-keygen -t ed25519 -C "silvershinesarath@gmail.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/c/Users/SARATH-555/.ssh/id_ed25519): [press enter]
Created directory '/c/Users/SARATH-555/.ssh'.
Enter passphrase (empty for no passphrase): [type a passphrase] press enter if dont want password			//https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases
Enter same passphrase again: [again type the same passphrase] press enter if dont want password
Your identification has been saved in /c/Users/SARATH-555/.ssh/id_ed25519
Your public key has been saved in /c/Users/SARATH-555/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:Cp4wcfJ1IYWokJAVA+L9g9xDiVNh6MVY6kZHMNIw/LE silvershinesarath@gmail.com
The key's randomart image is:
+--[ED25519 256]--+
|*O*+*Booo        |
|*.+*Ooo. .       |
| o=B=+. .        |
|  =EB. .         |
|  o=o=  S        |
|  .+ oo.         |
|    o .          |
|                 |
|                 |
+----[SHA256]-----+

SARATH-555@SARATH-555 MINGW64 ~
$ ls -al ~/.ssh
total 18
drwxr-xr-x 1 SARATH-555 197121   0 Jan 11 22:30 ./
drwxr-xr-x 1 SARATH-555 197121   0 Jan 11 22:28 ../
-rw-r--r-- 1 SARATH-555 197121 464 Jan 11 22:30 id_ed25519
-rw-r--r-- 1 SARATH-555 197121 109 Jan 11 22:30 id_ed25519.pub
```

Then go to the .ssh folder and open the file.pub in notepad
and copy the keys starts with ssh-ed
and paste it in the github (https://github.com/settings/ssh/new).

//Adding new ssh file --> https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account




Codeberg

touch README.md
~~~
git init
git checkout -b main
git add README.md
git commit -m "first commit"
git remote add origin https://codeberg.org/SilverShineSarath/Rest-Ful-Web-Service.git
git push -u origin main
~~~
Pushing an existing repository from the command line

	$ git remote add origin https://codeberg.org/SilverShineSarath/Rest-Ful-Web-Service.git
	$ git push -u origin main

```GitLab``` - https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html


Office type -
	In browser
	- Select the project in your projects
	- select "Branches" which is under the project name
	- Select "New branch" button
	//note - can also delete the existing active branchs if no need
	- Give appropriate branch name and click create branch+
	- In clone copy clone with SSH
	
	In intelij
	- select vcs -> git version control -> paste the clone -> click clone
	- right bottom corner we can see the branch icon, click that and select the branch which is created and right click and give checkout.
	- ctrl+shift+r to find the specific word in project. Then replace it and commit and push to branch.
	- left top corner we can see commit tab. In that select the files to be moved, and give commit and push.
	
~~~
> git init
> git rev-parse --git-dir
Open repository: d:\React Codings
> git status -z -u
> git symbolic-ref --short HEAD
> git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track) refs/heads/master refs/remotes/master
> git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname)
> git remote --verbose
> git show --textconv :A_FirstProgram/index.js
> git ls-files --stage -- D:\React Codings\A_FirstProgram\index.js
> git check-ignore -v -z --stdin
> git config --get commit.template
> git ls-files --stage -- D:\React Codings\A_FirstProgram\index.js
> git show --textconv :A_FirstProgram/index.js
> git status -z -u
> git symbolic-ref --short HEAD
> git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track) refs/heads/master refs/remotes/master
> git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname)
> git remote --verbose
> git config --get commit.template
> git status -z -u
> git symbolic-ref --short HEAD
> git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track) refs/heads/master refs/remotes/master
> git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname)
> git remote --verbose
> git config -
~~~

# NPM install

#install packages

	$ npm install --prefer-offline --no-audit

#show current npm configuration

	$ npm config list

#Upgrade NPM to latest version

	$ npm install npm -g

#see what packages are installed globally

	$ npm list -g --depth=0

#see what packages can be upgraded

	$npm outdated


USAA to create authentication token
!! check  wiki go/NPMSetup

- go to jfrog
- create api key

### Difference Between Pull and Fetch

- In Git, both pull and fetch are used to retrieve updates from a remote repository, but they differ in their functionality:

- The key difference between git fetch and pull is that git pull copies changes from a remote repository directly into your working directory, while git fetch does not. The git fetch command only copies changes into your local Git repo. The git pull command does both.

**Fetch:**
Downloads the changes from the remote repository to your local repository, but does not merge them into your working directory.
Allows you to review the changes before integrating them.
Safer option as it doesn't directly modify your local working copy.

**Pull:**
Combines two operations: fetch and merge.
Downloads changes from the remote repository and immediately merges them into your current branch.
Faster and more convenient if you want to quickly update your local branch with changes from the remote repository.

***In essence:***
Fetch: gets the changes, pull gets and merges the changes.
Fetch: is safer, pull is more convenient.
Use fetch if you want to review changes before merging, use pull if you want to quickly update your local branch.

