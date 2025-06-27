import AboutUs from "../about_us";
import ContactUs from "../contact_us";
import Gallery from "../gallery";

const PAGES = [<AboutUs />, <Gallery />, <ContactUs />];
function NonMainPages() {
    return (
        <div className="grid grid-cols-3">
            {PAGES.map((ele) => {
                return (
                    <div className="m-8 p-8 rounded-xl bg-zinc-800">{ele}</div>
                );
            })}
        </div>
    );
}

export default NonMainPages;
