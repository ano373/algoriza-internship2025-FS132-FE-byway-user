import { useRef, useState, Fragment, useEffect } from "react";
import CountUp from "react-countup";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 50000, suffix: "+", label: "Active Students" },
  { value: 2500, suffix: "+", label: "Courses Available" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 95, suffix: "%", label: "Satisfaction Rate" },
];

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-[150px] bg-gray-50 flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-y-4 md:flex-nowrap md:justify-around">
          {stats.map((stat, index) => (
            <Fragment key={index}>
              <div className="w-1/2 md:w-auto flex flex-col items-center text-center">
                <div className="text-3xl md:text-4xl font-bold  mb-1">
                  {isVisible ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={1.5}
                      separator=","
                    />
                  ) : (
                    0
                  )}
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div
                  className="w-px h-12 bg-indigo-300/50 hidden md:block"
                  aria-hidden="true"
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
