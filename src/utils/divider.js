export function divider(title, toDoTasks) {
    return toDoTasks.filter(i => i.overarching === title)
}
