import Image from "next/image";

export default function Home() {
  const BGImage = `bg-[url('https://media.istockphoto.com/id/1305999733/es/foto/escritorio-de-dise%C3%B1o-web.jpg?s=1024x1024&w=is&k=20&c=G6lLvfLIFo6K3DJrzmKxFJHkGveQ3dC0QC8f1_pqhVY=')]`;
  return (
    <main>
      <section
        className={`${BGImage} absolute bg-cover bg-center  bottom-0 -z-10 h-screen  w-screen`}
      >
        <article className="relative top-14"> Landing page </article>
      </section>
    </main>
  );
}
