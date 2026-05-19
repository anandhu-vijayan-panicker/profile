export default function Background() {
  return (
    <div className="bg-deco" aria-hidden>
      <div className="bg-deco__blob bg-deco__blob--1" />
      <div className="bg-deco__blob bg-deco__blob--2" />
      <div className="bg-deco__blob bg-deco__blob--3" />
      <style>{`
        .bg-deco {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
          background: var(--bg);
        }
        .bg-deco__blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.6;
        }
        .bg-deco__blob--1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -80px;
          background: #e8dff5;
        }
        .bg-deco__blob--2 {
          width: 300px;
          height: 300px;
          bottom: 20%;
          left: -60px;
          background: #fff3d6;
        }
        .bg-deco__blob--3 {
          width: 250px;
          height: 250px;
          bottom: -50px;
          right: 20%;
          background: #d4f0e4;
        }
      `}</style>
    </div>
  );
}
