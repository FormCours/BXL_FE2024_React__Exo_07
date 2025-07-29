# Exo 04 - Todo List

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
