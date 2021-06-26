type actionType = {
    type: string
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: actionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {
                ...state,   //копирум то что было старое и меняем св-во collapsed
                collapsed: !state.collapsed
            }
default:
    throw new Error('Bad action type!')
}
return state;
}