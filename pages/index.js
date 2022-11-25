import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shopago</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  console.log("ahhaahhahha");

  // Fetch data from external API
  // const res = await fetch(`https://.../data`);
  // const data = await res.json();

  // Pass data to the page via props
  return { props: { name: "Bright", email: "ikhidebright@gmail.com" } };
}
