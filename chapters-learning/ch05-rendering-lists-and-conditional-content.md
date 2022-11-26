# Rendering Lists and Conditional Content

## Understanding "Keys"

Without keys, all items are visited and their content is updated. We could run into bugs.

The `key` prop is a property you can add to _any_ component. If we add this, then we can help React identify
the individual items.

If we do this, then React is able to appropriately insert in the right places, as opposed to update content
in place which can lead to bugs and performance issues.

## Conditional Content

Something like this:

```tsx
return (
  <Card className={'expenses'}>
    <ExpensesFilter selectedYear={filteredYear} onYearChange={filterChangeHandler} />
    {filteredItems.length === 0 && <p>No expenses found.</p>}
    {filteredItems.length > 0 && filteredItems.map((e) => <ExpenseItem {...e} key={e.id} />)}
  </Card>
);
```

## Conditional Returns

Remember the fundamental rule of TSX - you can only return one root element!!!
So, wrap in `<div>` or `<>` or anything else you love :)

## Dynamic Styles

You can add the `style` attribute and enrich this dynamically by providing JSON inside.
For example:

```tsx
<div style={{'background-color': 'red'}}></div>
<div style={{height: variable, backgroundColor: 'red' }}></div>
```
