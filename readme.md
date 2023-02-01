# Typescript declarations for the Retail World of Warcraft LUA API for Awful Framework

> WoW Classic developers should use the [wow-classic-declarations](https://github.com/wartoshika/wow-classic-declarations) repository.

## DragonFlight

Updates for the DragonFlight expansion are currently in development.

**Supported transpilers for LUA targets**:

- TypescriptToLua [GitHub-Page](https://github.com/TypeScriptToLua/TypeScriptToLua)

## Setup

Please add the awful-wow-declarations path to your `tsconfig.json` compiler options like below:

```json
{
  "compilerOptions": {
    // ...
    "typeRoots": ["@types", "@susp3nse/awful-wow-declarations"]
  }
}
```

## Disclaimer

This was forked from [wow-declarations](https://github.com/wartoshika/wow-declarations).

I'm retro fitting this to work better with the awful framework and [awful-types](https://github.com/aqwerty420/awful-types).

Majority of the code was written by wartoshika. If needed I'll make required changes if the author finds that I have wrongly used the code above.
