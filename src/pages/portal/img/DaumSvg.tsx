export const DaumSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 105.076 105.076"
      width="50px"
    >
      <path
        fill="#FFF"
        d="M20.956 0C9.401 0 0 9.936 0 22.151v60.775c0 12.215 9.4 22.151 20.956 22.151h63.166c11.555 0 20.954-9.936 20.954-22.151V22.151C105.076 9.936 95.677 0 84.122 0H20.956z"
      />
      <defs>
        <path
          id="a"
          d="M53.559 20.589H26.195A3.195 3.195 0 0 0 23 23.784V81.29a3.195 3.195 0 0 0 3.195 3.195h27.364c16.85 0 30.559-14.332 30.559-31.948S70.409 20.589 53.559 20.589zm0 45.838H41.857a.8.8 0 0 1-.799-.799V39.445a.8.8 0 0 1 .799-.799H53.56c6.904 0 12.501 6.219 12.501 13.89-.001 7.672-5.598 13.891-12.502 13.891z"
        />
      </defs>
      <clipPath xmlns="http://www.w3.org/2000/svg" id="b">
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref="#a"
          overflow="visible"
        />
      </clipPath>
      <linearGradient
        id="c"
        x1="-2489.7983"
        x2="-2566.9651"
        y1="3297.2856"
        y2="3276.6089"
        gradientTransform="translate(2572.565 -3234.41)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style={{ stopColor: "#ffe100" }} />
        <stop
          offset="0.3016"
          style={{ stopColor: "#ffdb00", stopOpacity: 0.5979 }}
        />
        <stop
          offset="0.6954"
          style={{ stopColor: "#ffcb00", stopOpacity: 0.0728 }}
        />
        <stop offset="0.75" style={{ stopColor: "#ffc800", stopOpacity: 0 }} />
      </linearGradient>
      <circle
        cx="44.184"
        cy="52.537"
        r="39.934"
        fill="url(#c)"
        clipPath="url(#b)"
      />
      <linearGradient
        id="d"
        x1="-2508.585"
        x2="-2452.1094"
        y1="3199.2197"
        y2="3142.7439"
        gradientTransform="translate(2524.53 -3118.445)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style={{ stopColor: "#fa3264" }} />
        <stop
          offset="0.3016"
          style={{ stopColor: "#fa3864", stopOpacity: 0.5979 }}
        />
        <stop
          offset="0.6954"
          style={{ stopColor: "#f94864", stopOpacity: 0.0728 }}
        />
        <stop offset="0.75" style={{ stopColor: "#f94b64", stopOpacity: 0 }} />
      </linearGradient>
      <circle
        cx="44.184"
        cy="52.537"
        r="39.934"
        fill="url(#d)"
        clipPath="url(#b)"
        opacity={0.75}
      />
      <radialGradient
        id="e"
        cx="489.9209"
        cy="126.4219"
        r="33.6314"
        gradientTransform="translate(-1178.137 -300.207) scale(2.4731)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style={{ stopColor: "#6496ff" }} />
        <stop
          offset="0.3695"
          style={{ stopColor: "#5e99ff", stopOpacity: 0.5381 }}
        />
        <stop offset="0.8" style={{ stopColor: "#50a0ff", stopOpacity: 0 }} />
      </radialGradient>
      <path
        fill="url(#e)"
        d="M4.249 12.602h79.869v79.869H4.249z"
        clipPath="url(#b)"
      />
    </svg>
  );
};
