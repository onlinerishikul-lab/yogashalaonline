export default function FeatureCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="space-y-4">
      {/* <div className="h-12 w-12 text-[#D96B4F]">
        <Image src={icon} alt={title} width={48} height={48} />
      </div> */}
      <div className="h-8 w-8 rounded-full bg-[#4377B2]" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
}
