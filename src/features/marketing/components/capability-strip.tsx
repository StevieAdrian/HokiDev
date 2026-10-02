export function CapabilityStrip() {
  const capabilities = ['Web', 'Mobile', 'Desktop', 'POS', 'External API', 'Otomasi', 'SEO'];
  return (
    <div className="cap-strip" aria-label="Kemampuan HokiDev">
      <div className="container-wide cap-items">
        {capabilities.map((item, index) => <span key={item} className="cap-item">{item}{index < capabilities.length - 1 && <span className="cap-dot" style={{ display: 'inline-block', marginLeft: 13 }} />}</span>)}
      </div>
    </div>
  );
}
