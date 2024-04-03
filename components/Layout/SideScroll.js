// components/VerticalProgressBar.js
// import { useEffect, useState } from 'react';

// const SideScroll = () => {
//   const [scrollPercentage, setScrollPercentage] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.body.clientHeight;
//       const scrollTop = window.scrollY;
//       const trackLength = documentHeight - windowHeight;
//       const percentageScrolled = (scrollTop / trackLength) * 100;

//       setScrollPercentage(percentageScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className="fixed right-0 top-0 h-full w-3 bg-gray-400"
//       style={{ height: '100vh' }}
//     >
//       <div
//         className="absolute bottom-0 h-0 bg-green-500"
//         style={{ height: `${scrollPercentage}%`, transition: 'height 0.2s' }}
//       ></div>
//     </div>
//   );
// };

// export default SideScroll;

export default function SideScroll() {
  return (
    <div class="">
      <div className="border-l-[3px] border-[#A7A098] leading-[0.1em] h-[90vh] my-8"></div>
    </div>
  );
}