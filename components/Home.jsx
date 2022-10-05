import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <div style={{height:"100vh",display:"grid",placeContent:"center"}}>
      <Link href="/book/free-book-list">
        <a>Go to book list page</a>
      </Link>
    </div>
  );
}
