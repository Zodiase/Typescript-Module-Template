# Dependencies

This document explains why certain dependencies are needed.

## Dev dependencies

- `@types/node`

    Type support for node modules.

- `typescript`

    Parse and build TypeScript.

- `@types/jest`, `jest`, `ts-jest`

    Testing with Jest. `ts-jest` applies type-checking during tests.

    Without `ts-jest`, `jest` would need `babel` to parse TypeScript. `babel` does not care about type errors, however.