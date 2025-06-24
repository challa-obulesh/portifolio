import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Data & Cloud Enthusiast
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I’m Challa Chinna Obulesh, a 3rd-year BTech CSE (Data Science) student at RGMCET. 
            Passionate about Data Analytics, Cloud Computing, AI/ML, and Software Development. 
            I build real-time web apps, data dashboards, and deploy intelligent solutions using Python, 
            SQL, Firebase, Tableau, Flask, and Streamlit. Ranked 2nd in IEEE Embedathon at NITK and certified
            in AWS Cloud & Google Analytics. I love transforming ideas into impactful tech projects that solve 
            real-world problems.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2<sup className="font-semibold text-base">nd</sup>{" "}
            <sub className="font-semibold text-base">at IEEE Embedathon</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=challa-obulesh&layout=compact&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B"
            alt="Top Languages"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=challa-obulesh&show_icons=true&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B"
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=python,java,cpp,html,css,js,react,nodejs,nextjs,firebase,mysql,tableau,flask,streamlit,git,github,aws"
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>

       <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
           <img
            className="w-full h-auto"
            src="https://streak-stats.demolab.com?user=challachinnaobulesh&theme=transparent&hide_border=true&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="GitHub Streak Stats"
            loading="lazy"
          />
        </ItemLayout>

  
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/challa-obulesh/portifolio/blob/main/README.md"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=challachinnaobulesh&repo=cosmetic-insights-app-3&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&description_lines_count=2"
              alt="portifolio web"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
