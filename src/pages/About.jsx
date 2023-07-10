import DevCards from "../components/DevCards";
import AboutContent from "../components/AboutContent";
import NavSideBar from "../components/NavSideBar";

function About() {
  return (
    <div>
      <NavSideBar />
      {/* vision */}
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl mb-5">Vision</h1>
          <div>
            <AboutContent />
          </div>
        </div>
      </div>
      {/* dev */}
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl mb-5">Meet the Devs</h1>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <DevCards
              devName="dev 1"
              devTitle="Software Engineer"
              devImg="https://i.pravatar.cc"
            />
            <DevCards
              devName="dev 2"
              devTitle="Software Engineer"
              devImg="https://i.pravatar.cc"
            />
            <DevCards
              devName="dev 3"
              devTitle="Software Engineer"
              devImg="https://i.pravatar.cc"
            />
            <DevCards
              devName="dev 4"
              devTitle="Software Engineer"
              devImg="https://i.pravatar.cc"
            />
            <DevCards
              devName="dev 5"
              devTitle="Software Engineer"
              devImg="https://i.pravatar.cc"
            />
            <DevCards
              devName="dev 6"
              devTitle="Software Engineer"
              devImg="https://i.pravatar.cc"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
