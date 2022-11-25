# React States and Working With Events

## General notes
Using MDN can help a lot here

## Listening to Events and Working with Event Handlers
For each "on" HTML element available in MDN, there is an associated prop.
* For example, a `button` has an `onClick` event.
* We need to pass in an event handler to respond to this event, i.e., a function.

Generally, event handlers will be functions whose name ends with Handler. 

## How Component Functions are Executed
Keep in mind that the TSX Component is a function. The only special thing is that it returns JSX.

Under the hood, creating a Component is a function call - and will call the associated component functions.

When the applications is initially rendered, React does this cascading component function calling. But only does this once.

We need a way to tell React that something has changed, and that the component needs to be re-rendered.

We use `useState` to do this.