(function() {
  let shopfunc = {
    all: window.shopping,

    getProduct: function(categories) {
      //alert(categories);
      var ret = [];
      shopfunc.all.map(k => {
        if (k.category === categories) {
          ret.push({
            sku: `${k.sku}`,
            name: `${k.name}`,
            price: `${k.price}`,
            description: `${k.description}`,
            category: `${k.category}`,
            image: `${k.image}`,
            type: `${k.type}`
          });
        }
      });
      //alert(JSON.stringify(ret));
      this.createProduct(ret);
    },
    clearProduct: function() {
      let Table = document.getElementById('showproduct');
      Table.innerHTML = '';
    },
      createProduct: function(product){
        this.clearProduct();
        let table = product;
        let html = '';

        //html += '<tr>';
        for (let i in table) {
            // html += tableHelper.countryCodeToFlagImg(table[i].code);
            // html += '</td><td>' + table[i].code;
            
            //html += '<div class="w3-display-container w3-container">';
            html += '<div class="w3-col l3 s6">';
            html += '  <div class="w3-container card">';
            html += '   <a href="#openModal"><img id="id_img" class="p_image" ';
            html += '        src="'+'./Img/'+table[i].image+'"';
            html += '                  style="width:95%"';
            html += '      onclick="javascript:';
            html += '      global_method.createPopUp2(';
            html +=        table[i].sku;  
          
            html += '      );"></a>';
            html += '    <p>'+ table[i].name+'<br><b>%'+table[i].price+'</b></p>';
            html += '    <div id="bb3"></div>';
            html += '   </div>';
      
            html += '</div>';
           // html +='</div>';
          
            // html += '</div>';
            //html += '<div id="descp3" style="" value="' + table[i].description + '">' + table[i].description + '</div>';
        }
        //shopfunc.createPopUp2(table[i].sku)
        //javascript:global_method.createPopUp('+table[i].sku+');
        //#openModal
        //display:none;
        document.getElementById('showproduct').innerHTML = html;
    },

    createPopUp2:function(id){
      //document.getElementById('a1').innerHTML = 'html';

     
      var ret2 =[];
      shopfunc.all.map(k => {
      if(k.sku === id){
        ret2.push({
        sku: `${k.sku}`,
        name:`${k.name}`,
        price:`${k.price}`,
        description:`${k.description}`,
        category:`${k.category}`,
        image:`${k.image}`,
        type:`${k.type}`
        });//push
      }//if
      
     });//map

     //alert(ret2[0].name);

      // let html='';
      // html += '<div id="openModal" class="modalDialog">';
      //     html += '    <div>';
      //     html += '        <a href="#close" title="Close" class="close">X</a>';
      //     html += '        <h2 id="aaa">Product Description</h2>';
      //     html += '        <div style= "font-family: Verdana; font-size: 12px">Name: '+ ret2[0].name +'</br>';
      //     html += '        Price: $'+ ret2[0].price +'</br>';
      //     html += '        Descp.: '+ ret2[0].description +'</div></br>';
      //     html += '        <img src="./Img/'+ ret2[0].image +'"';
      //     html+= ' style="width:360px ; height:510px"></img>'; 
 
      //     html += '    </div>';
      //     html += '</div>';

      let html='';
            html += '<div id="openModal" class="modalDialog" >';
                html += '    <div >';
                html += '        <a href="#close" title="Close" class="close">X</a>';
                html += '        <h2 id="aaa">Product Description</h2>';
                html += '        Name: '+ ret2[0].name +'</br>';
                html += '        Price: $'+ ret2[0].price +'</br>';
                html += '        Descp.: '+ ret2[0].description +'</br>';
                //----------------------------------
                html += '        <div class="row">';
                html += '          <form class="add-to-cart" action="" method="post">';
                html += '            <div class="column"><p>Qty:<input text="text" size="2" value="1"/></p></div>'; 
                html += '            <div class="column">';
                html += '            <p><input type="submit" value="Add to cart" class="btn" /></p></div>';
                html += '          </form>';
                html += '        </div>';
                html += '        <div><img src="./w3images/'+ ret2[0].image +'" ';
                html += '          style="width:360px; height:510px"></img>';
                html += '         </div>';
                //---------------------------------               
                html += '    </div>';

                html += '</div>';

          document.getElementById('bb3').innerHTML = html;
      //alert(id);
      return id;
  },

    createPopUp: function(id) {
      let html2 = '';
      var ret2 = [];
      shopfunc.all.map(k => {
        if (k.sku === id) {
          ret2.push({
            sku: `${k.sku}`,
            name: `${k.name}`,
            price: `${k.price}`,
            description: `${k.description}`,
            category: `${k.category}`,
            image: `${k.image}`,
            type: `${k.type}`
          }); //push
        } //if
      }); //map
      html2 = 'SKU: #' + ret2[0].sku + '\n';
      html2 += 'NAME: ' + ret2[0].name + '\n';
      html2 += 'PRICE: $' + ret2[0].price + '\n';
      html2 += 'DESC: ' + ret2[0].description + '\n';
      //  html2 += '<img src="./w3images/jean_1.jpg"/>';

      alert(html2);
    }
  };

  function setupMenuHandlers() {
    // window.countriesData = require('./countries-data.js');
    //let nodemailer = require('../node_modules/nodemailer');
    // var global_method = shopfunc;
    window.onload = global_method = shopfunc;

    // window.onload = shopfunc.getAlert2();
  }
  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers;
})();
