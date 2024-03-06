const create_btn = document.querySelector(".create-btn");
create_btn.addEventListener("click",createTodo);
let list_items = document.querySelector(".list-items"); 
function createTodo()
{
    let input = document.querySelector("#text");
    text = input.value;
    if(text == "")
        return;
    if(create_btn.classList.contains("bright-btn"))
    {
        list_items.insertAdjacentHTML("afterbegin",`<div class="item bright-item">
    <button class="checkbox bright-btn" onclick="strike_item(this)"></button>
    <p class="todo-text bright-todo-text">${text}</p>
    <button class="cross-btn bright-cross-btn" onclick="remove_item(this)"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button>
</div>`);
    input.value = "";
    list_items = document.querySelector(".list-items");
    }
    else{
    list_items.insertAdjacentHTML("afterbegin",`<div class="item">
    <button class="checkbox" onclick="strike_item(this)"></button>
    <p class="todo-text">${text}</p>
    <button class="cross-btn" onclick="remove_item(this)"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button>
</div>`);
    input.value = "";
    list_items = document.querySelector(".list-items");
    }
    let num=0;
    const items = document.querySelectorAll(".item");
    for(let i=0; i<items.length; i++)
    {
        if(!(items[i].querySelector(".todo-text").classList.contains("strike")))
        {
            num++;
        }
    }
    let itemsleft = document.querySelector(".items-left");
    itemsleft.innerHTML = `${num} items left`;
}
function remove_item(button)
{
    button.closest(".item").remove();
}
function strike_item(button)
{
    const div = button.closest(".item");
    const text = div.querySelector(".todo-text");
    if(button.style.backgroundImage != "")
    {
        button.style.backgroundImage = "";
        button.innerHTML = "";
        text.classList.remove("strike");
    }
    else{
    button.style.backgroundImage = "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))";
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>`;
    text.classList.add("strike");
    }
    let num=0;
    const items = document.querySelectorAll(".item");
    for(let i=0; i<items.length; i++)
    {
        if(!(items[i].querySelector(".todo-text").classList.contains("strike")))
        {
            num++;
        }
    }
    let itemsleft = document.querySelector(".items-left");
    itemsleft.innerHTML = `${num} items left`;
}
function theme_change()
{
    const items = document.querySelectorAll(".item");
    const checkbox_btn = document.querySelectorAll(".checkbox");
    const text = document.querySelectorAll(".todo-text");
    const cross_btn = document.querySelectorAll(".cross-btn");
    if(create_btn.classList.contains("bright-btn"))
    {
        document.querySelector(".theme-btn").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>`;
    document.body.style.backgroundImage = "url('bg-desktop-dark.jpg')";
    document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
    document.querySelector("#text").style.backgroundColor = "hsl(235, 24%, 19%)";
    document.querySelector("#text").style.color = "hsl(234, 39%, 85%)";
    document.querySelector(".new-todo").style.backgroundColor = "hsl(235, 24%, 19%)";
    document.querySelector(".last-item").style.backgroundColor = "hsl(235, 24%, 19%)";
    document.querySelector(".last-item").style.color = "rgba(202, 205, 232, 0.3)";
    const tab_btn = document.querySelectorAll(".btn");
    for(let i=0; i<tab_btn.length; i++)
    {
        tab_btn[i].classList.remove("bright-tab");
    }
    create_btn.classList.remove("bright-btn");
    for(let i=0; i<items.length; i++)
    {
        items[i].classList.remove("bright-item");
        checkbox_btn[i].classList.remove("bright-btn");
        text[i].classList.remove("bright-todo-text");
        cross_btn[i].classList.remove("bright-cross-btn");
    }
    }
    else{
    document.querySelector(".theme-btn").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>`;
    document.body.style.backgroundImage = "url('bg-desktop-light.jpg')";
    document.body.style.backgroundColor = "hsl(236, 33%, 92%)";
    document.querySelector("#text").style.backgroundColor = "hsl(0, 0%, 98%)";
    document.querySelector("#text").style.color = "hsl(235, 19%, 35%)";
    document.querySelector(".new-todo").style.backgroundColor = "hsl(0, 0%, 98%)";
    document.querySelector(".last-item").style.backgroundColor = "hsl(0, 0%, 98%)";
    document.querySelector(".last-item").style.color = "hsl(236, 9%, 61%)";
    const tab_btn = document.querySelectorAll(".btn");
    for(let i=0; i<tab_btn.length; i++)
    {
        tab_btn[i].classList.add("bright-tab");
    }
    create_btn.classList.add("bright-btn");
    for(let i=0; i<items.length; i++)
    {
        items[i].classList.add("bright-item");
        checkbox_btn[i].classList.add("bright-btn");
        text[i].classList.add("bright-todo-text");
        cross_btn[i].classList.add("bright-cross-btn");
    }
}
}
function active_tab()
{
    all_tab();
    const items = document.querySelectorAll(".item");
    for(let i=0; i<items.length; i++)
    {
        if(items[i].querySelector(".todo-text").classList.contains("strike"))
        {
            items[i].style.display = "none";
        }
    }
}
function all_tab()
{
    const items = document.querySelectorAll(".item");
    for(let i=0; i<items.length; i++)
    {
        items[i].style.display = "";
    }
}
function completed_tab()
{
    all_tab();
    const items = document.querySelectorAll(".item");
    for(let i=0; i<items.length; i++)
    {
        if(!(items[i].querySelector(".todo-text").classList.contains("strike")))
        {
            items[i].style.display = "none";
        }
    }
}
function clear_completed()
{
    const items = document.querySelectorAll(".item");
    for(let i=0; i<items.length; i++)
    {
        if(items[i].querySelector(".todo-text").classList.contains("strike"))
        {
            items[i].remove();
        }
    }
}
