import {Html, useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      <span className='canvas-loader'></span>
      <p className='text-sm  font-extrabold mt-40 color-#f1f1f1'>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader