const imageUrls = [];
const $imageUrlInput = document.querySelector('input');
// console.log($imageUrlInput);
const $addImageButton = document.querySelector('button');
// console.log($addImageButton);
$addImageButton.addEventListener('click', () => {
  const url = $imageUrlInput.value;
  if (url) {
    imageUrls.push(url);
    $imageUrlInput.value = '';
    // console.log(imageUrls);
  }
});
