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
            <h1 className="pb-4 text-4xl text-center font-bold">About Us</h1>
            <p>
                We are FTC team 6406, First Tech Coyotes. We are a community of
                programmers and engineers. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Integer lobortis finibus rhoncus.
                In sed leo pulvinar, interdum mi eu, luctus eros. Ut massa urna,
                auctor id varius id, scelerisque non felis. Aliquam mollis
                ultricies ex, eget tristique turpis commodo in. Integer quam
                massa, dictum dictum commodo id, sodales eu nisi. Nulla luctus
                lobortis felis, sit amet dictum nisi feugiat sit amet. Integer
                dignissim eu lorem sit amet malesuada. Maecenas tincidunt eget
                erat convallis tincidunt. In elementum orci quis libero cursus
                tempor. Fusce dapibus sem at justo accumsan, ac pellentesque
                tortor molestie. Donec quis velit at nunc imperdiet vehicula.
                Suspendisse felis felis, vulputate vel lacus sed, blandit congue
                nisl. Duis sed leo sit amet tellus vestibulum tincidunt. Mauris
                sed metus vel justo venenatis consectetur. Phasellus ut massa
                vel elit semper bibendum a id dolor. Praesent eleifend euismod
                pulvinar.
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
                                    return <li className="ml-4">{ele}</li>;
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
