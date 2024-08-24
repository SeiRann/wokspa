export default function Arrow({fillColor, size, strokeWidth}){
    return  <svg width={148*size} height={60*size} xmlns="http://www.w3.org/2000/svg">
                  <polyline  points={`${10*size},${10*size} ${75*size},${55*size} ${138*size},${10*size}`} fill="none" stroke={fillColor} strokeWidth={strokeWidth}/>
            </svg>
        
}