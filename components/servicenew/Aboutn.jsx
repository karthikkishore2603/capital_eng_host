"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const stats = [
    { number: 7200, label: "Successful Projects" },
    { number: 15, label: "Industries" },
    { number: 3000, label: "Happy Clients" },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

        return (
          <div key={index} className="stat-item" ref={ref}>
            <h2 className="stat-number">
              {inView ? <CountUp start={0} end={stat.number} duration={3} /> : 0}+
            </h2>
            <p>{stat.label}</p>
          </div>
        );
      })}

      <style jsx>{`
        .stats-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 40px 0;
          text-align: center;
          background: #fff;
        }

        .stat-item h2 {
          font-size: 45px;
          font-weight: bold;
          color: #091D56;
          font-family: "CamberTRIAL-Md";
        }

        .stat-item p {
          font-family: "CamberTRIAL-Md";
          font-size: 25px;
          color: #808080;
        }

        @media (max-width: 1000px) {
          .stat-item h2 {
            font-size: 45px;
            font-weight: bold;
            color: #091D56;
            font-family: "CamberTRIAL-Md";
          }

          .stat-item p {
            font-size: 33px;
            color: #808080;
          }
        }

        @media (max-width: 768px) {
          .stats-container {
            flex-direction: column;
            gap: 10px;
          }

          .stat-item h2 {
            font-size: 40px;
            font-weight: bold;
            color: #091D56;
            font-family: "CamberTRIAL-Md";
          }

          .stat-item p {
            font-size: 27px;
            color: #808080;
          }
        }
      `}</style>
    </div>
  );
}
