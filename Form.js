class Form {
    constructor(initialValue, onSubmit) {
        this.initialValue = initialValue
        this.onSubmit = onSubmit
        this.value = initialValue
    }

    render() {
        const form = document.createElement('form')
        const input = new Input(
            this.initialValue,
            (value) => this.value = value
        )
        const button = new Button('Add task')

        form.style.display = 'flex'
        form.style.justifyContent = 'space-between'
        form.style.borderRadius = '4px'
        form.style.margin = '4px 0px'

        form.addEventListener(
            'submit',
            (event) => {
                event.preventDefault()
                if(!this.value) return
                this.onSubmit(this.value)
            }
        )


        form.appendChild(input.render())
        form.appendChild(button.render())

        return form
    }
}


