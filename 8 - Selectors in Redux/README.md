# Selectors in Redux

ReactCasts, episode 8.

Selectors are neither something you import from Redux nor an external library you must install. But they are present in many Redux projects nonetheless.
Technically selectors are just convenient functions used for looking up and retrieving snippets of data from the Redux store, into your components... But they play an important role as they help cope with derived and related data - allowing Redux to store the minimal possible state.


Screencast video:
https://youtu.be/frT3to2ACCw

# Outline

- Brief introduction to Selectors.
- Sample application highlight
- Example 1: Using Selectors for computing Derived Data
- Example 2: Making selectors more practical by centralizing them all on the index reducer file.
- Example 3: Using Selectors for retrieving relational data
- Memoization and Reselect


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
