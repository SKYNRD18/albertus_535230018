$(document).ready(function() {
    // Add a new task
    $('#addTaskButton').click(function() {
        const taskText = $('#taskInput').val().trim();
        if (taskText !== "") {
            const taskItem = $('<li></li>').text(taskText);
            const deleteButton = $('<button></button>').text('Delete').addClass('delete-button');

            taskItem.append(deleteButton);
            $('#taskList').append(taskItem);

            $('#taskInput').val('');
        }
    });

    // Mark task as completed
    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    // Delete task
    $(document).on('click', '.delete-button', function() {
        $(this).parent().remove();
    });

    // Filter tasks
    $('.filter-button').click(function() {
        const filter = $(this).data('filter');

        $('li').each(function() {
            if (filter === 'all') {
                $(this).show();
            } else if (filter === 'completed' && $(this).hasClass('completed')) {
                $(this).show();
            } else if (filter === 'pending' && !$(this).hasClass('completed')) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
