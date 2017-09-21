$(document).ready(function (e) {

    var graph = graphql("/graphql")//connect

    var user = graph(`query ($id: ID!){
				User(id:$id) {
				    email
                    name
                    company
                    first_name
                    last_name
                    address
                    city
                    contry
                    postal_code
                    about_me
				}
			}`, {
            id: "59c3db829cbf74155c62bb5c"
        }).then(function (response) {
            let user = response.User;
            var company = user.company;
            var username = user.name;
            var email = user.email;
            var firstName = user.first_name;
            var lastName = user.last_name;
            var address = user.address;
            var city = user.city;
            var country = user.contry;
            var postalCode = user.postal_code;
            var aboutMe = user.about_me;

            $('#company').val(company);
            $('#username').val(username);
            $('#email').val(email);
            $('#firstName').val(firstName);
            $('#lastName').val(lastName);
            $('#address').val(address);
            $('#city').val(city);
            $('#country').val(country);
            $('#zipCode').val(postalCode);
            $('#aboutMe').val(aboutMe);

            $('#title').text(firstName + " " + lastName);
            $('#smallTitle').text(username);
            $('#description').text("\"" + aboutMe + "\"");
        }).catch(function (error) {
            alert(error);
        })

});