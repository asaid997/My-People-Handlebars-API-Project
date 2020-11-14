const renderPeople = new RenderPeople()

$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function (data) {
        console.log(data)
        renderPeople.render(data)
    }
});
