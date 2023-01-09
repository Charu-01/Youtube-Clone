import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
           <TuneOutlinedIcon />
           <h2>FILTER</h2>
        </div>
        <hr />

         <ChannelRow 
            image="https://yt3.googleusercontent.com/ytc/AMLnZu_GS4vuibuZjr4ZBgVr97RrriUQrrhqeyWQWqMYfQ=s176-c-k-c0x00ffffff-no-rj"
            channel="Clever Programmer"
            verified
            subs="660K"
            noOfVideos={382}
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
         />
         <hr />

         <VideoRow
            views="2M"
            subs="1.2M"
            description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
            timestamp="1 years ago"
            channel="Clever Programmer"
            title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
            image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==\u0026rs=AOn4CLBQ3wcA9R1bkuu9iDzFveXMV"
          />

         <VideoRow
            views="374K"
            subs="1.2M"
            description="React Tutorial - Learn to build fast web apps with React (React js) from scratch.Get the complete React course: ..."
            timestamp="2 years ago"
            channel="Clever Programmer"
            title="🔴 Build a Zoom Clone with Node JS for Beginners"
            image="https://i.ytimg.com/vi/ZVznzY7EjuY/hqdefault.jpg"
          />

          <VideoRow
            views="3.1M"
            subs="1.2M"
            description="Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour.Get my Complete JavaScript Course with a..."
            timestamp="8 months ago"
            channel="Clever Programmer"
            title="Build WhatsApp Blog Web3 App with NextJS"
            image="https://i.ytimg.com/vi/47JfV25M9UY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLChRC5JOJzvSj_ZY9ErPp5-SS0Mug"
          />

          <VideoRow
            views="61K"
            subs="1.2M"
            description="In this FREE LIVE training, Qazi and Sonny will show you how to build an AMAZON clone with REACT JS "
            timestamp="1 years ago"
            channel="Clever Programmer"
            title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
            image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLATPTdsIaoMlWOusVEUqg2nMSsJNA"
          />

          <VideoRow
            views="5M"
            subs="1.2M"
            description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet"
            timestamp="1 years ago"
            channel="Clever Programmer"
            title="🔴 Let's build an app with REACT NATIVE! (Qazi & Sonny)"
            image="https://i.ytimg.com/vi/hggGvwA_tcc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLAx9qYu3HRhO5gLZiX5K7J40dN2qg"
          />

          <VideoRow
            views="610K"
            subs="1.2M"
            description="In this FREE LIVE training, Qazi and Sonny will show you how simple it is to create a full stack, INSTAGRAM CLONE using React, Firebase & Material-UI..."
            timestamp="1 years ago"
            channel="Clever Programmer"
            title="🔴 How to Build a Instagram Clone with REACT JS for Beginners (in 3 Hours!)"
            image="https://i.ytimg.com/vi/f7T48W0cwXM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLD0puuLvu2y5IxVdwYUaZ1Kv8vSPA"
          />
           <VideoRow
            views="1.7M"
            subs="1.2M"
            description="Here is the best free MERN JS programming course on the planet. Made with lots of love. Take your web development skills to the next level by building the Top Technology Websites on the planet."
            timestamp="1 years ago"
            channel="Clever Programmer"
            title="Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)"
            image="https://i.ytimg.com/vi/ktjafK4SgWM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLCo8RoNjvyQkUdjieTO7C8NSR-ffA"
          />


    </div>
  );
}

export default SearchPage;
