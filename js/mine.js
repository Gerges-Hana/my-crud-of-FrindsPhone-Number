var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var mainBtn = document.getElementById("mainBotn");
// console.log(productName , productDesc);

/***************************** */
var mainIndex = 0;
/***************************** */


var pruductContaner;
//  chik if you have olde data 

if (localStorage.getItem("productList") == null) {
    pruductContaner = [];
} else {
    // json parse to change from string to array of object 
    pruductContaner = JSON.parse(localStorage.getItem("productList"));

    displayProduct();
}




// to add new product 
mainBtn.addEventListener('click', function addProducte() {



    if (chickInput() == true) {

        var product = {
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            desc: productDesc.value
        }
        if (mainBtn.innerHTML == "Add Frind") {
            pruductContaner.push(product);
        } else {
            pruductContaner.splice(mainIndex, 1, product);
            mainBtn.innerHTML = "Add Frind"
        }

        localStorage.setItem("productList", JSON.stringify(pruductContaner));
        clear();
        displayProduct();

    } else {

        alert("your input no't full");
    }

});




function displayProduct() {
    cartona = ``;
    for (var i = 0; i < pruductContaner.length; i++) {

        cartona += `<tr>
         <td> ${i+1} </td> 
         <td> ${pruductContaner[i].name} </td> 
         <td> ${pruductContaner[i].price} </td> 
         <td> ${pruductContaner[i].category}</td> 
         <td> ${pruductContaner[i].desc}</td>
         <td><button onclick="Update(${i})" class="btn btn-outline-warning">Update</button></td>
         <td><button onclick="Delete(${i})" class="btn btn-outline-danger">Delete</button></td>
             
         </tr>`

    }

    document.getElementById("tableBody").innerHTML = cartona;
    clear();



};




function clear() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDesc.value = "";
}







function chickInput() {
    if (productName.value != "" && productPrice.value != "" && productCategory.value != "" && productDesc.value != "")

    {
        return true;
    } else {
        return false;
    }
}



function Delete(index) {
    pruductContaner.splice(index, 1);
    displayProduct();
    localStorage.setItem("productList", JSON.stringify(pruductContaner))

}


function Update(i) {
    // var ii = i;

    mainIndex = i;




    productName.value = pruductContaner[i].name;
    productPrice.value = pruductContaner[i].price;
    productCategory.value = pruductContaner[i].category;
    productDesc.value = pruductContaner[i].desc;
    mainBotn.innerHTML = "Update";
    window.scroll({
        top: 0,
        left: 0,
        behavior:"smooth"
    });


}





function searchProductName(pName) {

    var cartona = ``;
    for (var i = 0; i < pruductContaner.length; i++) {
        if (pruductContaner[i].name.toLowerCase().includes(pName.toLowerCase())) {

            var pNameInput = document.getElementById("searchInput").value;


            cartona += `<tr>
            <td> ${i+1} </td> 
            <td> ${pruductContaner[i].name.replace(pNameInput ,'<span>'+pNameInput+'</span>')} </td> 
            <td> ${pruductContaner[i].price} </td> 
            <td> ${pruductContaner[i].category}</td> 
            <td> ${pruductContaner[i].desc}</td>
            <td><button class="btn btn-outline-warning">Update</button></td>
            <td><button onclick="Delete(${i})" class="btn btn-outline-danger">Delete</button></td>
                
            </tr>`
        } else {
            console.log("m4 mowgod");
        }
    }

    document.getElementById("tableBody").innerHTML = cartona;
}