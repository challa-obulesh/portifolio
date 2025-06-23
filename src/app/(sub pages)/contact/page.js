import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Portfolio contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Get in Touch
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            I’m Challa Chinna Obulesh — a Data Science student passionate about cloud, AI/ML, 
            and building data-driven solutions. Whether you have a project idea, internship 
            opportunity, or just want to connect and collaborate, feel free to reach out. 
            Fill out the form below and I’ll get back to you as soon as possible.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
