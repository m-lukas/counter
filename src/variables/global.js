export const actions = {
    UNDO: {
        type: 'UNDO',
        icon: '↶'
    },
    MODE: {
        type: 'MODE',
        icon: ''
    }
}

export const modes = {
    ADDITION: {
        type: 'ADDITION',
        icon: '+'
    },
    SUBSTRACTION: 
    {
        type: 'SUBSTRACTION',
        icon: '-'
    },
    MULTIPLICATION: {
        type: 'MULTIPLICATION',
        icon: 'x'
    },
    DIVISION: {
        type: 'DIVISION',
        icon: '/'
    }
}

export const config = {
    COUNTERLIMIT: [-9999999999,99999999999],
}