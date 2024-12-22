import Image from "next/image";

export default function Home() {
  const BGImage = `bg-[url('https://media.istockphoto.com/id/1305999733/es/foto/escritorio-de-dise%C3%B1o-web.jpg?s=1024x1024&w=is&k=20&c=G6lLvfLIFo6K3DJrzmKxFJHkGveQ3dC0QC8f1_pqhVY=')]`;
  return (
    <main className="flex flex-col gap-6 justify-center items-center h-screen">
      <h1 className="text-5xl font-bold">Webeo.es</h1>
{/*       <section
        className={`${BGImage} absolute bg-cover bg-center  bottom-0 -z-10 h-svh w-screen`}
      >
        <article className="relative top-14"> Landing page </article>
      </section> */}
      <Image src={"/WIP.jpg"} width={760} height={0} alt="Work in progress"/>
      <p className="text-2xl font-light italic">We are working on it.</p>
    </main>
  );
}
