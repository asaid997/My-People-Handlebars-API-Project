class RenderPeople {

    constructor() {
        this.source = $('#person-template').html();
        this.template = Handlebars.compile(this.source);
    }

    render(data) {
        let newHTML = this.template(data);

        $('#container').append(newHTML);
    }
}