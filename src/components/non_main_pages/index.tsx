import AboutUs from "./about_us";
import ContactUs from "./contact_us";
import Gallery from "./gallery";

const PAGES = [<AboutUs />, <Gallery />, <ContactUs />];
function NonMainPages() {
    return (
        <div className="grid grid-cols-2 mx-32 mt-4">
            {PAGES.map((ele, index) => {
                return (
                    <div
                        key={`card-${index}`}
                        className="m-2 p-8 rounded-xl bg-zinc-800"
                    >
                        {ele}
                    </div>
                );
            })}
        </div>
    );
}

export default NonMainPages;
