import { useProgress } from "@react-three/drei";

export const SuspenseLoader = () => {

  const { progress } = useProgress();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="lg:mt-6 sm:mt-4 font-bold lg:text-3xl md:text-2xl sm:text-xl text-emerald-50">Coming soon: {Math.trunc(progress)}%</div>
    </div>
  )
}