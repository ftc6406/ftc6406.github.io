function AboutUs() {
    const ALL_WARDS = {
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

    const LIST_ITEMS = [];
    for (const [YEAR, AWARDS] of Object.entries(ALL_WARDS)) {
        LIST_ITEMS.push(
            <li>
                <p>{YEAR}</p>
                <ul className="mb-4">
                    {AWARDS.map((ele) => {
                        return <li className="ml-4">{ele}</li>;
                    })}
                </ul>
            </li>
        );
    }

    return (
        <>
            <h1 className="text-4xl text-center font-bold">About Us</h1>
            <p>
                Hello, this is some placeholder text for the About Us section.
            </p>

            <h2 className="text-3xl mt-8 text-center">Awards</h2>
            <ul>{LIST_ITEMS}</ul>
        </>
    );
}

export default AboutUs;
