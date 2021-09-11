


const initialState = {
    activeReports: [],
    pendingReports: []

}



const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ACTIVE_DATA':
            return {
                ...state,
                activeReports: action.payload
            };
        case 'FETCH_PENDING_DATA':
            return {
                ...state,
                pendingReports: action.payload
            };
        case 'STATUS_ACTIVE':
            return {
                ...state,

            };
        case 'STATUS_PENDING':
            return {
                ...state,

            };
        case 'DELETE_REPORT':
            return {
                ...state,
               
            }

        default:
            return state;
    }
}

export default reportReducer





