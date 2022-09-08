
import jeremyImage from '../assets/image-jeremy.png';
import { colors, neutralColors } from '../constants';

interface MainCardProps {
  timeFrames: string;
  onTimeFrameChange: (time: 'daily' | 'weekly' | 'monthly') => void
}

export const MainCard = ({ timeFrames, onTimeFrameChange }: MainCardProps) => {

  const handleChangeTimeFrames = (time: 'daily' | 'weekly' | 'monthly') => {
    onTimeFrameChange(time)
  }
  return (
    <div className="w-full md:w-56 md:h-full rounded-xl h-56 flex flex-col" style={{ backgroundColor: neutralColors.darkBlue }}>
      <div className="flex flex-1 w-full md:h-64 items-center space-x-4 md:space-x-0 md:space-y-4 rounded-xl py-8 px-7 md:flex-col md:items-start" style={{ backgroundColor: colors.blue }}>
        <img src={jeremyImage} alt="Jeremy Robson" className="h-20 w-20 rounded-full border-4 border-white" />
        <div className="flex flex-col text-white">
          <p className="text-gray-300 font-light">Report for</p>
          <h1 className="text-3xl font-light">Jeremy Robson</h1>
        </div>
      </div>
      <div className="flex md:flex-col md:text-base md:items-start md:space-y-4 py-6 px-8 text-white justify-between text-xl items-center" style={{ color: neutralColors.desaturatedBlue }}>
        <button
          onClick={() => handleChangeTimeFrames('daily')}
          className={`hover:text-white ${timeFrames === 'daily' && 'text-white'}`}
        >
          Daily
        </button>
        <button
          onClick={() => handleChangeTimeFrames('weekly')}
          className={`hover:text-white ${timeFrames === 'weekly' && 'text-white'}`}
        >
          Weekly
        </button>
        <button
          onClick={() => handleChangeTimeFrames('monthly')}
          className={`hover:text-white ${timeFrames === 'monthly' && 'text-white'}`}
        >
          Monthly
        </button>
      </div>
    </div>
  )
}
