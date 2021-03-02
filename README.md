## Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

**Cann't use hooks inside Class component**

hooks, provide more direct api to react concept you already know.

## Motivation
-Reason 1
    -understand hwo this works in javaScript.
    -remember to bind event handler in class component.
    -class don't minify well and make hot reloading very unreliable.

-It’s hard to reuse stateful logic between components
React doesn’t offer a way to “attach” reusable behavior to a component (for example, connecting it to a store). If you’ve worked with React for a while, you may be familiar with patterns like render props and higher-order components that try to solve this. But these patterns require you to restructure your components when you use them, which can be cumbersome and make code harder to follow.
**Hooks allow you to reuse stateful logic without changing your component hierarchy.**

-Complex components become hard to understand

    create components for complex scenarios such as data fetching and subscribing to evnet.
    related code are not orgainsed at one place but scattered in different lifeCycle hook.

    ex: data fetching : In componentDidMount and componentDidUpdate,
    ex: event listerner: In componentDidMount and componentWillUnmount.

We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often contains a mix of unrelated logic. For example, components might perform some data fetching in componentDidMount and componentDidUpdate. However, the same componentDidMount method might also contain some unrelated logic that sets up event listeners, with cleanup performed in componentWillUnmount. Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a single method. This makes it too easy to introduce bugs and inconsistencies

**Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.**