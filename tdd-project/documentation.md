# Rock - Paper - Scissors
                                                
> Part: 1  
> Nasz zespół musi zbudować grę od podstaw.
   

## Słownik:
- _Player_ - _End User_ lub _CPU_
- _CPU_ - jeden z graczy _Player_ - jest wirtualny, działa jako implementacja w kodzie
- _End User_ - jeden z _Players_ w grze, osoba - człowiek
- _choice_ - jedna z możliwych "akcji", którą _Player_ może zagrać. 
- `rock` (w skrócie: R) - jeden z możliwych wyborów, pokonuje: `scissors`
- `paper` (w skrócie: P) - jeden z możliwych wyborów, pokonuje: `rock`
- `scissors` (w skrócie: S) - jeden z możliwych wyborów, pokonuje: `paper`
- _game state_ - jeden z możliwych stanów gry: `WIN`, `LOOSE`, `DRAW`
- _1st_ or _2nd_ _-Player_ — wskazuje kolejność graczy — ważne z perspektywy kto `WIN` wygra lub `LOOSE` przegra grę.

## Wymagania:
- RQ-1. W grze _Player_ może dokonać jeden z trzech (3) _choices_
- RQ-2. _End User_ może grać tylko z komputerem: _CPU_
- RQ-3. Po wykonaniu akcji _choice_ przez _End User_, drugi Player (_CPU_) wykonuje losową akcję _choice_ jako swoje zagranie.
- RQ-4. Są trzy akcje wyboru (choices): `rock`, `paper`, `scissors`. Każdy _choice_ pokojnuje jeden i jest pokonwyany przez jeden inny _choice_.
- RQ-5. Zasady gry:
    - `rock` pokonuje `scissors`
    - `paper` pokonuje `rock`
    - `scissors` pokonuje `paper`
    - ten sam wybór powoduje stan remisowy gry: `DRAW`.
- RQ-6. _End User_ jest pierwszym graczem _1st-Player_, i gra powinna traktować jego wybór (_choice_) jako ten do którego "porównuje się" wybory _CPU_. Będzie to miało wpływ na _game state_.  
  - Dla przykładu, jeśli _1st-Player_ wybierze `rock` a _2nd-Player_ (_CPU_) wybierze `scissors` to mamy: "kamień pokonuje nożyce" i _game state_ to: `WIN`.  
  - Jeśli _End User_ wybierze `paper` a _CPU_ wybierze `scissors` to mamy: "papier jest pokonany przez nożyce" i _game state_ to: `LOOSE`.
  - Te same wybory u graczy oznaczają stan: `DRAW`
- RQ-7. Runda gry kończy się, kiedy _choices_ każdego _Player_  są porównane. Wpływa to na: _game state_ wtedy _choice_ gracza _CPU_ jest jawnie pokazany.  
  Przykład: Kiedy _End User_ wybiera `paper`: "WYGRANA - wybór komputera: rock".
- RQ-8. Po skończonej rundzie gra będzie trwałą dalej, wpływając na _game state_.
- RQ-9. Gra powinna być przygotowana w `TypeScript` - na platformie `Node.js`.
- RQ-10. Docelowy sposób dostarczenia produktu (Web app / Desktop app / Mobile app) nie jest jeszcze ustalony. Będzie podany wkrótce.
