class Input {

    constructor(text, onChange) {
        this.text = text
        this.onChange = onChange
    }

    render() {
        const input = document.createElement('input')

        input.value = this.text

        input.style.width = '80%'
        input.style.marginRight = '10px'
        input.style.borderRadius = '4px'
        input.style.border = '2px solid #fdecee'

        input.addEventListener('input', (event)=> this.onChange(event.target.value))

        return input
    }
}
