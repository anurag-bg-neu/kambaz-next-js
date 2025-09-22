import Link from "next/link";
export default function Labs() {
 return (
   <div id="wd-labs">
     <h1>Labs - ANURAG BHEEMAPPA GNANAMURTHY&#39;s Assignment</h1>
     <ul>
        <li>
         <Link href="https://github.com/anurag-bg-neu/kambaz-next-js" id="wd-anurag-git-link">
           ANURAG BHEEMAPPA GNANAMURTHY&#39;s  Git  Repo </Link>
       </li>
       <li>
         <Link href="/Labs/Lab1" id="wd-lab1-link">
           Lab 1: HTML Examples </Link>
       </li>
       <li>
         <Link href="/Labs/Lab2" id="wd-lab2-link">
           Lab 2: CSS Basics </Link>
       </li>
       <li>
         <Link href="/Labs/Lab3" id="wd-lab3-link">
           Lab 3: JavaScript Fundamentals </Link>
       </li>
       <li>
         <Link href="/Account/Signin" id="wd-kambaz-link">
           Kambaz </Link>
       </li>
     </ul>
   </div>
);}
