import { useEffect, useState } from 'react';
import Icon from '../assets/icon-ellipsis.svg';
import { neutralColors } from '../constants';

interface InfoCardProps {
  data: any;
  title: string;
  icon: string;
  color: string;
  time: string;
}

export const InfoCard = ({ title, color, icon, data, time }: InfoCardProps) => {

  const urlIcon = `/assets/${icon}.svg`;
  const [current, setCurrent] = useState(0)
  const [previous, setPrevious] = useState(0)

  useEffect(() => {
    setCurrent(data.timeframes[time].current);
    setPrevious(data.timeframes[time].previous);
  }, [time])

  return (
    <div className="rounded-xl w-full overflow-hidden relative" style={{ backgroundColor: color }}>

      <div className="h-10 overflow-hidden relative">
        <img src={urlIcon} className="absolute -top-2 right-4" />
      </div>
      <div className="py-8 px-6 md:py-6 rounded-t-xl bg-darkBlue hover:brightness-150 cursor-pointer group">
        <div className="flex justify-between items-center">
          <h2 className="text-lg text-white font-medium">{title}</h2>
          <span role="button" className="p-2">
            <img src={Icon} />
          </span>
        </div>
        <div className="flex justify-between items-center mt-1 md:flex-col md:items-start md:space-y-2 md:mt-5">
          <p className="text-3xl text-white font-light md:text-5xl">{current}hrs</p>
          <p style={{ color: neutralColors.paleBlue }}>Last Week - {previous}hrs</p>
        </div>
      </div>
    </div>
  )
}
