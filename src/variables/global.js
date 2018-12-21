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
        icon: '+',
        operator: '+'
    },
    SUBSTRACTION: 
    {
        type: 'SUBSTRACTION',
        icon: '-',
        operator: '-'
    },
    MULTIPLICATION: {
        type: 'MULTIPLICATION',
        icon: 'x',
        operator: '*'
    },
    DIVISION: {
        type: 'DIVISION',
        icon: '/',
        operator: '/'
    }
}

export const config = {
    COUNTERLIMIT: [-9999999999,99999999999],
}