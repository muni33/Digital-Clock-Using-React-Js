import React,{useState, useEffect} from 'react';
import './index.css';

const Clock = () => {

const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function formatTime(time) {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${meridiem}`;
  }
  return (
    <div className='whole-clock'>
      <div className='clock-face'>
        <img className='image-clock' src='\images\clock-image.jpg' alt='clock'/>
         <div className='overlay-text'>
          <span>{formatTime(time)}</span>
         </div>
        </div>
    </div>
  )
}

export default Clock