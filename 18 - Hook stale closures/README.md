# Hooks & Stale Closures

I really like hooks: It has an elegant API that is simple to use, declarative, easy to abstract & Reuse. But still, you can get yourself in a trap in some cases: Stale closures are an example. They happen when your useEffect or other hook is seeing older versions of your props and state, usually when you're doing something asynchronous (like an event or a timer).

In this video, I show three examples of stale closures and how to deal with them properly using:
• The useEffect's dependency array
• useState setter in a functional format
• using a ref instead of a piece of state

Screencast video:
[https://youtu.be/eVRDqtTCd74](https://youtu.be/eVRDqtTCd74)
