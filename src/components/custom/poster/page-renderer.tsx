import { notFound } from "next/navigation";

import PageShell from "@/components/custom/poster/page-shell";
import SectionRenderer from "@/components/custom/poster/section-renderer";
import { siteContent } from "@/content/siteContent";

type PageRendererProps = {
  slug: string;
};

export default function PageRenderer({ slug }: PageRendererProps) {
  const page = siteContent.pages.find((entry) => entry.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <PageShell>
      <div className="space-y-12">
        {page.sections.map((section, index) => (
          <SectionRenderer key={`${section.type}-${index}`} section={section} pageSlug={slug} />
        ))}
      </div>
    </PageShell>
  );
}
