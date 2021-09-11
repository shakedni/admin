const initialState = {
    userData: [],

}



const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_DATA':
            return {
                ...state,
                userData: action.payload
            };
            default:
                return {...state};
        }
    }

    export default userReducer