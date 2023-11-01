// let user_name = prompt("input name");
// document.querySelector("#user-name").innerHTML = user_name;

let birth_group = document.querySelector(".body-3 .birthday-cards");
let wed_group = document.querySelector(".body-3 .wedding-cards");
let cust_group = document.querySelector(".body-3 .custom-cards");
window.addEventListener("resize", resize);
function resize(){
    if(window.innerWidth < 700){
        document.querySelector(".body-3 .black-cube .wedding").addEventListener("click", wedding);
        document.querySelector(".body-3 .black-cube .birthday").addEventListener("click", birthday);
        document.querySelector(".body-3 .black-cube .custom").addEventListener("click", custom);
        function wedding(){
            wed_group.style.display = "flex";
            birth_group.style.display = "none";
            cust_group.style.display = "none";
            document.querySelector(".body-3 .black-cube button:first-child").style.backgroundColor = "transparent";
        }
        function birthday(){
            wed_group.style.display = "none";
            birth_group.style.display = "flex";
            cust_group.style.display = "none";
            document.querySelector(".body-3 .black-cube button:first-child").style.backgroundColor = "rgb(226, 170, 14)";
        }
        function custom(){
            wed_group.style.display = "none";
            birth_group.style.display = "none";
            cust_group.style.display = "flex";
            document.querySelector(".body-3 .black-cube button:first-child").style.backgroundColor = "transparent";
        }
    }
    else{
        birth_group.style.display = "flex";
        wed_group.style.display = "flex";
        cust_group.style.display = "flex";
    }
}
function resizeb(){
    if(window.innerWidth < 700){
        document.querySelector(".body-3 .black-cube .wedding").addEventListener("click", wedding);
        document.querySelector(".body-3 .black-cube .birthday").addEventListener("click", birthday);
        document.querySelector(".body-3 .black-cube .custom").addEventListener("click", custom);
        function wedding(){
            wed_group.style.display = "flex";
            birth_group.style.display = "none";
            cust_group.style.display = "none";
            document.querySelector(".body-3 .black-cube button:first-child").style.backgroundColor = "transparent";
        }
        function birthday(){
            wed_group.style.display = "none";
            birth_group.style.display = "flex";
            cust_group.style.display = "none";
            document.querySelector(".body-3 .black-cube button:first-child").style.backgroundColor = "rgb(226, 170, 14)";
        }
        function custom(){
            wed_group.style.display = "none";
            birth_group.style.display = "none";
            cust_group.style.display = "flex";
            document.querySelector(".body-3 .black-cube button:first-child").style.backgroundColor = "transparent";
        }
    }
    else{
        birth_group.style.display = "flex";
        wed_group.style.display = "flex";
        cust_group.style.display = "flex";
    }
}
resizeb();
let read_more = document.querySelector(".body-4 .read-more-1");
let read_more_open = document.querySelector(".body-4 #read-more");
let read_more_close = document.querySelector(".body-4 #reed-more-1");
read_more.addEventListener("click", () => {if(read_more.innerHTML == "read more"){
    readMoreOpen();
}else if(read_more.innerHTML = "hide"){
    // alert("no");
    readMoreaClose();
}
})
function readMoreOpen(){
    // alert("yoo");
    read_more_close.innerHTML = read_more_open.innerHTML;
    read_more.innerHTML = "hide";
}
function readMoreaClose(){
    // alert("tiio");
    read_more_close.innerHTML = read_more_close.innerHTML;
    read_more.innerHTML = "read-more";
}