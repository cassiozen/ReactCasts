# Contexts (Part 2)

ReactCasts, episode 5.

On the last episode I talked about how context is a cool feature but also how it has 2 problems - the fact that the API is experimental (it will end up changing) and the fact that updates might not propagate if any component in the middle of the hierarchy implements ShouldComponentUpdate. On this episode, we will tackle this problems and show how to use Context in a safe way.

Screencast video:
https://www.youtube.com/watch?v=mwYHDXS6uSc

# Outline

- Review the problems: Experimental API that might change and change propagation
- Problem 1:
    - Extract the context stuff from `ContentPanel` to `WithLocaleHOC`
- Problem 2:
    - Example: Implement ShouldComponentUpdate on InternalPanel
    - Introduce the subscription mechanism


## Links:
ShouldComponentUpdate Documentation: https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate

How to safely use React context: https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076#.wrea2wbqq

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
