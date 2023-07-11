/* eslint-disable react/prop-types */
import DevCards from "../components/DevCards";
import AboutContent from "../components/AboutContent";
import NavSideBar from "../components/NavSideBar";

function About(props) {
  const { watchList } = props;
  return (
    <div>
      <NavSideBar watchList={watchList} />
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
              devName="Justen Manni"
              devTitle="Software Engineer"
              devImg="https://media.licdn.com/dms/image/C5103AQGmSjWRf4V12g/profile-displayphoto-shrink_400_400/0/1543214562119?e=1694649600&v=beta&t=6w2QTRPo0HrRBNZoFnBsh_igbVMAFGjIXmO-9VdlIys"
              linkedin="https://www.linkedin.com/in/justenmanni/"
              github="https://github.com/JustenMX"
            />
            <DevCards
              devName="BingQuan Tan"
              devTitle="Geotechnical Mechanical Engineer"
              devImg="https://media.licdn.com/dms/image/C5103AQFW7BuIkdgU1w/profile-displayphoto-shrink_400_400/0/1577424905821?e=1694649600&v=beta&t=n41ALzT-Ez2SpqeAEkp129U76uLOfS4Qp8im_HQ1GMs"
              linkedin="www.linkedin.com/in/bingquan-tan-92b7a9a0"
              github="https://github.com/redplatoon"
            />
            <DevCards
              devName="Zi Xuan Low"
              devTitle="Software Engineer"
              devImg="https://i.pravatar.cc"
            />
            <DevCards
              devName="Jackson Loh"
              devTitle="Software Engineer"
              devImg="https://i.pravatar.cc"
            />
            <DevCards
              devName="Farrhan"
              devTitle="Software Engineering Student"
              devImg="https://media.licdn.com/dms/image/D4D35AQFGHIYz0XO3YQ/profile-framedphoto-shrink_400_400/0/1687443461859?e=1689656400&v=beta&t=gVFBWjAQC_RE-duXdYV3oxTX3bRi78_pyB1Y3Pjz3ys"
              linkedin="https://www.linkedin.com/in/farrhan/"
              github="https://github.com/farrhanng"
            />
            <DevCards
              devName="Nelson Chua"
              devTitle="Marketing Executive - Operation"
              devImg="https://media.licdn.com/dms/image/D5603AQG_btftC7r-1A/profile-displayphoto-shrink_400_400/0/1681983066561?e=1694649600&v=beta&t=RHk4xzmXA-koEo8e5pGY2uinHJMD5i00XfxmgCBrjgE"
              linkedin="https://www.linkedin.com/in/chua-chee-fong-nelson6726/"
              github="https://github.com/nelson6726"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
