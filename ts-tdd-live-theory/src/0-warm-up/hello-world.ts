console.log('Hello World!', 2 + 20, 100 + '!', 4000);

let myNumber = 10n;

let myOtherNumber = 100;

[2,3,4].at(-1);

// myOtherNumber = '?'

type Money = typeof myOtherNumber;

let ok: Money = 11;

// 1. sposoby na uruchomienie
// npx ts-node .\hello-world.ts
// npx tsx .\hello-world.ts

// 2. node 24 (experimental)
// node .\hello-world.ts

// 3. npm run build + przejście do `/dist` oraz:
// node .\hello-world.js

