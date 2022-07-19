import React from "react";
import { theme as chakraTheme } from "@chakra-ui/react";

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: "Inter, -apple-system, BlinkMacSystemFont",
  },
  fontWeight: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  icons: {
    ...chakraTheme.icons,
    Logo: {
      path: (

            <path
              d="M 119.438 54.168 L 121.451 49.41 A 12.543 12.543 0 0 0 123.779 50.858 A 15.09 15.09 0 0 0 124.867 51.332 Q 126.819 52.094 129.625 52.094 A 13.238 13.238 0 0 0 132.383 51.824 Q 134.805 51.308 136.427 49.806 A 6.925 6.925 0 0 0 138.2 47.066 Q 138.614 45.943 138.782 44.55 A 16.983 16.983 0 0 0 138.897 42.517 L 138.897 38.613 Q 137.903 39.806 136.2 40.898 A 19.158 19.158 0 0 1 135.39 41.388 A 9.703 9.703 0 0 1 132.229 42.508 A 13.17 13.17 0 0 1 129.93 42.7 Q 126.331 42.7 123.098 40.839 A 13.564 13.564 0 0 1 118.65 36.669 A 16.737 16.737 0 0 1 117.852 35.38 A 15.36 15.36 0 0 1 116.197 30.729 A 21.37 21.37 0 0 1 115.839 26.718 Q 115.839 21.96 117.822 18.239 A 15.681 15.681 0 0 1 121.52 13.589 A 14.913 14.913 0 0 1 123.159 12.383 Q 126.514 10.248 130.54 10.248 A 13.643 13.643 0 0 1 133.48 10.554 A 11.416 11.416 0 0 1 135.42 11.163 A 15.68 15.68 0 0 1 137.755 12.364 A 12.809 12.809 0 0 1 139.202 13.42 L 139.202 10.98 L 144.204 10.98 L 144.204 41.968 A 24.823 24.823 0 0 1 143.988 45.344 Q 143.743 47.127 143.22 48.613 A 12.3 12.3 0 0 1 142.374 50.508 Q 140.544 53.802 137.281 55.327 A 15.744 15.744 0 0 1 133.252 56.56 A 21.498 21.498 0 0 1 129.625 56.852 Q 126.819 56.852 124.166 56.181 A 16.611 16.611 0 0 1 120.932 55.011 A 14.346 14.346 0 0 1 119.438 54.168 Z M 5.795 42.7 L 0 42.7 L 0 0 L 25.315 0 L 25.315 5.002 L 5.795 5.002 L 5.795 18.056 L 22.082 18.056 L 22.082 22.814 L 5.795 22.814 L 5.795 42.7 Z M 76.311 42.7 L 50.935 42.7 L 50.935 0 L 56.73 0 L 56.73 37.515 L 76.311 37.515 L 76.311 42.7 Z M 89.585 42.615 A 16.601 16.601 0 0 0 94.855 43.432 A 18.743 18.743 0 0 0 96.243 43.381 A 15.407 15.407 0 0 0 102.937 41.358 Q 106.506 39.284 108.58 35.533 A 16.016 16.016 0 0 0 110.198 31.176 A 20.852 20.852 0 0 0 110.654 26.718 A 21.071 21.071 0 0 0 110.358 23.114 A 15.735 15.735 0 0 0 108.55 17.964 Q 106.445 14.274 102.877 12.261 A 15.158 15.158 0 0 0 100.045 11.025 A 16.92 16.92 0 0 0 94.855 10.248 A 19.108 19.108 0 0 0 93.891 10.272 A 15.963 15.963 0 0 0 86.803 12.261 Q 83.204 14.274 81.13 17.995 A 15.874 15.874 0 0 0 79.453 22.625 A 21.354 21.354 0 0 0 79.056 26.84 A 21.24 21.24 0 0 0 79.218 29.496 A 16.745 16.745 0 0 0 81.099 35.471 Q 83.143 39.223 86.742 41.327 A 14.981 14.981 0 0 0 89.585 42.615 Z M 94.855 38.552 A 11.432 11.432 0 0 0 98.043 38.131 A 8.54 8.54 0 0 0 102.358 35.289 A 11.469 11.469 0 0 0 104.688 30.354 A 16.534 16.534 0 0 0 105.042 26.84 Q 105.042 23.668 103.7 21.014 A 11.711 11.711 0 0 0 101.155 17.618 A 11.084 11.084 0 0 0 100.071 16.744 Q 97.783 15.128 94.855 15.128 Q 90.036 15.128 87.352 18.3 A 10.906 10.906 0 0 0 85.111 22.798 Q 84.71 24.419 84.672 26.321 A 20.051 20.051 0 0 0 84.668 26.718 Q 84.668 29.89 86.01 32.604 A 11.857 11.857 0 0 0 88.163 35.679 A 10.753 10.753 0 0 0 89.639 36.936 Q 91.927 38.552 94.855 38.552 Z M 138.714 34.16 L 138.714 17.568 Q 137.372 16.592 135.481 15.799 A 9.912 9.912 0 0 0 133.161 15.158 A 13.502 13.502 0 0 0 131.089 15.006 Q 128.588 15.006 126.392 16.348 A 9.598 9.598 0 0 0 123.463 19.171 A 11.966 11.966 0 0 0 122.824 20.222 A 10.858 10.858 0 0 0 121.753 23.23 Q 121.489 24.514 121.456 25.988 A 19 19 0 0 0 121.451 26.413 A 14.835 14.835 0 0 0 121.743 29.424 A 11.17 11.17 0 0 0 122.824 32.452 A 11.331 11.331 0 0 0 124.599 34.938 A 9.639 9.639 0 0 0 126.392 36.417 Q 128.588 37.82 131.15 37.82 Q 133.59 37.82 135.542 36.722 A 12.721 12.721 0 0 0 137.36 35.492 A 9.949 9.949 0 0 0 138.714 34.16 Z"
              vector-effect="non-scaling-stroke"
            />
   
      ),
      viewBox:"0 0 144.204 56.852"
    },
  },
};
export default theme;