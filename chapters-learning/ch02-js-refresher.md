# TypeScript refresher!

<hr>

## Variables

- `let` is for mutable variables
- `const` is for immutable variables

```typescript
let mutable = 'Hello';
mutable = 'Ive changed!';

const immutable = 'Hello';
immutable = 'Ive changed!'; // Illegal
```

<hr>

## Arrow function

Arrow functions get around `this` hell!

Below are two ways to write the same function:

```typescript
function printName(name: string) {
  console.log(name);
}
```

```typescript
const printName = (name: string) => {
  console.log(name);
};
```

If the function is only returning a value, then the curly braces can be removed and we can get rid of the `return` key
word too!

```typescript
const echoReturn = (name: string): string => name;
```

<hr>

## Exports and Imports (Modules)

- You can use `export` to export `const`s from your .ts file
- If there is only one thing you wish to export, then you can simply use `export default` instead

The following is an example

<table>
<tr>
<th><code>person.ts</code></th>
<th><code>utility.ts</code></th>
</tr>
<tr>
<td>

```typescript
const person = {
  name: 'Jake',
};

export default person;
```

</td>
<td>

```typescript
let dirtyItems = 10;

export const clean = () => (dirtyItems = 0);
export const baseData = 10;
```

</td>
</tr>
</table>
... and to import these:

`app.ts`

```typescript
import person from './person.ts';
import prs from './person.ts'; // the name of this is up to you!

import { baseData, clean } from './utility.ts'; // the name of this must coincide with the import
import { baseData as data } from './utility.ts'; // the alias `data` is chosen by us
```

<hr>

## Classes

Fairly similar to what you already know.

## The Spread and Rest Operator

This operator looks like `...`

Whether it is 'spread' or 'rest' depends on the context...

<table>
<tr>
<th>spread</th>
<th>rest</th>
</tr>
<tr>
<td>
This is used to:
<ul>
<li>split up array elements or 'spread them out', OR</li>
<li>split up object properties or 'spread them onto an object'</li>
</ul>
</td>
<td>
This is used to merge a list of function arguments into an array
</td>
</tr>
<tr>
<td>

```typescript
const newArray = [...oldArray, 1, 2];
const newObject = { ...oldObject, newProperty: 5 };
```

</td>
<td>

```typescript
const sortArgs = (...args: number[]): number[] => args.sort();
```

</td>
</tr>
</table>
<hr>

## Destructuring

Easily extract array elements or object properties and store them in variables.

```typescript
const [a, b] = ['Hello', 'Jake'];
console.log(a); // Hello
console.log(b); // Jake

const { name } = { name: 'Jake', age: 27 };
console.log(name); // Jake
console.log(age); // undefined
```

<hr>

## Value Types and Reference Types

- Primitives are value types, they pass by value.
- Objects are reference types, they pass by reference.
<hr>

## Refreshing Array Functions

- Things like `map`, `reduce`, etc.
