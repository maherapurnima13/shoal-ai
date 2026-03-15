"use client"

import { useState, useEffect } from "react"

/* ---------------- DOWNLOAD FUNCTIONS ---------------- */

const downloadJSON = (data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  })

  const url = URL.createObjectURL(blob)

  const a = document.createElement("a")
  a.href = url
  a.download = "shoal-research.json"
  a.click()
}

const downloadCSV = (rows) => {

  const headers = ["Company","Pricing","Website","Features"]

  const csvContent = [
    headers.join(","),
    ...rows.map(r =>
      [r.company, r.pricing, r.website, r.features].join(",")
    )
  ].join("\n")

  const blob = new Blob([csvContent], { type: "text/csv" })

  const url = URL.createObjectURL(blob)

  const a = document.createElement("a")
  a.href = url
  a.download = "shoal-research.csv"
  a.click()
}

export default function Home() {

  const [task, setTask] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])

  /* ---------------- LOAD MEMORY ---------------- */

  useEffect(() => {

    const loadMemory = async () => {

      try {

        const res = await fetch(
          "https://glorious-journey-jjx4wvjx9gv73575v-8000.app.github.dev/memory"
        )

        const data = await res.json()

        setHistory(data.history)

      } catch (err) {
        console.log("Memory load error", err)
      }

    }

    loadMemory()

  }, [])

  /* ---------------- RUN AGENT ---------------- */

  const runResearch = async () => {

    if (!task) return

    setLoading(true)

    const res = await fetch(
      "https://glorious-journey-jjx4wvjx9gv73575v-8000.app.github.dev/research",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
      }
    )

    const data = await res.json()

    setResult(data)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ---------------- HEADER ---------------- */}

        <div className="mb-12 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Shoal AI
          </h1>

          <p className="text-gray-400 text-lg">
            Autonomous Web Research Agent powered by TinyFish
          </p>

        </div>

        {/* ---------------- SEARCH CARD ---------------- */}

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10 shadow-lg">

          <h2 className="text-xl mb-4 font-semibold">
            Research Task
          </h2>

          <div className="flex gap-3">

            <input
              className="flex-1 p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Find competitors of Notion..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <button
              onClick={runResearch}
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Run Agent
            </button>

          </div>

        </div>

        {/* ---------------- PREVIOUS RESEARCH ---------------- */}

        {history.length > 0 && (

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-10">

            <h2 className="text-xl font-semibold mb-4">
              Previous Research
            </h2>

            <ul className="space-y-2">

              {history.map((h, i) => (

                <li
                  key={i}
                  className="text-gray-400 border-b border-gray-800 pb-2"
                >
                  {h.task}
                </li>

              ))}

            </ul>

          </div>

        )}

        {/* ---------------- LOADING ---------------- */}

        {loading && (

          <div className="bg-blue-900/30 border border-blue-800 p-4 rounded mb-8 text-blue-300">

            Agent researching the web...

          </div>

        )}

        {/* ---------------- RESULTS ---------------- */}

        {result && (

          <div className="space-y-10">

            {/* Timeline */}

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

              <h2 className="text-xl font-semibold mb-4">
                Agent Activity
              </h2>

              <ul className="space-y-2">

                {result.timeline.map((step, i) => (

                  <li key={i} className="text-gray-300">
                    {step}
                  </li>

                ))}

              </ul>

            </div>

            {/* Results Table */}

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-xl font-semibold">
                  Research Results
                </h2>

                <div className="flex gap-3">

                  <button
                    onClick={() => downloadCSV(result.results)}
                    className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
                  >
                    CSV
                  </button>

                  <button
                    onClick={() => downloadJSON(result.results)}
                    className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
                  >
                    JSON
                  </button>

                </div>

              </div>

              <div className="overflow-x-auto">

                <table className="w-full text-sm">

                  <thead className="bg-gray-800 text-gray-300">

                    <tr>
                      <th className="p-3 text-left">Company</th>
                      <th className="p-3 text-left">Pricing</th>
                      <th className="p-3 text-left">Website</th>
                      <th className="p-3 text-left">Features</th>
                    </tr>

                  </thead>

                  <tbody>

                    {result.results.map((r, i) => (

                      <tr
                        key={i}
                        className="border-t border-gray-800 hover:bg-gray-800/40"
                      >

                        <td className="p-3 font-medium">
                          {r.company}
                        </td>

                        <td className="p-3">
                          {r.pricing}
                        </td>

                        <td className="p-3 text-blue-400">
                          <a
                            href={r.website}
                            target="_blank"
                          >
                            Visit
                          </a>
                        </td>

                        <td className="p-3 text-gray-300">
                          {r.features}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        )}

      </div>

    </main>
  )
}