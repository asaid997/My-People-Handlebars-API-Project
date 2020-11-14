const renderPeople = new RenderPeople()

$.ajax({
    url: 'https://randomapi.com/api/sy51qlml?key=TU05-Z3UY-FKAC-0EID&results=10&fmt=json',
    dataType: 'json',
    success: function (data) {
        console.log(data)
        renderPeople.render(data)
    }
});
