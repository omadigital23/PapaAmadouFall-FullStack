export default function SystemCase() {
  return (
    <div className="system-case">
      <div className="architecture-panel">
        <p className="kicker">Request to durable outcome</p>
        <ol className="architecture-flow">
          <li>
            <span>01</span>
            <div>
              <h3>React checkout</h3>
              <p>Collect intent, calculate clearly and expose useful recovery states.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>API validation</h3>
              <p>Re-check identity, inputs, pricing assumptions and business rules.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Inventory + database</h3>
              <p>Coordinate stock reservations and order state at trusted boundaries.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Payment + events</h3>
              <p>Connect the payment result to durable orders and notifications.</p>
            </div>
          </li>
        </ol>
      </div>
      <div className="decision-panel">
        <p className="kicker">Engineering decisions</p>
        <div>
          <h3>Do not trust the browser</h3>
          <p>Use the interface for responsiveness, but enforce critical rules on the server.</p>
        </div>
        <div>
          <h3>Model failure explicitly</h3>
          <p>Design for unavailable stock, invalid sessions and interrupted payment flows.</p>
        </div>
        <div>
          <h3>Keep state understandable</h3>
          <p>Make transitions observable enough to diagnose and maintain after release.</p>
        </div>
      </div>
    </div>
  );
}
