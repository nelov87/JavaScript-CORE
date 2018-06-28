function increment(selector) {
    let conteiner = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    //tex foramting
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    //buttons formating
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    //list formating
    list.addClass('results');

    //events
    $(incrementBtn).on("click", function () {
        textArea.val(+textArea.val() + 1);
    });
    $(addBtn).on("click", function () {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    conteiner.append(fragment);


}