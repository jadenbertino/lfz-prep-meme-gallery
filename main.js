const $gallery = document.querySelector('main');
const imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://c.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg'
];

const $imageUrlInput = document.querySelector('input');
const $addImageButton = document.querySelector('button');
$addImageButton.addEventListener('click', () => {
  const url = $imageUrlInput.value;
  if (url) {
    imageUrls.push(url);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  imageUrls.forEach((_, ind) => {
    const $imageElement = document.createElement('img');
    $imageElement.classList.add('gallery-image');
    $imageElement.src = imageUrls[ind];
    $gallery.appendChild($imageElement);
  });
}

updateGallery();
