// import { cn } from "../lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// // import Link from "next/link";
// import { useState } from "react";


// export const HoverEffect = ({
//   items,
//   className
// }) => {
//   let [hoveredIndex, setHoveredIndex] = useState(null);
//   const handleCopyLink = (link) => {
//     navigator.clipboard.writeText(link)
    
//   }
//   return (
//     (<div
//       className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
//       {items.map((item, idx) => (
//         <a

//           key={item?.link}
//           className="relative group  block p-2 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}>
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-white/10 block  rounded-3xl"
//                 layoutId="hoverBackground"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: 1,
//                   transition: { duration: 0.15 },
//                 }}
//                 exit={{
//                   opacity: 0,
//                   transition: { duration: 0.15, delay: 0.2 },
//                 }} />
//             )}
//           </AnimatePresence>
//           <Card>
//             <img className=" rounded-sm" src={item.img} />
//             <div className="flex justify-between items-center">
//               <CardTitle>{item.title}</CardTitle>
//               {/* <CardDescription>{item.description}</CardDescription> */}
//               <button className="bg-whit mt-4"  onClick={() => handleCopyLink(item?.link)}>🔗</button>
//             </div>
//           </Card>
//         </a>
//       ))}
//     </div>)
//   );
// };

// export const Card = ({
//   className,
//   children
// }) => {
//   return (
//     (<div
//       className={cn(
//         "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-red-500 relative z-20",
//         className
//       )}>
//       <div className="relative z-50">

//         <div className="p-4">{children}</div>
//       </div>
//     </div>)
//   );
// };
// export const CardTitle = ({
//   className,
//   children
// }) => {
//   return (
//     (<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
//       {children}
//     </h4>)
//   );
// };
// export const CardDescription = ({
//   className,
//   children
// }) => {
//   return (
//     (<p
//       className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
//       {children}
//     </p>)
//   );
// };
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link)
      .then(() => toast.success('Link copied to clipboard!', {
        style: {
          background: '#333',
          color: '#fff',
        },
      }))
      .catch(() => toast.error('Failed to copy link.', {
        style: {
          background: '#f44336',
          color: '#fff',
        },
      }));
  };

  return (
    <>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
        {items.map((item, idx) => (
          <a
            key={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-white/10 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }} />
              )}
            </AnimatePresence>
            <Card>
              <img className="rounded-sm" src={item.img} alt={item.title} />
              <div className="flex justify-between items-center">
                <CardTitle>{item.title}</CardTitle>
                <button className="bg-whi mt-4 px-4 py-2 rounded-lg " onClick={() => handleCopyLink(item?.link)}>🔗</button>
              </div>
            </Card>
          </a>
        ))}
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-purple-500 relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
