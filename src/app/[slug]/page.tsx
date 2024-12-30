import Details from "./Details";

export default async function SinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return <Details slug={slug} />;
}
