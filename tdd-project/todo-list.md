# TODO:


1. utwórz projekt `node` + dodaj `typescript` i dodaj test runner `vitest`
2. utwórz podstawową strukturę projektu, i skrypty do uruchamiania testów, potwierdz źe działają. Na razie potrzebujemy pusty plik `main.ts` (+ pusty test)

skrypty:
- do budowania (TS -> JS)
- do testowania (test runner)
- do urchamiania produkcji

AD 1. 
```
npm init -y
```

```
npm i -D typescript vitest
```

Plik z konfiguracją `TS`:

```
npx tsc --init
```

AD 2.
- Dodajemy plik z konfiguracją [vitest.config.ts](./vitest.config.ts)


- Pamiętajmy o dodaniu:
```
    "types": [
      "vitest/globals"
    ],  
```

w pliku [tsconfig.json](./tsconfig.json)

pozwoli to używać globalnych nazw: `it` / `test`, `describe`, `expect` w testach, bez konieczności importowania

3. napisz plan testowania, przygotuj testy