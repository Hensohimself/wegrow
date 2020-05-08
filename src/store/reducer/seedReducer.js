const initState = {
    seeds: []
}

const seedReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_SEED':
            return state;
        case 'CREATE_SEED_ERROR':
            return state;
        default:
            return state;
    }
}

export default seedReducer