import firebase from '../firebase'


//fetchingUsers...

export const fetchUsers = () => {
    console.log();
    return (dispatch) => {
        firebase.firestore().collection("users")
            .onSnapshot((querySnapshot) => {
                var userData = [];


                querySnapshot.forEach((doc) => {
                    userData.push({
                        id: doc.id, 
                        ...doc.data()  
                    });

                });



                dispatch({
                    type: 'FETCH_USER_DATA',
                    payload: userData

                })

            })
    }


}