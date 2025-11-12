/* eslint-disable @next/next/no-img-element */

interface WorkInProgressProps {
  imagePath?: string;
  /** The native width of your image */
  imageWidth?: number;
  /** The native height of your image */
  imageHeight?: number;
}

export default function WorkInProgress({
  // title = "Work in Progress",
  // message = "This page is currently under construction. We're working hard to bring it to you soon. Please check back later!",
  imagePath = "/website-dev.png",
  imageWidth = 700,
  imageHeight = 700,
}: WorkInProgressProps) {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] w-full flex-col items-center justify-center p-8 text-center">
      {/* Replaced `next/image` with a standard `<img>` tag.
        This will still work in Next.js, though `next/image` is preferred
        for optimization when available in a full Next.js project.
        This change resolves the compilation error in this environment.
      */}
      <img
        src={imagePath}
        alt="Work in Progress Animation"
        width={imageWidth}
        height={imageHeight}
        className="mb-8 max-w-full rounded-none h-auto"
        style={{ maxWidth: "100%", height: "auto" }}
        loading="eager"
      />

      {/* <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h1>

      <p className="max-w-md text-lg text-gray-600 dark:text-gray-300">
        {message}
      </p> */}
    </div>
  );
}
