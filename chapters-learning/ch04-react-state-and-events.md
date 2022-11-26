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

## `useState` quirks
When updating state that depends upon previous state, you must use an anonymous arrow function which has the
`previousState` as a parameter that gets passed in. This ensures that React takes the latest snapshot available
for that state, and subsequently guarantees that your update will be using the latest data.

To show this concretely:

<table>
<tr>
<th>✅</th>
<th>❌</th>
</tr>
<tr>
<td>

```tsx
const [count, setCount] = useState(0);
const CountButton = () => {
  // Anonymous arrow function as new count depends on count
  return <button onClick={() => setCount(count + 1)}>Click me!</button>;
};

const [userInput, setUserInput] = useState({
  title: '',
  amount: '',
  date: '',
});
const FormInput = () => {
  return (
    <input
      type={'text'}
      // Anonymous arrow function as previous state for userInput are being retained 
      onChange={(prevState) => setUserInput(...prevState, { title: event.target.value })}
    />
  )
}
```

</td>
<td>

```tsx
const [count, setCount] = useState(0);
const CountButton = () => {
  // Could be using an old state snapshot!
  return <button onClick={setCount(count + 1)}>Click me!</button>;
};

const [userInput, setUserInput] = useState({
  title: '',
  amount: '',
  date: '',
});
const FormInput = () => {
  return (
    <input
      type={'text'}
      // Could be using an old state snapshot!
      onChange={() => setUserInput(...userInput, { title: event.target.value })}
    />
  )
}
```

</td>
</tr>
</table>

## Two way bindings
For any HTML element that has the `value` attribute, we can assign this to a variable that we have in scope.

If this variable updates (as it is a part of the `useState` hook), then we introduce a two-way binding!