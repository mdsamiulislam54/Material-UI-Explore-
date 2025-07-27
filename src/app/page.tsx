import { Button } from "@mui/material";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <h1>Welcome to the Counter App</h1>
      <Link href="/about">Go to About Page</Link>
      <Button variant="contained">Click</Button>
    </div>
  );
}
