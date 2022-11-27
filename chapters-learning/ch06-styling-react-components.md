# Styling React Components

## Setting Dynamic Inline Styles

We can manage state and have a `style` tag respond to changes in that component.

```tsx
<label style={{ color: isValid ? 'black' : 'red' }}>Course Goal</label>
```

Note: inline styles have the highest priority in CSS.
Consequently, inline styles are generally not preferred.

## Setting CSS Classes Dynamically

We can put CSS in the associated component CSS file instead to do this.

In particular, we can use 'multiple selections' for classes and target a particular
HTML element to apply styles.

For example:

In the CSS:

```css
.form-control.invalid input {
  border-color: red;
  background: #ffd7d7;
}
```

In the `<div>` that encloses the `input`:

```tsx
<div className={`form-control ${isValid ? '' : 'invalid'}`}>...</div>
```

## Introducing Styled Components

Importing a related CSS file for a component does not mean that those styles are scoped
to that component only - they are global.

This is not necessarily a problem if you use appropriately named selectors, but there
is instead a way to apply a style to a specific component - and a CSS selector could
easily be used multiple times throughout your project.

[Styled Components](https://styled-components.com/) is a way in which this can be achieved.

`yarn add styled-components`
`yarn add -D @types/styled-components`

### `styled`

You can use a _tagged template literal_.

What you pass in the backticks will be used when constructing the relevant component,
for example, `button`.

We can also split the backticks over multiple lines.

When referring to the component itself, we use `&` to reference itself.

Below is an example on how this works:

```tsx
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  .&:focus {
    outline: none;
  }

  .&:hover,
  .&:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
```

We can use Styled Components for dynamic properties too!

You can add props to styled components and use this dynamically instead!

```tsx
interface FormProps {
  readonly isValid: boolean;
}

const FormControl = styled.div<FormProps>`
  & label {
    color: ${(props) => (props.isValid ? 'black' : 'red')};
  }
`;
```

### Media Queries

Media queries can be used when we want to change the presentation based on the device
that the user is utilising, which could impact widths (for example).

To do this, add something like this:

## CSS Modules

Importing a `.module.css` file and using this in your React component will mean that
a unique ID will get generated alongside the class name - and it is then managed by
CSS Modules.

```tsx
import styles from './Button.module.css';
```

Then, we can add `className`s dynamically in a similar way to before - as an example:

```tsx
<div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
```

## Which one?

I think I prefer the idea of CSS Modules personally - Styled Components doesn't really
work well with my brain :)
