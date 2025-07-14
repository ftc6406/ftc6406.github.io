function Gallery() {
    const imagePaths = [];

    const modules = import.meta.glob("/public/assets/gallery/*");
    for (const PATH in modules) {
        imagePaths.push(PATH);
    }

    return (
        <>
            <h1 className="pb-4 text-4xl text-center font-bold" id="gallery">
                Gallery
            </h1>
            <p>Hello, this is some placeholder text for the Gallery section.</p>

            {imagePaths.map((ele, index) => {
                {
                    return <img key={`gallery-${index}`} src={ele.substring(ele.indexOf("assets/"))} />;
                }
            })}
        </>
    );
}

export default Gallery;
