const loginUser = async (credetials) => {
    return fetch('http://localhost:51550/api/Authenticate/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credetials)
    })
    .then(data => data.json())
}

export default loginUser