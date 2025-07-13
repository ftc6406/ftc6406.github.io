const MODULES = import.meta.glob("./public/assets/*");
console.log(MODULES);
for (const PATH in MODULES) {
    console.log(PATH);
    MODULES[PATH]().then((mod) => {
        console.log(PATH);
    });
}

function Gallery() {
    const images = [];

    return (
        <>
            <h1 className="pb-4 text-4xl text-center font-bold" id="gallery">
                Gallery
            </h1>
            <p>Hello, this is some placeholder text for the Gallery section.</p>
            {/* <img src="./assets/gallery/place_holder.jpg" /> */}
            {images.map((ele) => {
                console.log(ele);
                return <img src={ele} />;
            })}
        </>
    );
}

export default Gallery;
