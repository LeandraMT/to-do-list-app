function newItem(){

    // Creating the content within the the container
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === ''){
        alert('You must write something');
    } else {
        $('#list').append(li);
    }

    // Adding the delete button on the item list
    let crossOutButton = $('<crossOutButton>x</crossOutButton>');
    li.append(crossOutButton);

    // Event listener for the X button
    crossOutButton.on('click', deleteListItem);

    // Creating the function for deleting the items
    function deleteListItem() {
    li.addClass('delete');
    }

    // Crossing out an item from the list
    function crossOut(){
        li.toggleClass('strike');
    }

    // Adding the event listener to the crossOut item
    li.on('dblclick',  function crossOut(){
        li.toggleClass('strike');
    });

    // Reorder the items on the list
    $('#list').sortable();
}