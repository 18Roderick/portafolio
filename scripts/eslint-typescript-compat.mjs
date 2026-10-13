// TypeScript 7 does not ship the JavaScript compiler API. typescript-eslint,
// pulled in by eslint-config-next, still loads `typescript` and only accepts
// the 6.x API. Next.js typechecks with the TypeScript 7 CLI, so this redirect
// applies only to the ESLint process.
import { registerHooks } from "node:module";

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "typescript") {
      return nextResolve("@typescript/typescript6", context);
    }
    return nextResolve(specifier, context);
  },
});
