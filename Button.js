class Button {

    constructor(label, onClick) {
        this.label = label
        this.onClick = onClick
    }

    render() {
        const button = document.createElement('button')
        button.innerText = this.label

        button.style.outline = 'none'
        button.style.backgroundColor = '#FF5A5F'
        button.style.minWidth = '100px'
        button.style.height = '30px'
        button.style.border = '1px solid #FF333A'
        button.style.borderRadius = '4px'
        button.style.color = 'white'
        button.style.cursor = 'pointer'

        if (this.onClick) {
            button.addEventListener(
                'click',
                () => this.onClick()
            )
        }

        return button
    }
}