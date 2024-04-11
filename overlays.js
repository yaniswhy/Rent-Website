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
  var place = document.getElementById('place').value;
  var fullDescription = document.getElementById('full-description').value;

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

  if (category2 === 'Hourly') {
      priceHeading.textContent = price + 'Da/hr';
  } else if (category2 === 'Daily') {
      priceHeading.textContent = price + 'Da/dy';
  } else if (category2 === 'Weekly') {
      priceHeading.textContent = price + 'Da/wk';
  }
  price = priceHeading.textContent;
  mainInfoDiv.appendChild(nameHeading); 
  mainInfoDiv.appendChild(priceHeading);

  var placeDiv = document.createElement('div');
  placeDiv.classList.add('place');
  placeDiv.innerHTML = '<label for="place">Place :</label><p>' + place + '</p>';

  var descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('Description');
  descriptionDiv.innerHTML = '<label for="short-description">Description :</label><p>' + shortDescription + '</p>';

  infoDiv.appendChild(mainInfoDiv);
  infoDiv.appendChild(placeDiv);
  infoDiv.appendChild(descriptionDiv);

  itemDiv.appendChild(imgContDiv);
  itemDiv.appendChild(infoDiv);

  // Creating special overlay
  var specialOverlayDiv2 = document.createElement('div');
  specialOverlayDiv2.classList.add('special-overlay2');

  var specialOverlayDiv = document.createElement('div');
  specialOverlayDiv.classList.add('special-overlay');

  specialOverlayDiv2.appendChild(specialOverlayDiv);

  specialOverlayDiv.innerHTML = `
      <div class="img-cont">
          <img src="${img.src}">
      </div>
      <div class="info">
          <div class="main-info">
              <div class = "headr">
              <h3>${name}</h3> 
              <div class="price" ><h4>${price}</h4></div>
              </div>
              
              <div class="two">
              <div class="cat">
              <label for="place">Category :</label>
              <p>${category}</p>
              </div>
              
              <div class="place">
                  <label for="place">Place :</label>
                  <p>${place}</p>
              </div>
              </div>
          </div>
          <div class="Description">
              <label for="shortdescription"> Short Description :</label>
              <p>${shortDescription}</p>
          </div>
          <div class="Description">
              <label for="fulldescription"> Full Description :</label>
              <p>${fullDescription}</p>
          </div>
          <button class="btnerror">Rent</button>
      </div>
  `;

  itemDiv.appendChild(specialOverlayDiv2);
  document.querySelector('.item-container').appendChild(itemDiv);

  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('place').value = '';
  document.getElementById('file').value = '';
  document.getElementById('short-description').value = '';
  document.getElementById('full-description').value = '';

  closeOverlay();
});

document.addEventListener("DOMContentLoaded", function() {

  document.addEventListener('click', function(event) {
      const btnError = event.target.closest('.btnerror');
      if (btnError) {
        event.preventDefault();
          const errorOverlay = document.querySelector('.error-overlay');
          errorOverlay.classList.toggle('activeR');
          setTimeout(function() {
            errorOverlay.classList.remove('activeR');
          }, 4000);
      }
  });
});
  
  
document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener('click', function(event) {
        const item = event.target.closest('.item');
        if (item) {
            const specialOverlay = item.querySelector('.special-overlay2');
            const specialOverlay2 = item.querySelector('.special-overlay');
            specialOverlay.classList.toggle('active');
            specialOverlay2.classList.toggle('active');
        }
    });
  });

  
  