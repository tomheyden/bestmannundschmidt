import { ServiceCard, type Service } from "@/components/ServiceCard";

type Props = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  services: Service[];
};

export function EditorialGrid({ eyebrow = "Arbeitsfelder", heading, intro, services }: Props) {
  return (
    <section className="py-20 md:py-24 bg-ivory">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-navy/40" />
              <span className="label text-navy/65">{eyebrow}</span>
            </div>
            <h2 className="display-2 text-navy max-w-xl">{heading}</h2>
          </div>
          {intro ? (
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <p className="prose-editorial">
                <span>{intro}</span>
              </p>
            </div>
          ) : null}
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
