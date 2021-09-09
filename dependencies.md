# Dependencies

This document explains why certain dependencies are needed.

## Dev dependencies

-   `@types/node`

    Type support for node modules.

-   `typescript`

    Parse and build TypeScript.

-   `@types/jest`, `jest`, `ts-jest`

    Testing with Jest. `ts-jest` applies type-checking during tests.

    Without `ts-jest`, `jest` would need `babel` to parse TypeScript. `babel` does not care about type errors, however.

-   `eslint`

    Code linting.

-   `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`

    Allow `eslint` to parse TypeScript and report the issues.

-   `prettier`

    Code formatting.

-   `@xch/prettier-config`

    My preset for prettier.
