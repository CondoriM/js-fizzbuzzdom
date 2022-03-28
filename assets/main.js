const myLista = document.getElementById('lista');

for ( i = 1; i <= 100; i++){
    
    if (i % 3 == 0){
        const listItem = document.createElement('li');
        listItem.innerHTML = 'Fizz';

        myLista.appendChild(listItem);
    } else if (i % 5 == 0){
        const listItem = document.createElement('li');
        listItem.innerHTML = 'Buzz';

        myLista.appendChild(listItem);
    } else if (i % 5 == 0, i % 3 == 0){
        const listItem = document.createElement('li');
        listItem.innerHTML = 'FizzBuzz';

        myLista.appendChild(listItem);
    } else {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${i}`;

        myLista.appendChild(listItem);
    }
}
