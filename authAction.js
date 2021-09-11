import firebase from '../firebase'

//Login..

export const login = credentials => {

    return (dispatch) => {
        console.log(credentials)
        dispatch({
            type: "ACTION_REQUEST",
        });
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(async (data) => {
                // 670zL8H9LQVRGLnoxEZP09rX6FD2
                if (data.user.uid != "pDXX43npJEfSPCJtsOL1CW7ezmA3") {
                    alert("You are not a ReportingAdmin, You can't Login!")
                } else {
                    firebase
                        .firestore()
                        .collection("users")
                        .doc(data.user.uid)
                        .onSnapshot((doc) => {
                            console.log(doc.data());
                            var tempUser = {};
                            tempUser = { id: doc.id, ...doc.data() };
                            dispatch({
                                type: "LOGIN_SUCCESS",
                                user: tempUser,
                                error: ""
                            });
                            dispatch({
                                type: "ACTION_REQUEST_END",
                            });
                        });
                }
            })
            .catch((error) => {
                dispatch({
                    type: "LOGIN_FAIL",
                    uid: "",
                    error: error,
                });
                dispatch({
                    type: "ACTION_REQUEST_END",
                });
                alert(error, "danger");
            });
    }
}

export const logout = () => {
    return (dispatch) => {
        console.log("Logging Out")
        firebase
            .auth()
            .signOut()
            .then((data) => {
                dispatch({
                    type: "LOGOUT_SUCCESS",
                    uid: "",
                    error: "",
                });
            })
            .catch((error) => {
                dispatch({
                    type: "LOGOUT_FAIL",
                    uid: "",
                    error: error,
                });
            });
    };
};