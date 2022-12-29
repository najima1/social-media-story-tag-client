const SaveUser = (userInfo, data) => {


    const user = {
        displayName: userInfo.displayName,
        email: userInfo.email,
        address: data.address,
        university: data.university
    }

    //server user save url
    const url = `${ process.env.REACT_APP_URL }/user/${ userInfo.email }`

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res, 'resolve');
        })
        .catch((e) => console.log(e.message))
}

export default SaveUser