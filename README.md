# Exo 07 - Refactoring de la Todo List (Exo 05)

## Composant dans la correction
- Header
- TodoApp
- TaskForm
- TaskList
- TaskCard

### La gestion des states dans l'app
Le composant "TodoApp" contiendra la liste des taches et il la manipulera.

### Les communications dans l'app
- **Ajouter une tache**  
  _TaskFrom (callback)-> TodoApp_
- **Afficher la liste des taches**  
  _TodoApp (data)-> TaskList (map)-> TaskCard_
- **Supprimer une tache**  
  _TaskCard (callback)-> TaskList (callback) -> TodoApp_
- **Valider une tache**  
  _TaskCard (callback)-> TaskList (callback) -> TodoApp_ 


## Refactoring
- Création d'un hook custom pour gérer les taches