document.getElementById("additem").addEventListener("click", function() {
    document.querySelector(".additem-overlay.overlay").style.display = "block";
  });
  
  function closeOverlay() {
    document.querySelector(".additem-overlay.overlay").style.display = "none";
  }
  

    document.getElementById('add-item-button').addEventListener('click', function(event) {
    event.preventDefault(); 


    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;

    var category2 = document.getElementById('category2').value;

    var category = document.getElementById('category').value;
    
    var file = document.getElementById('file').files[0];
    var shortDescription = document.getElementById('short-description').value;
    
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    var imgContDiv = document.createElement('div');
    imgContDiv.classList.add('img-cont');
    var img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    imgContDiv.appendChild(img);

    var infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    var mainInfoDiv = document.createElement('div');
    mainInfoDiv.classList.add('main-info');
    var nameHeading = document.createElement('h3');
    nameHeading.textContent = name;
    var priceHeading = document.createElement('h3');

    if (category === 'Hourly') {
      priceHeading.textContent = price + 'Da/hr';
    } 
     if (category2 === 'Daily') {
      priceHeading.textContent = price + 'Da/dy';
    }
     if (category2 === 'Weekly') {
      priceHeading.textContent = price + 'Da/wk';
    }
    mainInfoDiv.appendChild(nameHeading);
    mainInfoDiv.appendChild(priceHeading);

   
    var descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('Description');
    var descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = shortDescription;
    descriptionDiv.appendChild(descriptionParagraph);

    infoDiv.appendChild(mainInfoDiv);
    infoDiv.appendChild(descriptionDiv);

    itemDiv.appendChild(imgContDiv);
    itemDiv.appendChild(infoDiv);

   
    document.querySelector('.item-container').appendChild(itemDiv);

    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('place').value = '';
    document.getElementById('file').value = '';
    document.getElementById('short-description').value = '';
    document.getElementById('full-description').value = '';

 
    closeOverlay();
});

