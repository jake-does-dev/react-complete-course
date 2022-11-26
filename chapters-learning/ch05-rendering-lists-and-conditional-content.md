# Rendering Lists and Conditional Content

## Understanding "Keys"
Without keys, all items are visited and their content is updated. We could run into bugs.

The `key` prop is a property you can add to _any_ component. If we add this, then we can help React identify
the individual items.

If we do this, then React is able to appropriately insert in the right places, as opposed to update content
in place which can lead to bugs and performance issues.