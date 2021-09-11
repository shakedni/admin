import Active from 'views/examples/Active';
import firebase from '../firebase'


//FETCH ACTIVE REPORT
export const fetchActiveReport = () => {
    console.log();
    return (dispatch) => {
        firebase.firestore().collection("reports").where('status', '==', 'active').orderBy("createdAt", "desc")
            .onSnapshot((querySnapshot) => {
                var activeData = [];


                querySnapshot.forEach((doc) => {
                    activeData.push({
                        id: doc.id, ...doc.data()
                    });

                });



                dispatch({
                    type: 'FETCH_ACTIVE_DATA',
                    payload: activeData

                })

            })
    }


}




//FETCH PENDING REPORT
export const fetchPendingReport = () => {
    console.log();
    return (dispatch) => {

        firebase.firestore().collection("reports").where('status', '==', 'pending').orderBy("createdAt", 'desc')
            .onSnapshot((querySnapshot) => {
                var pendingData = [];

                querySnapshot.forEach((doc) => {
                    console.log("time", doc.createdAt)
                    pendingData.push({
                        id: doc.id, ...doc.data()
                    });

                });
                dispatch({
                    type: 'FETCH_PENDING_DATA',
                    payload: pendingData

                })

            })
    }


}




// active status...

export const statusActive = (id) => {
    console.log(' key ', id)
    return (dispatch) => {

        firebase.firestore().collection('reports').doc(id).update({
            status: "active"

        })
        dispatch({
            type: 'STATUS_ACTIVE',
            // payload: obj
        })
    }


}

// block status...

export const statusBlock = (id) => {
    console.log(' key ', id)
    return (dispatch) => {

        firebase.firestore().collection('reports').doc(id).update({
            status: "pending"

        })
        dispatch({
            type: 'STATUS_PENDING',
            // payload: obj
        })
    }


}


//Delete/Report

export const deleteReport = (report) => {
    console.log('hamza', report)
    return (dispatch) => {
        firebase.firestore().collection('reports').doc(report).delete()
        dispatch({
            type: 'DELETE_REPORT',
            
        })
    }
}
