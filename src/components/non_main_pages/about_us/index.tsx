function AboutUs() {
    const ALL_AWARDS = {
        2022: ["Judges' Choice Award"],
        2023: [
            "Design Award",
            "Motivate Award 2nd Place",
            "Think Award 3rd Place",
        ],
        2024: [
            "Innovate Award sponsored by RTX 2nd Place",
            "Think Award 2nd Place",
        ],
    };

    return (
        <>
            <h1 className="pb-4 text-4xl text-center font-bold" id="about-us">
                About Us
            </h1>
            <p>
                We are FTC Team 6406, First Tech Coyotes, from Maryland. Our rookie year was 2012, and we continue to compete in FTC events in the Potomac region.
            </p>

            <h2 className="text-3xl mt-8 text-center">Awards</h2>
            <ul>
                {Object.entries(ALL_AWARDS).map((ele) => {
                    const year = ele[0];
                    const year_awards = ele[1];
                    return (
                        <li>
                            <p>{year}</p>
                            <ul className="mb-4">
                                {year_awards.map((ele) => {
                                    return <li className="ml-8">{ele}</li>;
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default AboutUs;
