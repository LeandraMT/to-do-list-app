function newItem() {

    // Creating the content within the the container
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something');
    } else {
        $('#list').append(li);
    }

    // Adding the delete button on the item list
    let crossOutButton = $('<crossOutButton class="xButton">X</crossOutButton>');
    li.append(crossOutButton);

    // Event listener for the X button
    crossOutButton.on('click', deleteListItem);

    // Creating the function for deleting the items
    function deleteListItem() {
        li.addClass('delete');
    }

    // Crossing out an item from the list
    function crossOut() {
        li.addClass('strike');
    }

    // Adding the event listener to the crossOut item
    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    // Reorder the items on the list
    $('#list').sortable();
}

$('#button').on('click', function () {
    newItem();
});

$(document).ready(function () {
    $('#start').click(function () {
        $('#home').fadeOut(1000, function () {
            $('#main').show();
        });

        $('#back').click(function () {
            $('#main').fadeOut(1000, function () {
                $('#home').fadeIn(1000);
            });
        });
    });
});