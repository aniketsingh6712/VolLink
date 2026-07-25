import React from 'react'
import StatsCard from './StatsCard'
function StatsSection({stats}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {stats.map((item, i) => (
            <StatsCard key={i} {...item} />
          ))}
        </div>
  )
}

export default StatsSection