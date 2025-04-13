// components/DiasporaAssurance.jsx
export default function DiasporaAssurance() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Diaspora Investment Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-2">Anti-Scam Protection</h3>
            <p>Verified property titles and escrow payment options</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-2">Virtual Tours</h3>
            <p>360° property views before commitment</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-2">Legal Support</h3>
            <p>Documentation and government approval assistance</p>
          </div>
        </div>
      </div>
    </section>
  )
}