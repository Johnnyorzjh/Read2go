function change_us_advice(us_color,us_DateUpdated,us_Details,us_Level,us_Threats,country_name){
    $('#country_name').text(country_name)
    $('#us_advice').css('background-color',us_color)
    $('#us_DateUpdated').text(us_DateUpdated)
    $('#us_Details').text(us_Details)
    $('#us_Level').text(us_Level)
    $('#us_Threats').text(us_Threats)
}

function change_au_advice(au_color,au_DateUpdated,au_Details,au_Level,au_Threats){
    $('#au_DateUpdated').text(au_DateUpdated)
    $('#au_advice').css('background-color',au_color)
    $('#au_Details').text(au_Details)
    $('#au_Level').text(au_Level)
    $('#au_Threats').text(au_Threats)
}

function change_ca_advice(ca_color,ca_DateUpdated,ca_Level){
    $('#ca_advice').css('background-color',ca_color)
    $('#ca_DateUpdated').text(ca_DateUpdated)
    $('#ca_Level').text(ca_Level)
}