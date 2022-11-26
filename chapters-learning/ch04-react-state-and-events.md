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

## Two-Way binding
For any HTML element that has the `value` attribute, we can assign this to a variable that we have in scope.

If this variable updates (as it is a part of the `useState` hook), then we introduce a two-way binding!

## Child-to-Parent Component Communication
We can introduce properties on our components that take functions as parameters (similarly to, for example, the
onChange property available on some built in components).

This will allow us to communicate from child to parent.

The convention for function props is to prepend them with `on`.

Note: props can only be passed from parent to child; skipping of intermediate components is not allowed

Here are the steps:
1. Pass a function as a prop to the `Child` component.
2. Call the function in the `Child` component and pass the data as arguments.
3. Access the data in the function in the `Parent`.

We have done this in with the new expense process:
* `NewExpense` is a parent of `ExpenseForm`
* We pass the function property `onSaveExpenseData` to the child (`ExpenseForm`)
* We invoke the function in `ExpenseForm`, passing in the data required
* Done!

## Controlled vs. Uncontrolled Components
When you create a two-way binding, you are creating a controlled component.

In our case, ExpensesFilter is a controlled component - both its value and changes to its value are handled by
a parent component.

## Stateless vs. Stateful components
In our case, `ExpenseItem` is Stateless/presentational/dumb as it doesn't have any internal state.
It is just there to output data.

There should be very few stateful components - if there are too many, then we are probably creating components
that are too large and have too much responsibility.

You manage state in a few components, and pass it around between other components.