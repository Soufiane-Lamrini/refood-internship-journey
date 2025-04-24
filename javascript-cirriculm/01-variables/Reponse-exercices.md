Questions bonus – Discussion :

Quelle est la différence entre var, let et const ?

var et let sont des variables dont la valeur peut être changée à tout moment.

const est une constante : une fois la valeur définie, on ne peut plus la modifier.

Quand utiliser const ou let ?

Il est recommandé d’utiliser const par défaut, surtout si la valeur ne doit pas changer.

Si tu sais que la valeur sera modifiée plus tard, utilise let car elle permet de réassigner la valeur.

Pourquoi on évite var en JavaScript moderne ?
On évite var car elle peut causer plusieurs problèmes :

Le hoisting (remontée de la déclaration), qui peut rendre le code difficile à comprendre.

Le scope (portée) de bloc n’est pas respecté avec var, ce qui peut provoquer des erreurs.
C’est pourquoi on privilégie l’utilisation de let et const, qui sont plus sûrs et plus faciles à maîtriser.

