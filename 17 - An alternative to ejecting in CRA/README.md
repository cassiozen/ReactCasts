# An alternative to Ejecting in Create-React-App

Create-react-app is the most popular React project starter, but if you want access to the project setup & configuration files, you have to run eject - and deal with over a dozen configuration and script files.
There is a Middle ground: you can fork the react-scripts library on git (the library that contains all those script and configuration files to begin with). You will still have dozens of files to deal with, but at least they will be on git, with an upstream connection that allows you to merge any new developments back in your own config.
To spicy things up a little bit, it this video, I'll also use git subtree to get a clean and organized repository containing only your configuration.

Screencast video:
[https://youtu.be/2RvntJWs1Pw](https://youtu.be/2RvntJWs1Pw)

# React-Scripts with Git Subtree Tutorial

Adapted from the [StackOverflow answer](https://stackoverflow.com/questions/24577084/forking-a-sub-directory-of-a-repository-on-github-and-making-it-part-of-my-own-r) by user tbekolay

Start by cloning the whole create-react-app repository.

```bash
git clone git@github.com:facebook/create-react-app.git
cd create-react-app
```

We start on the master branch by default. We want to make our own main branch, so let's rename master to upstream-master.

```bash
git branch -m upstream-master
```

Now use `git subtree split` to only include the react-scripts. We'll make the split off part a new branch called upstream-react-scripts.

```bash
git subtree split --prefix=packages/react-scripts -b upstream-react-scripts
git checkout upstream-react-scripts
```

This gives you a new branch that only contains the contents of packages/react-scripts, and with a filtered history that contains only the commits that modified files in packages/react-scripts.

Now, we'll make a new branch called `main` that will contain your changes. (Master is also fine, I'm just using the newer Github convention)

```bash
git checkout -b main
git push -u origin main
```

Finally, let's set up our remotes. Since you cloned facebook/create-react-app.git, the origin remote will point there. Let's rename that to upstream.

```bash
git remote rename origin upstream
```

Make a new repository on Github to contain your own react-scripts. As an example, I'll use cassiozen/react-scripts, but replace this with your own repo. Add this repo as a remote, and push your upstream-react-scripts branch to it.

```bash
git remote add origin git@github.com:cassiozen/react-scripts.git
git fetch origin
git push -u origin upstream-react-scripts
```

You now have a "fork" of the packages/react-scripts subdirectory.

## Making changes to your repositories

When you're dealing with your own local and remote repositories, you can use normal git commands. Make sure to do this on the main branch and not the upstream-react-scripts branch, which should only ever contain commits from the upstream project.

## Receiving upstream commits

When you're dealing with the upstream repository, you will have to use a mix of git and git subtree commands. To get new filtered commits, we need to do it in three stages.

In the first stage, we'll update upstream-master to the current version of the create-react-app repository.

```bash
git checkout upstream-master
git pull
```

This should pull down new commits, if there are any.

Next, we will update upstream-react-scripts with the new filtered version of the commits. Since git subtree ensures that commit hashes will be the same, this should be a clean process. Note that you want to run these commands while still on the upstream-master branch.

```bash
git subtree split --prefix=packages/react-scripts --onto upstream-react-scripts -b upstream-react-scripts
```

With upstream-react-scripts now updated, you can update your main branch as you see fit (either by merging or rebasing).

```bash
git checkout main
git rebase upstream-react-scripts
```
