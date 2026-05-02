import Image from "next/image";
import Container from "@/components/ui/Container";
import allImages from "@/components/helper/imageProvider";
import {
  fallbackDetail,
  projectDetails,
} from "../helper/ProjectsPortfolioDetails";

const ProjectsPortfolioDetails = ({ slug }) => {
  const { projectImages } = allImages;
  const allProjects = projectImages.flat();
  const currentProject = allProjects.find((p) => p.slug === slug);
  const detail = projectDetails[slug];

  // CHANGE 2: slug theke title banano — "my-project" → "My Project"
  const slugTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Project Details";

  // CHANGE 3: detail na thakle fallbackDetail use kora, ?? operator diye
  const safeDetail = detail ?? { ...fallbackDetail, title: slugTitle };

  // CHANGE 4: currentProject na hole projectImages[0][0] er image fallback hisebe use kora
  const fallbackImg = projectImages[0][0].img;
  const safeCurrentImg = currentProject?.img ?? fallbackImg;

  const secondaryImg = (() => {
    for (const row of projectImages) {
      const found = row.find((p) => p.slug === slug);
      if (found) {
        const other = row.find((p) => p.slug !== slug);
        return other ? other.img : found.img;
      }
    }
    return safeCurrentImg;
  })();

  // CHANGE 5: ai if block aita fully remove kora hoyeche
  // Before: !currentProject || !detail hole "Project not found" dekhto
  // After: Alltime page render hobe, unknown slug ao crash korte hobe

  return (
    <section className="py-15 lg:py-30 bg-bg-secondaryOne">
      <Container size={"lg"}>
        {/* Hero Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 mb-7.5">
          <div className="relative w-full h-65 lg:h-150 rounded-md overflow-hidden">
            {/* CHANGE 6: currentProject.img → safeCurrentImg (optional chaining crash fix) */}
            <Image
              src={safeCurrentImg}
              fill
              alt={safeDetail.title}
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-65 lg:h-150 rounded-md overflow-hidden">
            <Image
              src={secondaryImg}
              fill
              alt={safeDetail.title}
              className="object-cover"
            />
          </div>
        </div>

        {/* Meta Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 xl:gap-37.5 bg-white border-black/10 py-7.5 px-8 mb-12">
          {/* CHANGE 7: detail → safeDetail sob jaigai */}
          <MetaItem label="Service" value={safeDetail.service} />
          <MetaItem label="Client" value={safeDetail.client} />
          <MetaItem label="Date" value={safeDetail.date} />
          <MetaItem label="Location" value={safeDetail.location} />
        </div>
      </Container>
      <Container size={"md"}>
        {/* Intro */}
        <div className="mb-14">
          <h2 className="headingFive text-primary font-bold pb-7.5 underline max-w-205">
            {safeDetail.title}
          </h2>
          <p className="para-lg text-tarnary pb-7.5 text-justify">{safeDetail.intro}</p>
          <p className="para-lg text-tarnary text-justify">{safeDetail.introtwo}</p>
        </div>

        {/* Process */}
        <div className="mb-14">
          <h3 className="headingFive text-primary font-bold underline pb-4">
            {safeDetail.process.title}
          </h3>
          <p className="para-lg text-tarnary pb-7.5 text-justify">
            {safeDetail.process.description}
          </p>
          <div className="space-y-6">
            {safeDetail.process.steps.map((step, i) => (
              <div key={i} className="border-black/10">
                <h4 className="para-xl font-bold text-primary pb-5">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 inline-block align-middle" />
                  {step.title}
                </h4>
                <p className="para-lg text-tarnary text-justify">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="pb-14">
          <h3 className="headingFive text-primary font-bold underline pb-7.5">
            {safeDetail.solution.title}
          </h3>
          <p className="para-lg text-tarnary text-justify">
            {safeDetail.solution.description}
          </p>
        </div>

        {/* Results */}
        <div>
          <h3 className="headingFive text-primary font-bold pb-4">
            {safeDetail.results.title}
          </h3>
          <p className="para-lg text-tarnary pb-6 text-justify">
            {safeDetail.results.description}
          </p>
          <ul className="space-y-5">
            {safeDetail.results.points.map((point, i) => (
              <li key={i} className="para-lg text-tarnary flex items-start gap-x-5 max-w-177.5">
                <span className="mt-0.75 shrink-0 bg-[#FFD8C5] w-8 h-8 flex items-center justify-center rounded-[90px] p-2">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 7.34068C2.40119 9.86113 4.72936 12.1302 6.96734 15C9.4005 10.3052 11.8909 5.59398 16 0.492012L14.8928 0C11.4231 3.56978 8.72743 6.94889 6.38513 10.9647C4.75628 9.54118 2.12389 7.52677 0.516585 6.49182L0 7.34068Z"
                      fill="#FF5101"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

const MetaItem = ({ label, value }) => (
  <div>
    <p className="para-xl font-normal uppercase text-tarnary mb-2">{label}</p>
    <p className="text-[17px] font-medium text-primary">{value}</p>
  </div>
);

export default ProjectsPortfolioDetails;
