import type { ReactNode } from 'react';
import Card from './card';
import YearDivider from './yearDivider';

const Awards = (): ReactNode => {
  return (
    <section
      id="awards"
      className="section space-y-16 lg:space-y-20
        bg-[#f5f5f5] text-black"
    >
      {/* Awards introduction */}
      <div className="space-y-8">
        <h1 className="header-text text-center">
          Awards and Recognition
        </h1>

        <p className="body-text text-center text-balance">
          We would like to recognize our team's tireless efforts in robotic
          innovation by commemorating the successes and accomplishments we made
          along on our journey. We would also like to thank Leidos for their
          gracious donations for allowing us travel so far.
        </p>
      </div>

      {/* Awards timeline */}
      <div className="space-y-16 text-base sm:text-lg md:text-2xl lg:text-3xl">
        {/* 2024 year */}
        <div className="space-y-4">
          <YearDivider year={2024} />

          <div className="flex gap-4 lg:gap-8">
            <Card
              className="flex-1 md:flex-6"
              src="assets/gallery/placeholder.jpg"
            >
              Innovate Award sponsored by RTX 2nd Place
            </Card>

            <Card
              className="flex-1 md:flex-4"
              src="assets/gallery/placeholder.jpg"
              reverse
            >
              Think Award 2nd Place
            </Card>
          </div>
        </div>

        {/* 2023 year */}
        <div className="space-y-4">
          <YearDivider year={2023} />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card src="assets/gallery/placeholder.jpg">Design Award</Card>

            <Card src="assets/gallery/placeholder.jpg" reverse>
              Motivate Award 2nd Place
            </Card>

            <Card src="assets/gallery/placeholder.jpg">
              Think Award 3rd Place
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
