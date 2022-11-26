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
