import { createComponent } from "./create-component"

export const ClipboardAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg
      width={400}
      height={300}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x={111.5}
        y={119.5}
        width={176.163}
        height={60}
        rx={5.79592}
        fill={palette[2]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M148.337 137.5C148.337 135.291 146.546 133.5 144.337 133.5C142.128 133.5 140.337 135.291 140.337 137.5H137.337V142.5H151.337V137.5H148.337ZM157.337 137.5H153.337V140.5H155.337V162.5H133.337V140.5H135.337V137.5H131.337C130.784 137.5 130.337 137.948 130.337 138.5V164.5C130.337 165.052 130.784 165.5 131.337 165.5H157.337C157.89 165.5 158.337 165.052 158.337 164.5V138.5C158.337 137.948 157.89 137.5 157.337 137.5ZM142.63 156.207C142.825 156.402 143.081 156.5 143.337 156.5C143.593 156.5 143.849 156.402 144.044 156.207L150.751 149.5L149.337 148.086L143.337 154.086L140.337 151.086L138.923 152.5L142.63 156.207Z"
        fill={palette[15]}
      />
      <path
        d="M191.977 145.759H188.875C188.756 145.096 188.533 144.512 188.209 144.009C187.884 143.505 187.486 143.077 187.015 142.726C186.545 142.375 186.018 142.109 185.434 141.93C184.858 141.751 184.245 141.662 183.595 141.662C182.422 141.662 181.371 141.957 180.443 142.547C179.522 143.137 178.792 144.002 178.256 145.142C177.725 146.282 177.46 147.674 177.46 149.318C177.46 150.975 177.725 152.374 178.256 153.514C178.792 154.654 179.525 155.516 180.453 156.099C181.381 156.683 182.425 156.974 183.585 156.974C184.228 156.974 184.838 156.888 185.415 156.716C185.998 156.537 186.525 156.275 186.996 155.93C187.466 155.586 187.864 155.165 188.189 154.668C188.52 154.164 188.749 153.587 188.875 152.938L191.977 152.947C191.811 153.948 191.49 154.87 191.013 155.712C190.542 156.547 189.935 157.269 189.193 157.879C188.457 158.482 187.615 158.95 186.667 159.281C185.72 159.613 184.685 159.778 183.565 159.778C181.802 159.778 180.231 159.361 178.852 158.526C177.473 157.684 176.386 156.481 175.591 154.916C174.802 153.352 174.408 151.486 174.408 149.318C174.408 147.144 174.805 145.278 175.601 143.72C176.396 142.156 177.483 140.956 178.862 140.121C180.241 139.279 181.809 138.858 183.565 138.858C184.646 138.858 185.653 139.014 186.588 139.325C187.529 139.63 188.374 140.081 189.123 140.678C189.872 141.268 190.492 141.99 190.983 142.845C191.473 143.694 191.805 144.665 191.977 145.759ZM201.848 159.808C200.416 159.808 199.167 159.48 198.1 158.824C197.032 158.168 196.204 157.25 195.614 156.07C195.024 154.89 194.729 153.511 194.729 151.933C194.729 150.349 195.024 148.964 195.614 147.777C196.204 146.59 197.032 145.669 198.1 145.013C199.167 144.357 200.416 144.028 201.848 144.028C203.28 144.028 204.53 144.357 205.597 145.013C206.664 145.669 207.493 146.59 208.083 147.777C208.673 148.964 208.968 150.349 208.968 151.933C208.968 153.511 208.673 154.89 208.083 156.07C207.493 157.25 206.664 158.168 205.597 158.824C204.53 159.48 203.28 159.808 201.848 159.808ZM201.858 157.312C202.786 157.312 203.555 157.067 204.165 156.577C204.775 156.086 205.226 155.433 205.517 154.618C205.816 153.803 205.965 152.904 205.965 151.923C205.965 150.949 205.816 150.054 205.517 149.239C205.226 148.417 204.775 147.757 204.165 147.26C203.555 146.763 202.786 146.514 201.858 146.514C200.923 146.514 200.148 146.763 199.531 147.26C198.922 147.757 198.468 148.417 198.169 149.239C197.878 150.054 197.732 150.949 197.732 151.923C197.732 152.904 197.878 153.803 198.169 154.618C198.468 155.433 198.922 156.086 199.531 156.577C200.148 157.067 200.923 157.312 201.858 157.312ZM212.286 165.227V144.227H215.189V146.703H215.438C215.61 146.385 215.859 146.017 216.184 145.599C216.509 145.182 216.959 144.817 217.536 144.506C218.113 144.188 218.875 144.028 219.823 144.028C221.056 144.028 222.156 144.34 223.124 144.963C224.092 145.586 224.851 146.484 225.401 147.658C225.958 148.831 226.236 150.243 226.236 151.893C226.236 153.544 225.961 154.959 225.411 156.139C224.861 157.312 224.105 158.217 223.144 158.854C222.183 159.483 221.086 159.798 219.853 159.798C218.925 159.798 218.166 159.643 217.576 159.331C216.992 159.019 216.535 158.655 216.204 158.237C215.872 157.82 215.617 157.448 215.438 157.124H215.259V165.227H212.286ZM215.199 151.864C215.199 152.937 215.355 153.879 215.667 154.688C215.978 155.496 216.429 156.129 217.019 156.587C217.609 157.037 218.332 157.263 219.187 157.263C220.075 157.263 220.817 157.027 221.414 156.557C222.01 156.08 222.461 155.433 222.766 154.618C223.078 153.803 223.233 152.884 223.233 151.864C223.233 150.856 223.081 149.951 222.776 149.149C222.478 148.347 222.027 147.714 221.424 147.25C220.827 146.786 220.082 146.554 219.187 146.554C218.325 146.554 217.596 146.776 216.999 147.22C216.409 147.664 215.962 148.284 215.657 149.08C215.352 149.875 215.199 150.803 215.199 151.864ZM229.567 159.5V144.227H232.54V159.5H229.567ZM231.069 141.871C230.552 141.871 230.108 141.698 229.736 141.354C229.372 141.002 229.189 140.585 229.189 140.101C229.189 139.61 229.372 139.193 229.736 138.848C230.108 138.497 230.552 138.321 231.069 138.321C231.586 138.321 232.027 138.497 232.391 138.848C232.762 139.193 232.948 139.61 232.948 140.101C232.948 140.585 232.762 141.002 232.391 141.354C232.027 141.698 231.586 141.871 231.069 141.871ZM243.122 159.808C241.618 159.808 240.322 159.487 239.235 158.844C238.154 158.194 237.319 157.283 236.729 156.109C236.146 154.929 235.854 153.547 235.854 151.963C235.854 150.399 236.146 149.02 236.729 147.827C237.319 146.634 238.141 145.702 239.195 145.033C240.255 144.363 241.495 144.028 242.914 144.028C243.775 144.028 244.611 144.171 245.419 144.456C246.228 144.741 246.954 145.188 247.597 145.798C248.24 146.408 248.747 147.2 249.118 148.175C249.489 149.143 249.675 150.319 249.675 151.705V152.759H237.534V150.531H246.762C246.762 149.749 246.602 149.056 246.284 148.453C245.966 147.843 245.519 147.363 244.942 147.011C244.372 146.66 243.702 146.484 242.933 146.484C242.098 146.484 241.369 146.69 240.746 147.101C240.129 147.505 239.652 148.036 239.314 148.692C238.983 149.341 238.817 150.047 238.817 150.81V152.55C238.817 153.571 238.996 154.439 239.354 155.155C239.718 155.871 240.226 156.418 240.875 156.795C241.525 157.167 242.284 157.352 243.152 157.352C243.716 157.352 244.229 157.273 244.693 157.114C245.157 156.948 245.558 156.703 245.896 156.378C246.235 156.053 246.493 155.652 246.672 155.175L249.486 155.682C249.261 156.51 248.856 157.236 248.273 157.859C247.696 158.476 246.97 158.956 246.095 159.301C245.227 159.639 244.236 159.808 243.122 159.808ZM258.691 159.798C257.458 159.798 256.358 159.483 255.39 158.854C254.429 158.217 253.673 157.312 253.123 156.139C252.579 154.959 252.307 153.544 252.307 151.893C252.307 150.243 252.582 148.831 253.133 147.658C253.689 146.484 254.452 145.586 255.42 144.963C256.387 144.34 257.484 144.028 258.711 144.028C259.659 144.028 260.421 144.188 260.998 144.506C261.581 144.817 262.032 145.182 262.35 145.599C262.675 146.017 262.927 146.385 263.106 146.703H263.285V139.136H266.258V159.5H263.354V157.124H263.106C262.927 157.448 262.668 157.82 262.33 158.237C261.999 158.655 261.541 159.019 260.958 159.331C260.375 159.643 259.619 159.798 258.691 159.798ZM259.347 157.263C260.202 157.263 260.925 157.037 261.515 156.587C262.111 156.129 262.562 155.496 262.867 154.688C263.179 153.879 263.334 152.937 263.334 151.864C263.334 150.803 263.182 149.875 262.877 149.08C262.572 148.284 262.125 147.664 261.535 147.22C260.945 146.776 260.216 146.554 259.347 146.554C258.452 146.554 257.707 146.786 257.11 147.25C256.513 147.714 256.063 148.347 255.758 149.149C255.459 149.951 255.31 150.856 255.31 151.864C255.31 152.884 255.463 153.803 255.768 154.618C256.073 155.433 256.523 156.08 257.12 156.557C257.723 157.027 258.466 157.263 259.347 157.263Z"
        fill={palette[0]}
      />
      <path
        d="M291.996 184.937C291.073 184.654 290.241 184.842 289.594 185.078C289.039 184.417 288.115 183.804 286.914 183.804C285.99 183.804 285.204 184.087 284.604 184.37C283.911 183.473 282.802 182.623 281.139 182.623C280.215 182.623 279.475 182.906 278.829 183.237V176.721C278.829 174.833 277.581 172 274.209 172C270.836 172 269.589 174.833 269.589 176.721V189.941L269.311 189.658C269.126 189.422 267.278 187.25 264.922 187.345C262.704 187.392 261.318 188.336 260.44 190.414C259.377 192.964 260.533 194.002 260.856 194.238C261.734 194.852 262.611 195.655 262.704 195.986C262.842 196.41 263.627 198.724 265.153 200.99C265.753 201.888 266.539 202.548 267.093 203.068C267.278 203.256 267.463 203.398 267.602 203.54C267.74 203.681 267.971 203.918 268.202 204.154C268.711 204.626 269.311 205.24 269.866 205.854C270.328 206.42 271.39 208.733 271.991 210.245C272.176 210.669 272.592 211 273.054 211H289.225C289.64 211 289.964 210.811 290.195 210.433C290.379 210.103 295 202.69 295 198.016V189.517C294.999 187.061 293.937 185.55 291.996 184.937L291.996 184.937ZM292.689 197.968C292.689 201.037 289.963 206.23 288.577 208.592H273.792C273.284 207.364 272.268 205.098 271.574 204.295C270.974 203.587 270.327 202.973 269.773 202.407C269.542 202.171 269.357 202.029 269.218 201.84C269.034 201.651 268.848 201.462 268.571 201.273C268.063 200.849 267.462 200.282 267.047 199.668C265.984 198.11 265.198 196.315 264.875 195.229C264.505 194.096 262.934 192.869 262.287 192.349C262.287 192.208 262.334 191.877 262.565 191.311C263.073 190.083 263.674 189.706 265.014 189.658H265.06C266.123 189.658 267.232 190.697 267.601 191.169L269.911 193.765C270.234 194.143 270.743 194.237 271.204 194.096C271.666 193.907 271.944 193.482 271.944 193.01L271.944 176.722C271.944 176.344 272.037 174.361 274.254 174.361C276.38 174.361 276.564 176.155 276.564 176.722V189.706C276.564 190.367 277.072 190.886 277.72 190.886C278.367 190.886 278.875 190.367 278.875 189.706V186.307C279.198 185.882 280.03 184.985 281.185 184.985C282.294 184.985 282.848 185.835 283.033 186.165V189.706C283.033 190.368 283.541 190.887 284.188 190.887C284.835 190.887 285.344 190.368 285.344 189.706V186.732C285.667 186.496 286.267 186.165 286.961 186.165C287.608 186.165 287.977 186.637 288.116 186.921V189.706C288.116 190.368 288.624 190.887 289.271 190.887C289.918 190.887 290.427 190.368 290.427 189.706V187.298C290.704 187.157 291.027 187.062 291.35 187.157C291.998 187.393 292.737 187.724 292.737 189.47V197.969L292.689 197.968Z"
        fill="black"
      />
      <path
        d="M274.012 172.003C274.007 172.004 274.002 172.004 273.997 172.004L274.005 172L274.012 172.003Z"
        fill={palette[0]}
      />
      <path
        d="M288.582 208.592C289.968 206.23 292.694 201.037 292.694 197.968L292.742 197.969V189.47C292.742 187.724 292.003 187.393 291.356 187.157C291.033 187.062 290.709 187.157 290.432 187.298V189.706C290.432 190.368 289.924 190.887 289.277 190.887C288.629 190.887 288.121 190.368 288.121 189.706V186.921C287.982 186.637 287.613 186.165 286.966 186.165C286.272 186.165 285.672 186.496 285.349 186.732V189.706C285.349 190.368 284.841 190.887 284.193 190.887C283.546 190.887 283.038 190.368 283.038 189.706V186.165C282.853 185.835 282.299 184.985 281.19 184.985C280.035 184.985 279.203 185.882 278.88 186.307V189.706C278.88 190.367 278.372 190.886 277.725 190.886C277.078 190.886 276.569 190.367 276.569 189.706V176.722C276.569 176.155 276.385 174.361 274.259 174.361C272.042 174.361 271.949 176.344 271.949 176.722L271.949 193.01C271.949 193.482 271.672 193.907 271.21 194.096C270.748 194.237 270.24 194.143 269.916 193.765L267.606 191.169C267.237 190.697 266.128 189.658 265.065 189.658H265.019C263.679 189.706 263.078 190.083 262.57 191.311C262.339 191.877 262.293 192.208 262.293 192.349C262.316 192.368 262.341 192.388 262.367 192.409C263.052 192.958 264.524 194.138 264.88 195.229C265.203 196.315 265.989 198.11 267.052 199.668C267.467 200.282 268.068 200.849 268.576 201.273C268.853 201.462 269.039 201.651 269.223 201.84C269.312 201.961 269.42 202.063 269.547 202.182C269.618 202.249 269.695 202.322 269.778 202.407C269.913 202.544 270.053 202.685 270.197 202.83C270.644 203.278 271.125 203.76 271.58 204.295C272.273 205.098 273.289 207.364 273.798 208.592H288.582Z"
        fill={palette[0]}
      />
    </svg>
  )
})