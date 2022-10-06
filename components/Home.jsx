import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <div style={{height:"100vh",display:"grid",placeContent:"center"}}>
      <Link href="/book/free-book-list">
        <a>free book list</a>
      </Link>
      <Link href="/book/free-book-list">
        <a>paid book list</a>
      </Link>
    </div>
  );
}
