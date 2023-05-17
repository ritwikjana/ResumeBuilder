import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'

const PrivacyWallImage: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 1
  })
  const brickOneAnimation = useSpring({ transform: inView ? 'translateY(0)' : 'translateY(-20%)' })
  const brickTwoAnimation = useSpring({ transform: inView ? 'translateY(0)' : 'translateY(-30%)' })

  return (
    <svg ref={ref} viewBox="0 100 384 600" version="1.1" xmlns="http://www.w3.org/2000/svg" className="privacy-wall" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit:2 }}>
        <g className="person">
            <path d="M220.779,325.145C220.779,325.145 220.996,334.941 219.838,344.685C219.296,349.24 220.451,353.295 221.695,354.911C225.548,359.916 177.026,358.975 175.43,358.872C173.833,358.769 177.154,324.687 177.154,324.687L195.598,321.109L217.841,319.035L220.779,325.145Z" style={{fill:'rgb(255,209,154)'}}/>
            <path d="M220.913,334.723C220.33,334.041 220.102,347.101 213.29,352.484C205.651,358.519 193.818,359.288 188.626,356.735C183.434,354.182 178.919,334.362 178.362,332.713C177.806,331.064 173.768,344.343 173.325,352.529C172.881,360.716 173.618,408.301 173.618,408.301L183.762,408.342L221.508,364.906L228.944,349.856L225.826,340.647C225.826,340.647 221.351,335.235 220.913,334.723Z" style={{fill:'rgb(255,254,254)'}}/>
            <path d="M220.476,334.405C220.476,334.405 268.266,371.021 265.905,393.359C263.543,415.696 267.596,413.425 267.596,413.425L146.003,414.996L132.219,415.981C132.219,415.981 151.222,335.094 159.036,331.37C166.85,327.647 174.842,323.874 178.083,326.766C181.324,329.657 174.648,401.34 176.579,405.653C178.509,409.967 217.146,357.085 220.041,349.603C220.31,348.908 220.533,348.21 220.716,347.517C222.5,340.753 220.476,334.405 220.476,334.405Z" style={{fill:'rgb(37,37,37)'}}/>
            <path d="M219.829,320.032C219.829,320.032 203.652,347.815 187.613,340.194C171.574,332.572 168.455,321.815 168.607,304.729C168.76,287.643 171.771,274.751 176.698,272.603C181.625,270.455 214.962,274.361 214.962,274.361L226.945,287.814L228.944,301.92L219.829,320.032Z" style={{fill:'rgb(252,193,151)'}}/>
            <path d="M216.67,315.537C216.625,315.739 217.791,341.236 228.555,319.354C240.521,295.028 244.219,260.843 204.518,252.643C164.816,244.443 160.506,269.81 165.313,275.69C170.12,281.57 185.594,287.955 196.935,283.433C206.128,279.767 212.637,277.831 211.914,288.389C211.277,297.675 221.357,286.438 222.166,292.064C223.387,300.564 218.061,309.311 216.67,315.537Z" style={{fill:'rgb(81,44,44)'}}/>
        </g>
        <path d="M41.709,311.915L91.915,286.288L307.081,410.514L307.221,410.43L307.22,410.595L307.221,410.595L307.22,410.595L306.777,662.824L260.758,689.394L42.582,562.815L41.709,311.915L41.709,311.915Z" style={{fill:'rgb(114,104,104)'}}/>
        <path d="M41.709,311.915L42.582,562.815L260.758,689.394L260.758,438.382L41.709,311.915Z" style={{fill:'rgb(114,104,104)'}}/>
        <path d="M58.308,379.752L58.678,400.797L104.771,427.669L104.771,406.577L58.308,379.752Z" style={{fill:'rgb(128,128,128)'}}/>
        <path d="M136.302,454.099L136.672,475.143L182.764,502.016L182.764,480.924L136.302,454.099Z" style={{fill:'rgb(128,128,128)'}}/>
        <path d="M67.626,493.748L67.996,514.793L114.089,541.665L114.089,520.574L67.626,493.748Z" style={{fill:'rgb(128,128,128)'}}/>
        <path d="M159.533,567.903L159.903,588.947L205.996,615.82L205.996,594.728L159.533,567.903Z" style={{fill:'rgb(128,128,128)'}}/>
        <path d="M205.996,532.271L206.366,553.316L252.458,580.188L252.458,559.096L205.996,532.271Z" style={{fill:'rgb(128,128,128)'}}/>
        <path d="M205.996,432.628L206.366,453.673L252.458,480.545L252.458,459.454L205.996,432.628Z" style={{fill:'rgb(128,128,128)'}}/>
        <path d="M136.302,387.702L136.672,408.747L182.764,435.619L182.764,414.527L136.302,387.702Z" style={{fill:'rgb(128,128,128)'}}/>
        <path d="M260.758,689.394L306.777,662.824L307.221,410.43L260.758,438.382L260.758,689.394Z" style={{fill:'rgb(84,78,78)'}}/>
        <path d="M91.915,286.288L307.221,410.595L260.758,438.382L41.709,311.915L91.915,286.288Z" style={{fill:'rgb(89,70,70)'}}/>
        <animated.g style={brickOneAnimation}>
            <path d="M40.836,262.306L41.709,311.915L155.184,379.035L155.184,329.317L40.836,262.306Z" style={{fill:'rgb(114,104,104)'}}/>
            <path d="M155.184,378.871L201.647,351.761L201.647,301.2L155.184,329.152L155.184,378.871Z" style={{fill:'rgb(84,78,78)'}}/>
            <path d="M91.042,236.68L201.647,301.529L155.184,329.317L40.836,262.306L91.042,236.68Z" style={{fill:'rgb(89,70,70)'}}/>
            <path d="M51.547,286.288L51.918,307.333L98.01,334.205L98.01,313.113L51.547,286.288Z" style={{fill:'rgb(128,128,128)'}}/>
        </animated.g>
        <animated.g style={brickTwoAnimation}>
            <path d="M151.233,327.046L152.106,376.654L260.758,439.998L260.758,390.28L151.233,327.046Z" style={{fill:'rgb(114,104,104)'}}/>
            <path d="M260.758,439.833L307.221,412.724L307.221,362.162L260.758,390.115L260.758,439.833Z" style={{fill:'rgb(84,78,78)'}}/>
            <path d="M201.44,301.419L307.221,362.492L260.758,390.28L151.233,327.046L201.44,301.419Z" style={{fill:'rgb(89,70,70)'}}/>
        </animated.g>
    </svg>
  )
}

export default PrivacyWallImage