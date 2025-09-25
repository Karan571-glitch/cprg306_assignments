import React from 'react';
import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>My name is Karanveer Singh</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/Karan571-glitch/cprg306_assignments.git">
          <u>Karan571-glitch/cprg306-assignments</u>
        </Link>
      </p>
    </div>
  );
}
