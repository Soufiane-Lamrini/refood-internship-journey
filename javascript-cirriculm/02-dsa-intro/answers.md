## Réflexion sur les exercices JavaScript

### 1. Exercice préféré
L'exercice que j'ai préféré était celui sur les palindromes car :
- Il combinait plusieurs concepts intéressants (manipulation de chaînes, tableaux)
- Il avait une application pratique (vérification de mots symétriques)
- Il permettait d'explorer différentes approches (avec et sans expressions régulières)

### 2. Méthodes utilisées

**Exercice 1 (Inverser une chaîne)**
- `split('')` : Convertit la chaîne en tableau
- `reverse()` : Inverse l'ordre du tableau
- `join('')` : Recombine le tableau en chaîne

**Exercice 2 (Maximum dans un tableau)**
- Version initiale : `Math.max(...numbers)` (opérateur spread)
- Version alternative (pour mieux comprendre) :
  ```javascript
  let max = numbers[0];
  for (let num of numbers) {
      if (num > max) max = num;
  }
  return max;