# Redux Thunk Tricks

ReactCasts, episode 10.

Redux Thunk is the most used library for side effects and asyncronous calls in Redux - and that's for a reason. But despite being so used, there are a few useful thunk tricks that aren't yet commonplace, so in this episode I'll share some pieces of thunk knowledge that might help you build better applications.

Screencast video:
https://youtu.be/xihoZZU0gao

# Outline

- The first tip is very simple: You can return values from thunks, and this can be useful, for example, for asynchronous orchestration.

- The second tip is about thunk's getState, and how it can be a bad idea to rely on this mechanism for accessing data. 

- The third tip is about using thunk withExtraArguments to make your thunks easy to test and run on multiple environments.


# Build & Run Instructions

1. To build and run the code in this directory, ensure you have [npm](https://www.npmjs.com) installed

2. Install
```
npm install
```

3. Start the application
```
npm start
```
