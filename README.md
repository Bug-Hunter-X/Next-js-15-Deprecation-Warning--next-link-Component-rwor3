# Next.js 15 Deprecation Warning: next/link Component

This repository demonstrates a common issue encountered when upgrading to Next.js 15: a deprecation warning related to the `next/link` component.  The older API is no longer supported, and this example shows how to fix it.

## Problem

The `next/link` component's API has changed in Next.js 15. Using the old API will generate a deprecation warning.  This warning indicates that your code is using an outdated method and needs to be updated.

## Solution

The solution involves switching to the new `next/link` component API, which utilizes a more streamlined approach.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Observe the warning in the console.

## Fixing the Warning

The solution is provided in `bugSolution.js`.