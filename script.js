let left=document.getElementById("left");
let right=document.getElementById("right");
let total1=document.getElementById("total1");

const Products = [

  { id: 1,img:"718UHZnqIiL._SX575_.jpg" ,name: "Nike Mens Air Zoom Pegasus", price:'8999', quantity: 0 },
  { id: 2,img:"71YkKdI35wL._SX575_.jpg", name: "NIKE Mens Downshifter", price:"7999", quantity: 0 },
  { id: 3,img:"81jJEiduEoL._SX575_png" ,name: "Nike Mens Air Zoom Pegasus", price: '1999', quantity: 0 }

];
    
    function cart() {
     right.innerHTML='<h1 class="cart1">cart</h1>'
      let total=0;
        Products.forEach((elem)=>{
            total1.style.display="block"
            let span = document.createElement("span");
            if(elem.quantity>0){
                console.log("present is not working");
                let div = document.createElement("div");
                div.classList.add("cart_box");
                let p = document.createElement("p");
                 span.innerText = `${elem.quantity}*${elem.price} :`;
    
                p.innerText = elem.name;

                total+=(elem.quantity * elem.price);
                total1.innerText=`Total : ₹${total}`;
               
                div.appendChild(span);
                div.appendChild(p);
                right.appendChild(div);
               
                
            }
            if(total==0){
              total1.style.display="none";
            }


        })
    
    }
    

    function displayproduct(){
        
       
       Products.forEach((val)=>{
        

       let div=document.createElement("div");
       div.classList.add("box");

       let div9=document.createElement("div");
       div9.classList.add("box2");

       let img1=document.createElement("img");
        img1.setAttribute("src", val.img);
        img1.classList.add("img1");
       let  h1=document.createElement("h1");
        h1.innerText = val.name;
      let  price=document.createElement("p");
        price.innerText="₹"+val.price;
        price.classList.add("price")

        let  btnminus=document.createElement("button");
         btnminus.innerText="remove"
        btnminus.classList.add("material-symbols-outlined")
        btnminus.addEventListener(("click"),()=>{
            if(val.quantity === 0) return 0;
            quantity.innerHTML=--val.quantity;
            console.log(Products)
            cart();
            
        })

      let quantity=document.createElement("p");
        quantity.innerHTML=val.quantity;
        quantity.classList.add("quantity")
       let  btnplus=document.createElement("button");

        btnplus.innerText="add"
        btnplus.classList.add("material-symbols-outlined")
        btnplus.addEventListener(("click"),()=>{
            quantity.innerHTML=++val.quantity;
            cart();
          

        })
     
      let div10=document.createElement("div");
      div10.classList.add("div10");
        div.appendChild(div9);
        div9.appendChild(img1);
        div9.appendChild(h1);
        div10.appendChild(btnminus);
        div10.appendChild(quantity);
       div10.appendChild(btnplus);
        div10.appendChild(price);
        div.appendChild(div10);
        
        left.appendChild(div);

        })

    }

displayproduct();
  