export function GridBackground() {
    return (
      <div className="absolute inset-0 pointer-events-none z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern 
              id="grid-pattern" 
              width="200" 
              height="200" 
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line 
                x1="0" 
                y1="0" 
                x2="100" 
                y2="0" 
                stroke="beige" 
                strokeWidth="1"
              />
              <line 
                x1="0" 
                y1="0" 
                x2="0" 
                y2="100" 
                stroke="beige" 
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    )
  }
  
  