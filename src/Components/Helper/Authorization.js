import axios from 'axios';
import { STATUS_CODES } from 'http';

export const Authorization = (thisParams) => {

    const token = localStorage.getItem('token');
    axios.post('http://localhost:7770/verify-token', null, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then((res) => {
            console.log(res.data);

            // If user is not authorized to view certain page, the user will be redirected to landing page.
            axios.get(process.env.REACT_APP_API_BASE_URL + "/user-type/" + res.data.userId)

                .then((res2) => {
                    console.log('Här kollas usertypeID');
                    console.log(res2);
                    if (thisParams.state.role !== res2.data.role) {
                        thisParams.props.history.push("/");
                        console.log('Acces denied, you dont have permision Biiiiaaaaaatch!');
                    }
                })
                .catch((err2) => {
                    console.log(err2);
                })
        })
        .catch((err) => {
            console.log(err);
            thisParams.props.history.push("/register");
        })

}