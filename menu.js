$(document).ready(function(){
    $.get("https://obscure-tundra-54269.herokuapp.com/bar-food")
        .done(function(data){

            var appetizers = data.appetizers
            var entrees = data.entrees
            var desserts = data.desserts
    

            var html = `
                <div id="appetizers">APPETIZERS</div>
            `
            
            html += appetizers.map(app => {
                return `
                <div class="title">${app.name}</div>
                <div class="details">
                    <div class="detail-indv">$${app.price}</div>
                    <div class="detail-indv">${app.description}
                    ${app.extra.spicy?'<i class="fa fa-fire"></i>' : ''}
                    ${app.extra.glutenfree?'<i class="fa fa-circle"></i>' : ''}
                    ${app.extra.vegetarian?'<i class="fa fa-leaf"></i>' : ''}</div>
                </div>
                `
            }).join('')


            var html2 = `
                <div id="entrees2">ENTREES</div>
            `

            html2 += entrees.map(ent => {
                return `
                <div class="title">${ent.name}</div>
                <div class="details">
                    <div class="detail-indv">$${ent.price}</div>
                    <div class="detail-indv">${ent.description}
                    ${ent.extra.spicy?'<i class="fa fa-fire"></i>' : ''}
                    ${ent.extra.glutenfree?'<i class="fa fa-circle"></i>' : ''}
                    ${ent.extra.vegetarian?'<i class="fa fa-leaf"></i>' : ''}</div>
                </div>
                `
            }).join('')


            var html3 = `
                <div id="desserts2">DESSERTS</div>
            `

            html3 += desserts.map(des => {
                return `
                <div class="title">${des.name}</div>
                <div class="details">
                    <div class="detail-indv">$${des.price}</div>
                    <div class="detail-indv">${des.description}
                    ${des.extra.spicy?'<i class="fa fa-fire"></i>' : ''}
                    ${des.extra.glutenfree?'<i class="fa fa-circle"></i>' : ''}
                    ${des.extra.vegetarian?'<i class="fa fa-leaf"></i>' : ''}</div>
                </div>
                `
            }).join('')
            
    $("#apps").html(html)
    $("#entrees").html(html2)
    $("#dessert").html(html3)
    // console.log(data)
    })
})  
