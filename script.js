/* Fill your code*/
class Blog{
    constuctor(title,detail){
        this.title=title;
        this.detail=detail;
    }
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
    addDescription(){
        var description_card = document.createElement('h1');
        description_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(description_card);
        description_card.innerHTML += this.title;

    }
}
let addButton = document.querySelector("#addBlog");
console.log(addButton);
addButton.addEventListener("click", function () {
 document.querySelector("#popupContact").style.display = "block";
});


let closeButton= document.querySelector("#close");
closeButton.addEventListener("click",function (){
    document.querySelector("#popupContact").style.display = "none"
});

let postButton=document.querySelector("#post").addEventListener("click",function(){ 
  let title = document.querySelector("#title").value;
  let descripition = document.querySelector("#detail").value;
  let blog = new Blog(title, descripition);
  blog.addTitle();
  blog.addDecription();

  document.querySelector("#popupContact").style.display = "none";
  document.querySelector("#post-img").style.display = "block";
});



