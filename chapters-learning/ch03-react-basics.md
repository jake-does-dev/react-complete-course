# React Basics and Working With Components

## Why do we use Components?

- Re-usability - avoid DRY
- Separation of Concerns

## React is written in a declarative way

- React allows you to create re-usable and reactive components consisting of:
  - HTML
  - CSS
  - JavaScript
- Use a declarative approach and define the desired target state(s)
- Let React figure out the actual JavaScript DOM instructions

## How does React work?

- JavaScript is imperative w.r.t how it changes the DOM.
- With React, we define the end states (as part of our components) - it is declarative.

## Components

You must only have one root element per TSX snippet!

In particular, `<div>` can only occur once!

You can wrap a return statement in TSX in normal brackets to indicate that this is 'one element';
