function show() {
    const preview = document.getElementById('image');
    const photo = document.getElementById('photo');

    console.log("it's here2")
    const reader = new FileReader();
    const file = photo.files[0];
    reader.onload = (e) => {
        preview.src = e.target.result;
        console.log(preview);
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}