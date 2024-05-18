import LoadingSkeleton, { SkeletonTheme } from 'react-loading-skeleton';

import SkeletonProps from './Skeleton.types.ts'

const Skeleton = ({
  className,
  count,
  height,
  inline,
  width,
}: SkeletonProps) => {
  return (
    <SkeletonTheme 
      baseColor="rgba(235, 206, 180, .5)" 
      borderRadius="1.25rem" 
      height={height}
      highlightColor="rgba(255, 248, 233, 0.5)"
      width={width}
    >
      <p>
        <LoadingSkeleton 
          className={className}
          count={count}
          inline={inline}
        />
      </p>
    </SkeletonTheme>
  )
}

export default Skeleton
