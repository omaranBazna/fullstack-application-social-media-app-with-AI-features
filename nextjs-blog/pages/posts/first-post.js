import Link from "next/Link";

export default function FirstPost() {
  return (
    <div>
      First post
      <Link href="/">Home</Link>
      <a href="/">Slow home</a>
    </div>
  );
}
