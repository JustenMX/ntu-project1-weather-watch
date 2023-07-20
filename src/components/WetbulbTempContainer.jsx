//
function WetbulbTempContainer() {
  return (
    <>
      <div className="flex flex-col items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is the wet bulb?
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A wet bulb is a thermometer in which the bulb is wrapped in a wet
            cloth. It can be used to measure the lowest temperature to which air
            can be cooled by evaporating water at constant pressure. Basically,
            it is a metaphor for human sweat and it will tell you how the human
            body would feel in direct sunlight.
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is the highest wet bulb temperature we can take?
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A wet-bulb temperature of 35°C is regarded as the theoretical limit
            of what humans can endure. It would be reached at an actual
            temperature of 45°C if relative humidity were 50%, or at about 39°C
            if humidity were 75%. Beyond this point it becomes impossible for
            sweat to cool the body down, causing people to overheat and in
            effect cook. Cells swell, proteins are deformed and organ systems
            fail, resulting in death. At wet-bulb temperatures above 35°C, it is
            thought that even young healthy people wearing light
            clothing—regardless of whether they are parked in front of a fan, in
            the shade or have unlimited water to drink—will die in about six
            hours.
          </p>
        </div>
      </div>
    </>
  );
}

export default WetbulbTempContainer;
