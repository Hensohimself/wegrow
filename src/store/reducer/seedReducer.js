const initState = {
    seeds: []
}

const seedReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_SEED':
            console.log('Seed created.', action.seed);
            return state;
        case 'CREATE_SEED_ERROR':
            console.log('Create Seed Error', action.err);
            return state;
        default:
            return state;
    }
}

export default seedReducer