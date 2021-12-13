function setThumbnail(event) {
    var reader = new FileReader();
    reader.onload = function(event){
        const imageContainer = document.querySelector("div#image_container");
        var img = document.createElement("img");
        img.setAttribute("src",event.target.result);
        image_container.innerHTML = '';
        imageContainer.appendChild(img);
    };
    
    reader.readAsDataURL(event.target.files[0]);
}