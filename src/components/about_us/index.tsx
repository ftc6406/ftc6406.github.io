function AboutUs() {
    const AWARDS = {
        2022: ["Judges' Choice Award"],
        2023: ["Design Award", "Motivate Award 2nd Place", "Think Award 3rd Place"],
        2024: ["Innovate Award sponsored by RTX 2nd Place", "Think Award 2nd Place"]
    }

    

    return (
        <>
            <h1 className="text-4xl text-center font-bold">About Us</h1>
            <p>
                Hello, this is some placeholder text for the About Us section.
            </p>

            <h2 className="text-3xl mt-8 text-center">Awards</h2>
            <ul>
                <li>
                    <p>2022</p>
                    <ul>
                        <li>Judges' Choice Award</li>
                    </ul>
                </li>
                <li>
                    <p>2023</p>
                    <ul>
                        <li>Design Award</li>
                        <li>Motivate Award 2nd Place</li>
                        <li>Think Award 3rd Place</li>
                    </ul>
                </li>
                <li>
                    <p>2024</p>
                    <ul>
                        <li>Innovate Award sponsored by RTX 2nd Place</li>
                        <li>Think Award 2nd Place</li>
                    </ul>
                </li>
            </ul>
            <br />
        </>
    );
}

export default AboutUs;
