// import React,{useState} from 'react';
// import Card1 from './Card1';
// import Card2 from './Card2';
// import twopercent from "../assets/2percent.png"
// import fivepercent from "../assets/5percent.png"
// import CardHeader from "../components/CardHeader"
// import Card3 from './Card3';

// const Dashboard = () => {
//   const announcements = [
//     { name: 'Outgoing schedule for every department', comment: '5 Minutes ago' },
//     { name: 'Meeting HR Department', comment: 'Yesterday, 12:30 PM' },
//     { name: 'IT Department need two more talents for UX/UI Designer position', comment: 'Yesterday, 09:15 AM' },
//     { name: 'Sales Department Meeting', comment: 'Today, 10:00 AM' },
//     // Add more announcements as needed
//   ];
//   const [showAll, setShowAll] = useState(false);

//   const schedule = [
//     { name: 'Review candidate applications', comment: 'Today - 11:30pm',cardname:'Priority' },
//     { name: 'Interview with candidates', comment: 'Today - 10:30pm',cardname:'Other' },
//     { name: 'New Trainees', comment: 'Today - 12:30pm',cardname:'Others' },
//   ]
//   const [showAllSchedule, setShowAllSchedule] = useState(false);
//   const displayedSchedulecards = showAllSchedule ? schedule : schedule.slice(0,2);
//   const displayedCards = showAll ? announcements : announcements.slice(0, 3);
//   return (
//     <div className="pt-4 pl-4 pr-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       <div className='text-xl font-bold'>Dashboard</div>
//      <Card1
//         heading="Available Position"
//         value="24"
//         additionalInfo="4 Urgently needed"
//         bgColor="#FFEFE7"
//         lgColor="#FF5151"
//       />
//        <Card1
//         heading="Job Open"
//         value="10"
//         additionalInfo="4 Actively Hiring"
//         bgColor="#E8F0FB"
//         lgColor="#3786F1"
//       />
//       <Card1
//         heading="New Employees"
//         value="24"
//         additionalInfo="4 Department"
//         bgColor="#FDEBF9"
//         lgColor="#EE61CF"
//       />
//       <Card2
//         heading="Total Employees"
//         value="216"
//         imageSrc={twopercent} // Example image URL
//         menCount={120}
//         womenCount={96}
//         percentageChange="+2% Past month"
//       />
//        <Card2
//         heading="Talent Request"
//         value="16"
//         imageSrc={fivepercent} // Example image URL
//         menCount={6}
//         womenCount={10}
//         percentageChange="+5% Past month"
//       />
//        {/* card big */}
//       <div className="p-4 border border-grey-400 rounded-md w-full sm:w-full mx-auto">
//       {/* Header Section */}
//       <CardHeader name="Announcements" date="Today,13 Sep 2021" />

//       {/* Cards Section */}
//       <div>
//         {displayedCards.map((announcement, index) => (
//           <Card3
//             key={index}
//             name={announcement.name}
//             comment={announcement.comment}
//           />
//         ))}
//       </div>

//       <div className=' mt-0 border border-grey-400 text-center'>
//       <button
//         onClick={() => setShowAll(!showAll)}
//         className="p-4  text-center text-active hover:text-blue-700"
//       >
//         {showAll ? 'See Less' : 'See All Announcements'}
//       </button>
//       </div>
//     </div>
    
//     <div className="card bg-customdarkblue rounded-md shadow-md p-4 mb-6">
//       <div className="card-header bg-customblue text-lg  font-bold text-white mb-4">
//         Recent Activity
//       </div>
//       <div className="card-body bg-customdarkblue">
//         <div className="text-sm text-gray-400 p-2">10.40 AM, Fri 10 Sept 2021</div>
//         <div className="text-base text-white font-medium mt-1">You Posted a New Job</div>
//         <div className="text-sm text-white mt-2">Kindly check the requirements and terms of work and make sure everything is right.</div>
//       </div>
//       <div className="card-footer mt-4 flex flex-col sm:flex-row justify-between items-start">
//         <div className="text-sm text-white">Today you makes 12 Activity</div>
//         <button
          
//           className=" m-2 p-2 bg-active text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
//         >
//           See All Activity
//         </button>
//       </div>
//     </div>

//     <div className="p-4 border border-grey-400 rounded-md w-full sm:w-full mx-auto">
//       {/* Header Section */}
//       <CardHeader name="Upcoming Schedule" date="Today,13 Sep 2021" />

//       {/* Cards Section */}
//       <div>
//         {displayedSchedulecards.map((schedule, index) => (
//           <Card3
//             key={index}
//             name={schedule.name}
//             comment={schedule.comment}
//             cardname={schedule.cardname}
//           />
//         ))}
//       </div>

//       <div className=' mt-0 border border-grey-400 text-center'>
//       <button
//         onClick={() => setShowAllSchedule(!showAllSchedule)}
//         className="p-4  text-center text-active hover:text-blue-700"
//       >
//         {showAll ? 'See Less' : 'Create a New Schedule'}
//       </button>
//       </div>
//     </div>


    

//     </div>
//   );
// };

