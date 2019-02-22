import React from 'react';
import Sponsor from '../../../components/Sponsor/Sponsor';
import Container from '../../../templates/container';

const Sponsors = () => {
  return (
    <Container
      title="Sponsors"
      subtitle="We couldn't operate without them!"
    >
      <div className="sponsors">

        <h2>Special Thanks To The Following People</h2>
        <ul>
          <li>Henderson Family</li>
          <li>Welch Family</li>
          <li>Garland Family</li>
          <li>Patrick Boyd</li>
          <li>George Burgess IV</li>
        </ul>

        <h1 className="sponsors__heading">Current Sponsors</h1>

        <Sponsor
          name="US STEM Foundations"
          url="http://www.usstem.org/"
          image="usstem.png"
        >
          <p>
            Founded in 2011, The US STEM Foundation strives to provide students
            with hands-on STEM activities and experiences. The programs they set
            up have the power to engage, educate, develop, and create responsible
            citizens to a higher extent than what can be achieved in the
            classroom.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          large
          name="Lockheed Martin"
          url="https://www.lockheedmartin.com/us.html"
          image="lockheedmartin.png"
        >
          <p>
            Headquartered in Bethesda, MD, Lockheed Martin is a global security
            company that employs about 133,000 people worldwide and is principally
            engaged in the research, design, development, manufacture, integration
            and sustainment of advanced technology systems, products and services.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Prince William County"
          url="https://www.pwcs.edu/"
          image="pwcs.png"
        >
          <p>
            Prince William County Schools (PWCS) is our school district. They are
            proud to “Provide a World-Class Education” to all of their students.
            School employees are deeply committed to ensuring that each student
            has the opportunity to reach his or her potential. Guided by our
            School Board and supported by our dedicated staff, PWCS strives to
          meet the individual needs of students to support their success.{" "}
          </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Macedon Technologies"
          url="http://macedontechnologies.com/"
          image="macedontechnologies.png"
        >
          <p>
            Macedon Technologies was founded by executives with deep backgrounds
            in Business Process Management, including pending patents, years of
            successful BPM consulting engagements, and management and oversight of
            the BPM practice at a large consulting company. Their goal is to
            implement systems while showing their customers the right way to use
          BPM, so they get the most value out of their technology investments.{" "}
          </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Air Force Association"
          url="https://www.afa.org/"
          image="afa.png"
        >
          <p>
            The Air Force Association is a coalition of airmen in the United States Air Force and their families. We are very thankful for their support in our Cyber Defense program and their service to our country.
          </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Micron"
          url="https://www.micron.com/"
          image="micron.png"
        >
          <p>
            Micron Technology gives the industry the broadest portfolio, and are
            the only company to make major memory and storage technologies.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="SPARK"
          url="http://poweredbyspark.org/"
          image="spark.jpg"
        >
          <p>
            SPARK, or Supporting Partnerships and Resources for Kids, is an education foundaton for Prince William County Schools. They provide programs and opportunities to kids throughout the county through business partnerships and community organizations like us.
          </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Pepsi"
          url="https://www.pepsi.com/"
          image="pepsi.png"
        >
          <p>
            Pepsi is a drink company that specializes in soda. They support us by providing drinks for our events, specifically the STEAM Expo.
          </p>
        </Sponsor>

        <h1 className="sponsors__heading">Past Sponsors</h1>

        <Sponsor
          name="InCadence"
          url="http://www.incadencecorp.com/"
          image="incadence.png"
        >
          <p>
            InCadence Strategic Solutions is a Woman-Owned Small Business (WOSB)
            specialized in providing cutting edge technical solutions, deep
            functional and domain subject matter expertise, operational
            intelligence and high-end engineering services. Notable technologies
            include android development, Government cloud computing, Ares mobile
            biometrics, and training services. Founded in 2009, InCadence has been
            providing strong, sound technical solutions, fresh ideas, exceptional
            personnel and experienced program management since day one with the
            highest levels of integrity, ingenuity and commitment to ensure
            mission success.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="American Stripping Company"
          url="https://www.ascoweb.com/"
          image="asco.png"
        >
          <p>
            American Stripping Co., or ASCo, is a company that specializes in
            blast cleaning that allows surfaces to be powder coated. They have
            sponsored us every year and are that secret weapon that gives our
            robots their signature look.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="A-1 FLOODTECH"
          url="http://www.a1floodtech.com/"
          image="floodtech.png"
        >
          <p>
            American Stripping Co., or ASCo, is a company that specializes in
            blast cleaning that allows surfaces to be powder coated. They have
            sponsored us every year and are that secret weapon that gives our
            robots their signature look.
        </p>{" "}
          <p />
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Battlefield High School"
          url="http://battlefieldhs.pwcs.edu/"
          image="battlefieldhighschool.jpg"
        >
          <p>
            Founded in 2004, Battlefield high school, in Haymarket, Virginia, has
            been the home of ILITE Robotics since 2005. Battlefield, a Prince
            William county school, has more IT type classes that any other high
            school in the nation."
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Town of Haymarket"
          url="https://www.townofhaymarket.org/"
          image="haymarket.jpg"
        >
          <p>
            The Town of Haymarket, a part of Prince William County in northern
            Virginia, is also the town where ILITE Robotics calls home. Since its
            establishment in 1799, Haymarket has rapidly grown over the past
            several years, yet continues to offer both the comfort and charm of a
            small town, as well as the opportunity and experiences of a large
          community.{" "}
          </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Armed Forces Communications and Electronics Association"
          url="https://www.afcea.org/site/"
          image="afcea.png"
        >
          <p>
            AFCEA, The Armed Forces Communications and Electronics Association, is
            dedicated to connecting people, ideas ,and innovations in order to
            enhance global security. They achieve this by implementing networking
            and educational opportunities. They provide a forum to the government,
            military, and industry communities to increase communications, in
          order to meet the needs of those who have served the country.{" "}
          </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Tropical Smoothie Cafe"
          url="https://www.tropicalsmoothiecafe.com/"
          image="tropicalsmoothie.jpg"
        >
          <p>
            Tropical Smoothie Cafe is an American restaurant franchise most
            notable for its signature smoothie drinks. In addition, the full cafe
            offers healthy food options including its sandwiches, flatbreads,
            wraps, and bowls. The company believes in providing healthier options
            made with fresh, natural, and quality ingredients to its local
          communities.{" "}
          </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Bell Pump and Well"
          url="https://www.bellpumpandwell.com/"
          image="bellpumpandwell.jpg"
        >
          <p>
            Bell Pump &amp; Well, Inc is a local, 50 + year family owned &amp;
            operated business specializing in well water systems; including water
            pump &amp; pressure tank replacement, whole house water filtration,
            inspections for real estate transactions and offer a full spectrum of
            water testing options. Bell Pump &amp; Well proudly serves customers
            in Fairfax, Fauquier, Loudoun &amp; Prince William Counties.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="NOVEC"
          url="https://www.novec.com/"
          image="novec.jpg"
        >
          <p>
            NOVEC is Among the Nation’s Largest Electric Cooperatives Northern
            Virginia Electric Cooperative, one of the largest electric
            cooperatives of its kind in the United States, is a customer-owned and
            locally based distribution system that provides electricity to more
            than 160,000 residents and businesses throughout Northern Virginia.
            NOVEC’s service territory encompasses 651 square miles with more than
            7,000 miles of electric lines in portions of Clarke, Fairfax,
            Fauquier, Loudoun, Prince William, and Stafford counties, the City of
            Manassas Park, and the Town of Clifton. Headquartered in Manassas,
            NOVEC maintains satellite offices in Gainesville, Leesburg,
            Woodbridge, and Stafford.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Khouri Orthodontics"
          url="http://khouriortho.com/"
          image="khouriortho.jpg"
        >
          <p>
            Dr. Khouri and his Orthodontics team strives to create a welcoming
            environment for their patients and provide the highest quality of
            care. Khouri Orthodontics uses the most advanced orthodontist
            technologies and personal treatment plans catered to their client’s
            needs, and prides itself on the incredible personalized care and
            individual attention dedicated to each patient.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Cathy's Home Team"
          url="https://www.cathyshometeam.com/"
          image="cathyshometeam.png"
        >
          <p>
            Cathy’s Home Team is a Real-Estate Agency dedicated to “serving
            Northern Virginia one family at a time”. Always putting their clients
            first, the company’s team of highly-trained professionals promises to
            keep in constant communications with their customers in order to help
            them achieve their real estate goals.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Able Moving and Storage"
          url="https://www.ablemoving.com/"
          image="ABLE.png"
        >
          <p>
            Able Moving and Storage is a well known, and reliable moving and
            storage company with over 50 company owned vans and trucks.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Comcast"
          url="https://corporate.comcast.com/"
          image="comcast.png"
        >
          <p>
            Comcast Corporation is a company that works with media and technology
            to provide high speed internet and phone providers under the XFINITY
            brand.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Azos AI"
          url="https://www.azosai.com/"
          image="azosai.jpg"
        >
          <p>
            Azos AI is a privately held corporation that provides embedded intelligence for the IT industry using expertise in aritificial intelligence, application development, and communications.
        </p>
        </Sponsor>

        <hr className="sponsor__hr" />
        <Sponsor
          name="Engility"
          url="http://www.engility.com/#fgkCdVL0VMtyoa6z.97="
          image="engility.png"
        >
          <p>
            Engility (NYSE: EGL) is engineered to make a difference. Built on six
            decades of heritage, Engility is a leading provider of integrated
            solutions and services, supporting U.S. government customers in the
            defense, federal civilian, intelligence and space communities. Our
            innovative, highly technical solutions and engineering capabilities
            address diverse client missions. We draw upon our team's intimate
            understanding of customer needs, deep domain expertise and technical
            skills to help solve our nation's toughest challenges. Headquartered
            in Chantilly, Virginia, and with offices around the world, Engility's
            array of specialized technical service offerings include
            high-performance computing, cyber security, enterprise modernization
            and systems engineering. To learn more about Engility, please visit
            www.engility.com and connect with us on Facebook, LinkedIn and
            Twitter.
        </p>
        </Sponsor>
      </div>
    </Container >
  );
};

export default Sponsors;
