# Styling React Components

## Setting Dynamic Inline Styles

We can manage state and have a `style` tag respond to changes in that component.

```tsx
<label style={{ color: isValid ? 'black' : 'red' }}>Course Goal</label>
```

Note: inline styles have the highest priority in CSS.
