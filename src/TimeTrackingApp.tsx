import { useState } from "react";
import { InfoCard, MainCard } from "./components"
import { colors } from "./constants";
import { WorkIcon, PlayIcon, StudyIcon, ExerciseIcon, SelfCareIcon, SocialIcon } from './assets';
import dataJson from './constants/data.json';

export const TimeTrackingApp = () => {


  const [timeFrames, setTimeFrames] = useState('daily');
  const handleChangeTimeFrames = (time: 'daily' | 'weekly' | 'monthly') => {
    setTimeFrames(time);
  }

  return (
    <main
      className="flex flex-col w-mobile md:w-desktop items-center mx-auto py-10 md:flex-row md:justify-center md:h-screen"
    >
      <section className="flex md:h-desktop">
        <MainCard timeFrames={timeFrames} onTimeFrameChange={(time) => handleChangeTimeFrames(time)} />
      </section>
      <section className="grid grid-cols-1 md:h-desktop md:grid-cols-3 w-mobile mt-6 gap-y-6 md:gap-x-6 md:mt-0 md:flex-1 md:ml-6">

        <InfoCard
          time={timeFrames}
          data={dataJson.find(data => data.title === 'Work')}
          title="Work"
          color={colors.softOrange}
          icon={WorkIcon}
        />

        <InfoCard
          time={timeFrames}
          data={dataJson.find(data => data.title === 'Play')}
          title="Play"
          color={colors.softBlue}
          icon={PlayIcon}
        />

        <InfoCard
          time={timeFrames}
          data={dataJson.find(data => data.title === 'Study')}
          title="Study"
          color={colors.lightRed}
          icon={StudyIcon}
        />


        <InfoCard
          time={timeFrames}
          data={dataJson.find(data => data.title === 'Exercise')}
          title="Exercise"
          color={colors.limeGreen}
          icon={ExerciseIcon}
        />

        <InfoCard
          time={timeFrames}
          data={dataJson.find(data => data.title === 'Social')}
          title="Social"
          color={colors.violet}
          icon={SocialIcon}
        />

        <InfoCard
          time={timeFrames}
          data={dataJson.find(data => data.title === 'Self Care')}
          title="Self Care"
          color={colors.softYellow}
          icon={SelfCareIcon}
        />

      </section>
    </main>
  )
}