// export default Dashboard;
// import React, { useState } from 'react';
// import Card1 from './Card1';
// import Card2 from './Card2';
// import twopercent from "../assets/2percent.png"
// import fivepercent from "../assets/5percent.png"
// import CardHeader from "../components/CardHeader"
// import Card3 from './Card3';

// const Dashboard = () => {
//   const announcements = [
//     { name: 'Outgoing schedule for every department', comment: '5 Minutes ago' },
//     { name: 'Meeting HR Department', comment: 'Yesterday, 12:30 PM' },
//     { name: 'IT Department need two more talents for UX/UI Designer position', comment: 'Yesterday, 09:15 AM' },
//     { name: 'Sales Department Meeting', comment: 'Today, 10:00 AM' },
//   ];
//   const [showAll, setShowAll] = useState(false);

//   const schedule = [
//     { name: 'Review candidate applications', comment: 'Today - 11:30pm', cardname: 'Priority' },
//     { name: 'Interview with candidates', comment: 'Today - 10:30pm', cardname: 'Other' },
//     { name: 'New Trainees', comment: 'Today - 12:30pm', cardname: 'Others' },
//   ];
//   const [showAllSchedule, setShowAllSchedule] = useState(false);
//   const displayedSchedulecards = showAllSchedule ? schedule : schedule.slice(0, 2);
//   const displayedCards = showAll ? announcements : announcements.slice(0, 3);

//   return (
//     <div>
//        <div className="text-xl font-bold">Dashboard</div>
//     <div className="flex flex-col sm:flex-row gap-6 w-full">
//       {/* First column (60% width for desktop, full width for mobile) */}
//       <div className="flex flex-col sm:w-3/5 w-full gap-6">
//         <div className='"flex flex-col'>
//         <Card1 heading="Available Position" value="24" additionalInfo="4 Urgently needed" bgColor="#FFEFE7" lgColor="#FF5151" />
//         <Card1 heading="Job Open" value="10" additionalInfo="4 Actively Hiring" bgColor="#E8F0FB" lgColor="#3786F1" />
//         <Card1 heading="New Employees" value="24" additionalInfo="4 Department" bgColor="#FDEBF9" lgColor="#EE61CF" />
//         </div>
//        <div className='"flex flex-col'>
//        <Card2 heading="Total Employees" value="216" imageSrc={twopercent} menCount={120} womenCount={96} percentageChange="+2% Past month" />
//         <Card2 heading="Talent Request" value="16" imageSrc={fivepercent} menCount={6} womenCount={10} percentageChange="+5% Past month" />
//        </div>
      
        
//         {/* Announcements */}
//         <div className="p-4 border border-grey-400 rounded-md w-full sm:w-full mx-auto">
//           <CardHeader name="Announcements" date="Today,13 Sep 2021" />
//           <div>
//             {displayedCards.map((announcement, index) => (
//               <Card3 key={index} name={announcement.name} comment={announcement.comment} />
//             ))}
//           </div>
//           <div className='mt-0 border border-grey-400 text-center'>
//             <button
//               onClick={() => setShowAll(!showAll)}
//               className="p-4 text-center text-active hover:text-blue-700"
//             >
//               {showAll ? 'See Less' : 'See All Announcements'}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Second column (40% width for desktop, full width for mobile) */}
//       <div className="flex flex-col sm:w-2/5 w-full gap-6">
//         {/* Recent Activity */}
//         <div className="card bg-customdarkblue rounded-md shadow-md p-4 mb-6">
//           <div className="card-header bg-customblue text-lg font-bold text-white mb-4">
//             Recent Activity
//           </div>
//           <div className="card-body bg-customdarkblue">
//             <div className="text-sm text-gray-400 p-2">10.40 AM, Fri 10 Sept 2021</div>
//             <div className="text-base text-white font-medium mt-1">You Posted a New Job</div>
//             <div className="text-sm text-white mt-2">Kindly check the requirements and terms of work and make sure everything is right.</div>
//           </div>
//           <div className="card-footer mt-4 flex flex-col sm:flex-row justify-between items-start">
//             <div className="text-sm text-white">Today you make 12 Activity</div>
//             <button className="m-2 p-2 bg-active text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
//               See All Activity
//             </button>
//           </div>
//         </div>

//         {/* Upcoming Schedule */}
//         <div className="p-4 border border-grey-400 rounded-md w-full sm:w-full mx-auto">
//           <CardHeader name="Upcoming Schedule" date="Today,13 Sep 2021" />
//           <div>
//             {displayedSchedulecards.map((schedule, index) => (
//               <Card3 key={index} name={schedule.name} comment={schedule.comment} cardname={schedule.cardname} />
//             ))}
//           </div>
//           <div className='mt-0 border border-grey-400 text-center'>
//             <button
//               onClick={() => setShowAllSchedule(!showAllSchedule)}
//               className="p-4 text-center text-active hover:text-blue-700"
//             >
//               {showAll ? 'See Less' : 'Create a New Schedule'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from 'react';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import twopercent from "../assets/2percent.png";
import fivepercent from "../assets/5percent.png";
import CardHeader from "../components/CardHeader";
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';

