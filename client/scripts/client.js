const client = {};

client.userTmpl = (user) => {

    return `<h1>HEJ MED DIG ${user.name} - ${user.age}</h1>`

}


client.init = () => {

    const userList = document.querySelector('#user-list');

    fetch('http://localhost:3000/users').then(res => res.json()).then(data => {

      
        userList.innerHTML = "";
        data.map( (user) => {

            userList.insertAdjacentHTML("beforeend", client.userTmpl(user))

        } )

    
    });

};


client.init();


