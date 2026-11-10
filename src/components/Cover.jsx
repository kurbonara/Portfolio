import { useState } from 'react'
import FogScene from './FogScene.jsx'

// A project's cover: the real image from /public when it exists, otherwise artwork drawn
// in code that fits the project, so cards never show a broken image.

function Art({ id }) {
  switch (id) {
    case 'fogbound':
      return <FogScene fit="slice" />
    default:
      return <div className="cover-art cover-art--blank" />
  }
}

export default function Cover({ project, className = '' }) {
  const [failed, setFailed] = useState(false)
  const showImage = project.cover && !failed
  return (
    <div className={`cover ${className}`}>
      {showImage ? (
        <img src={project.cover} alt={`${project.title} preview`} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <Art id={project.id} />
      )}
    </div>
  )
}
