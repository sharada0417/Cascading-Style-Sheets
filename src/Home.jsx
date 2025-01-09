import React from 'react'

const Home = () => {
  return (
    <div>
    {/* Header */}
    <div className="container mx-auto px-4 text-center text-lg bg-gray-200 py-4">
     Cascading Style Sheets
    </div>

    {/* Cards */}
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div>
          <p className="text-center font-semibold">Card 1</p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Card 1</h2>
            <p className="text-gray-600">This is the content of the first card.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div>
          <p className="text-center font-semibold">Card 2</p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Card 2</h2>
            <p className="text-gray-600">This is the content of the second card.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Home
