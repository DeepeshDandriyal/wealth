import HeroSection from "@/components/hero";
import { statsData } from "@/data/landing";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      <section>
        <div>
          <div>
            {statsData.map((data, index) => (
              <div key={index}>
                <div>{data.value}</div>
                <div>{data.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
