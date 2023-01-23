function clearFields(){
    var title_input = document.getElementById("title_input");
    var text_input = document.getElementById("text_input");
    
    title_input.value = "";
    text_input.value = "";

}


// Path: js\script.js
function addCard(){
    var title_input = document.getElementById("title_input");
    var text_input = document.getElementById("text_input");
    var card_box = document.getElementById("card_box");
    

    var card = document.createElement("div");
    card.className = "card card_block";

    var card_body = document.createElement("div");
    card_body.className = "card-body";
    
    var card_title = document.createElement("h5");
    card_title.className = "card_title";
    card_title.innerHTML = title_input.value;
    
    var card_text = document.createElement("p");
    card_text.className = "card-text";
    card_text.innerHTML = text_input.value;
        
    var delete_button = document.createElement("a");
    delete_button.className = "btn btn-danger";
    delete_button.innerHTML = "Delete";

    var hide_card_button = document.createElement("a");
    hide_card_button.className = "btn btn-warning";
    hide_card_button.innerHTML = "Hide";

    delete_button.onclick = function(){
        card_box.removeChild(card);
    }
    
    hide_card_button.onclick = function(){
        if(card_text.style.display == "none"){
            card_text.style.display = "block";
            hide_card_button.innerHTML = "Hide";
        }else{
            card_text.style.display = "none";
            hide_card_button.innerHTML = "Show";
        }
    }
    
    card.appendChild(card_title);
    card.appendChild(card_text);
    card.appendChild(delete_button);
    card.appendChild(hide_card_button);
    
    card_box.appendChild(card);
    
    clearFields();
}