export default function TableOfFour() {
  const rows = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm">
        <div className="bg-brand px-6 py-4">
          <h1 className="text-2xl font-bold text-white text-center tracking-wide">
            Multiplication Table of 4
          </h1>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-indigo-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-indigo-700 uppercase tracking-wider">
                Expression
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-indigo-700 uppercase tracking-wider">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((n) => (
              <tr
                key={n}
                className={n % 2 === 0 ? 'bg-indigo-50/40' : 'bg-white'}
              >
                <td className="px-6 py-3 text-gray-700 text-base">
                  4 &times; {n}
                </td>
                <td className="px-6 py-3 text-right font-bold text-indigo-700 text-base">
                  = {4 * n}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
