export default function Footer() {
   return (
       <div className="mb-33 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

           <a
               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
               className="group rounded-lg border border-transparent px-6 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
               target="_blank"
               rel="noopener noreferrer"
           >
               <h1 className={`mb-3 text-2xl font-semibold`}>
                   Learn{' '}
                   <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
               </h1>
               <p className={`m-1 max-w-[30ch] text-sm opacity-50`}>
                   Learn about Next.js in an interactive course with&nbsp;quizzes!
               </p>
           </a>

           <a
               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
               className="group rounded-lg border border-transparent px-6 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
               target="_blank"
               rel="noopener noreferrer"
           >
               <h1 className={`mb-3 text-2xl font-semibold`}>
                   Templates{' '}
                   <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
               </h1>
               <p className={`m-1 max-w-[30ch] text-sm opacity-50`}>
                   Explore starter templates for Next.js.
               </p>
           </a>

           <a
               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
               className="group rounded-lg border border-transparent px-6 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
               target="_blank"
               rel="noopener noreferrer"
           >
               <h1 className={`mb-3 text-2xl font-semibold`}>
                   Deploy{' '}
                   <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
               </h1>
               <p className={`m-1 max-w-[30ch] text-sm opacity-50`}>
                   Instantly deploy your Next.js site to a shareable URL with Vercel.
               </p>
           </a>
       </div>
   )
}