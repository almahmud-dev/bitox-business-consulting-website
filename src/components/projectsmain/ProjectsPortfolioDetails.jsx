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
    <section className="py-17.5 md:py-20 bg-bg-secondaryTwo">
      <Container size={"lg"}>
        {/* Hero Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="relative w-full h-[260px] md:h-[360px] rounded-sm overflow-hidden">
            {/* CHANGE 6: currentProject.img → safeCurrentImg (optional chaining crash fix) */}
            <Image
              src={safeCurrentImg}
              fill
              alt={safeDetail.title}
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[260px] md:h-[360px] rounded-sm overflow-hidden">
            <Image
              src={secondaryImg}
              fill
              alt={safeDetail.title}
              className="object-cover"
            />
          </div>
        </div>

        {/* Meta Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 border-t border-b border-black/10 py-6 mb-12">
          {/* CHANGE 7: detail → safeDetail sob jaigai */}
          <MetaItem label="Service" value={safeDetail.service} />
          <MetaItem label="Client" value={safeDetail.client} />
          <MetaItem label="Date" value={safeDetail.date} />
          <MetaItem label="Location" value={safeDetail.location} />
        </div>

        {/* Intro */}
        <div className="mb-14">
          <h2 className="headingTwo text-primary font-bold mb-6 max-w-[820px]">
            {safeDetail.title}
          </h2>
          <p className="text-base text-primary/70 leading-relaxed max-w-[900px]">
            {safeDetail.intro}
          </p>
        </div>

        {/* Process */}
        <div className="mb-14">
          <h3 className="headingThree text-primary font-bold mb-4">
            {safeDetail.process.title}
          </h3>
          <p className="text-base text-primary/70 leading-relaxed mb-8 max-w-[900px]">
            {safeDetail.process.description}
          </p>
          <div className="space-y-6">
            {safeDetail.process.steps.map((step, i) => (
              <div key={i} className="pl-5 border-l-2 border-black/10">
                <h4 className="text-base font-bold text-primary mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-primary/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="mb-14">
          <h3 className="headingThree text-primary font-bold mb-4">
            {safeDetail.solution.title}
          </h3>
          <p className="text-base text-primary/70 leading-relaxed max-w-[900px]">
            {safeDetail.solution.description}
          </p>
        </div>

        {/* Results */}
        <div>
          <h3 className="headingThree text-primary font-bold mb-4">
            {safeDetail.results.title}
          </h3>
          <p className="text-base text-primary/70 leading-relaxed mb-6 max-w-[900px]">
            {safeDetail.results.description}
          </p>
          <ul className="space-y-3">
            {safeDetail.results.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-primary/80"
              >
                <span className="mt-1.5 h-2 w-2 min-w-[8px] rounded-full bg-primary inline-block" />
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
    <p className="text-xs font-bold uppercase text-primary/40 mb-1">{label}</p>
    <p className="text-sm font-medium text-primary">{value}</p>
  </div>
);

export default ProjectsPortfolioDetails;
