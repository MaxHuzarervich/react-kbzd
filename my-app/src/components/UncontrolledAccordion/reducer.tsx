type actionType = {
    type: string
}
export const reducer = (state: boolean, action: actionType) => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return !state;
        default:
            throw new Error('Bad action type!')
    }
    return state;
}