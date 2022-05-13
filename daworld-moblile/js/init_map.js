$.get('map/us_result.json',function(rs){
    for(let i in rs)
    {
        us_result[i] = rs[i]
        $('#selects').append(`<option value="${i}"> ${i} </option>`);
    }
})
$.get('map/ca_result.json',function(rs){
    for(let i in rs)
    {
        ca_result[i] = rs[i]
    }
})
$.get('map/au_result.json',function(rs){
    for(let i in rs)
    {
        au_result[i] = rs[i]
    }
})
// $.get('map/world.json',function(rs){
//     const features = rs['features']
//     for(let i of features)
//     {
//         const country_name = i["properties"]['name']
//     }
// })