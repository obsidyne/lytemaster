export default function Imprint() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Imprint</h1>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">Company Information</h2>
            <p className="leading-relaxed">
              Lyte Master GmbH<br />
              Auf dem Schurweßel 5a<br />
              53347 Alfter-Witterschlick<br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">Contact</h2>
            <p className="leading-relaxed">
              Phone: +49 (228) 350 638 - 0<br />
              Fax: +49 (228) 350 638 - 38<br />
              Email: <a href="mailto:info@lytemaster.com" className="text-blue-600 hover:underline">info@lytemaster.com</a><br />
              Website: <a href="https://www.lytemaster.com" className="text-blue-600 hover:underline">www.lytemaster.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">Legal Information</h2>
            <p className="leading-relaxed">
              Managing Directors: Mathew Jacob, James Palamuttem<br />
              Registration Court: Amtsgericht Bonn, Nordrhein-Westfalen<br />
              Registration Number: HRB 19113<br />
              Tax Number: 222/5711/1964<br />
              VAT ID: DE297569096<br />
              EORI: DE329934258684378
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
