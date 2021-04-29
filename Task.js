class Task {
    constructor(task, onComplete, onDelete) {
        this.task = task
        this.onComplete = onComplete
        this.onDelete = onDelete
    }

    render() {
        const container = document.createElement('div')
        const p = document.createElement('p')
        const deleteButton = new Button('Delete', this.onDelete)

        container.style.display = 'flex'
        container.style.justifyContent = 'space-between'
        container.style.background = '#fef8f9'
        container.style.borderRadius = '4px'
        container.style.margin = '4px 0px'

        p.style.cursor = 'pointer'

        p.innerText = this.task.text

        if (this.task.isCompleted === true) {
            p.style.textDecoration = 'line-through'
        }

        p.style.margin = '7px'

        p.addEventListener('click', () => this.onComplete())




        container.appendChild(p)
        container.appendChild(deleteButton.render())

        return container
    }
}