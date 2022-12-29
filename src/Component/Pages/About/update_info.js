import React from 'react'
import { toast } from 'react-hot-toast';

const update_info = (user_data) => {
    console.log(user_data);

    const url = `${ process.env.REACT_APP_URL }/updateUser/${ user_data?.email }`
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_data)
    })
        .then(res => res.json())
        .then(data => {
            toast.success('Please reload the page')
        })
        .catch(e => console.log(e.message))
}

export default update_info
