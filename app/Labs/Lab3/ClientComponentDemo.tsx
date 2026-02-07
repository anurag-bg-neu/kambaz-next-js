"use client";

export default function ClientComponentDemo() {
 // This runs ONLY in the browser
 alert(
   "Hello! This alert runs in the browser because this is a Client Component."
 );

 return (
   <div>
     <h1>Client Component Demo</h1>
     <p>You should have seen an alert pop up when the page loaded.</p>
     <p> <code>alert()</code> is a browser API — it only exists in the browser,
       so this code can <strong>only run on the client</strong>. </p>
     <p> If you removed <code>&apos;use client&apos;</code>, the build would fail because
       <code>alert</code> is undefined on the server. </p>
   </div>
 );
}