const Dashboard = () => {
  const announcements = [
    { name: 'Outgoing schedule for every department', comment: '5 Minutes ago' },
    { name: 'Meeting HR Department', comment: 'Yesterday, 12:30 PM' },
    { name: 'IT Department need two more talents for UX/UI Designer position', comment: 'Yesterday, 09:15 AM' },
    { name: 'Sales Department Meeting', comment: 'Today, 10:00 AM' },
  ];
  const [showAll, setShowAll] = useState(false);

  const schedule = [
    { name: 'Review candidate applications', comment: 'Today - 11:30pm', cardname: 'Priority' },
    { name: 'Interview with candidates', comment: 'Today - 10:30pm', cardname: 'Other' },
    { name: 'Short meeting with product designer from IT Departement', comment: 'Today - 11:30pm' },
    { name: 'Short meeting with product designer from HR Departement', comment: 'Today - 12:30pm' },
  ];
  const [showAllSchedule, setShowAllSchedule] = useState(false);
  const displayedSchedulecards = showAllSchedule ? schedule : schedule.slice(0, 3);
  const displayedCards = showAll ? announcements : announcements.slice(0, 3);

  return (
    <div>
      <div className="text-xl font-bold">Dashboard</div>
      <div className="flex flex-col sm:flex-row gap-6 w-full">
  {/* First column (60% width for desktop, full width for mobile) */}
  <div className="flex flex-col sm:w-3/5 w-full gap-6">
    <div className="flex sm:flex-row flex-col gap-6">
      {/* Ensure all Card1 components take equal width */}
      <div className="w-full sm:w-1/3">
        <Card1 heading="Available Position" value="24" additionalInfo="4 Urgently needed" bgColor="#FFEFE7" lgColor="#FF5151" />
      </div>
      <div className="w-full sm:w-1/3">
        <Card1 heading="Job Open" value="10" additionalInfo="4 Actively Hiring" bgColor="#E8F0FB" lgColor="#3786F1" />
      </div>
      <div className="w-full sm:w-1/3">
        <Card1 heading="New Employees" value="24" additionalInfo="4 Department" bgColor="#FDEBF9" lgColor="#EE61CF" />
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-6">
      <Card2 className="flex-1" heading="Total Employees" value="216" imageSrc={twopercent} menCount={120} womenCount={96} percentageChange="+2% Past month" />
      <Card2 className="flex-1" heading="Talent Request" value="16" imageSrc={fivepercent} menCount={6} womenCount={10} percentageChange="+5% Past month" />
    </div>

    {/* Announcements */}
    <div className="p-4 border border-grey-400 rounded-md w-full sm:w-full mx-auto">
      <CardHeader name="Announcements" date="Today,13 Sep 2021" />
      <div>
        {displayedCards.map((announcement, index) => (
          <Card3 key={index} name={announcement.name} comment={announcement.comment} />
        ))}
      </div>
      <div className='mt-0 border border-grey-400 text-center'>
        <button
          onClick={() => setShowAll(!showAll)}
          className="p-4 text-center text-active hover:text-blue-700"
        >
          {showAll ? 'See Less' : 'See All Announcements'}
        </button>
      </div>
    </div>
  </div>

  {/* Second column (40% width for desktop, full width for mobile) */}
  <div className="flex flex-col sm:w-2/5  w-full gap-6">
    {/* Recent Activity */}
    <div className="card bg-customblue rounded-lg shadow-md pt-0 mb-6 overflow-hidden">
  <div className="card-header bg-customdarkblue text-lg p-3 font-bold text-white mb-4">
    Recent Activity
  </div>
  <div className="card-body pt-1 pb-3 pl-3 pr-3 bg-customblue">
    <div className="text-sm text-gray-400 p-2">10.40 AM, Fri 10 Sept 2021</div>
    <div className="text-base text-white font-medium mt-1">You Posted a New Job</div>
    <div className="text-sm text-white mt-2">Kindly check the requirements and terms of work and make sure everything is right.</div>
  </div>
  <div className="card-footer p-3 bg-customblue flex flex-col sm:flex-row justify-between items-start">
    <div className="text-sm text-white">Today you make 12 Activity</div>
    <button className="m-2 p-2 bg-active text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
      See All Activity
    </button>
  </div>
</div>


    {/* Upcoming Schedule */}
    <div className="p-4 border border-grey-400 rounded-md w-full sm:w-full mx-auto">
      <CardHeader name="Upcoming Schedule" date="Today,13 Sep 2021" />
      <div>
        {displayedSchedulecards.map((schedule, index) => (
          <Card4 key={index} name={schedule.name} comment={schedule.comment} cardname={schedule.cardname} />
        ))}
      </div>
      <div className='mt-0 border border-grey-400 text-center'>
        <button
          onClick={() => setShowAllSchedule(!showAllSchedule)}
          className="p-4 text-center text-active hover:text-blue-700"
        >
          {showAll ? 'See Less' : 'Create a New Schedule'}
        </button>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default Dashboard;

