interface TitleLogoSVGProps {
  className?: string;
}

const TitleLogoSVG:React.FC<TitleLogoSVGProps> = (props) => (
  <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" { ...props }>
    <path d="M37.5 71.0938C18.9688 71.0938 3.90625 56.0312 3.90625 37.5C3.90625 32.8437 4.8438 28.375 6.68755 24.125C7.2188 22.9375 8.59377 22.4063 9.78127 22.9063C10.9688 23.4375 11.5001 24.8125 11.0001 26C9.43756 29.625 8.62503 33.5 8.62503 37.5C8.62503 53.4375 21.5938 66.4062 37.5313 66.4062C53.4688 66.4062 66.4375 53.4375 66.4375 37.5C66.4375 21.5625 53.4688 8.59375 37.5313 8.59375C33.5 8.59375 29.5624 9.40625 25.9062 11.0312C24.7499 11.5625 23.3437 11.0312 22.8125 9.84373C22.2812 8.65623 22.8125 7.28126 24 6.75001C28.2812 4.87501 32.8125 3.90625 37.5313 3.90625C56.0625 3.90625 71.125 18.9688 71.125 37.5C71.125 56.0312 56.0312 71.0938 37.5 71.0938Z" fill="white"/>
    <g filter="url(#filter0_d_1775_57762)">
      <path d="M21 15.625C21 18.5935 18.5935 21 15.625 21C12.6565 21 10.25 18.5935 10.25 15.625C10.25 12.6565 12.6565 10.25 15.625 10.25C18.5935 10.25 21 12.6565 21 15.625Z" stroke="white" shapeRendering="crispEdges"/>
    </g>
    <g className="rotate-component">
      <g filter="url(#filter1_d_1775_57762)">
        <path d="M36.9993 38.4163C36.266 38.4163 35.5327 38.233 34.866 37.883L24.016 32.033C23.0327 31.4997 22.416 30.4497 22.416 29.283C22.416 28.1163 23.0327 27.0663 24.016 26.533L34.866 20.683C36.1993 19.9663 37.7993 19.9663 39.116 20.683L49.966 26.533C50.9493 27.0663 51.566 28.1163 51.566 29.283C51.566 30.4497 50.9493 31.4997 49.966 32.033L39.116 37.883C38.466 38.2497 37.7327 38.4163 36.9993 38.4163ZM36.9993 22.633C36.6827 22.633 36.3493 22.7163 36.0493 22.883L25.216 28.7163C24.9327 28.8663 24.916 29.183 24.916 29.283C24.916 29.383 24.9327 29.6997 25.216 29.833L36.066 35.683C36.666 35.9997 37.3493 35.9997 37.9493 35.683L48.7993 29.833C49.066 29.683 49.0993 29.3663 49.0993 29.283C49.0993 29.183 49.0827 28.8663 48.7993 28.733L37.9493 22.883C37.6493 22.7163 37.316 22.633 36.9993 22.633Z" fill="white"/>
      </g>
      <g filter="url(#filter2_d_1775_57762)">
        <path d="M33.3007 55.8666C32.834 55.8666 32.3507 55.7499 31.9173 55.5333L21.8173 50.4999C20.134 49.6499 19.084 47.9499 19.084 46.0666V36.5333C19.084 35.4499 19.634 34.4666 20.5507 33.8999C21.484 33.3333 22.6007 33.2833 23.5673 33.7666L33.6673 38.7999C35.3507 39.6499 36.4007 41.3333 36.4007 43.2333V52.7666C36.4007 53.8499 35.8507 54.8333 34.934 55.3999C34.434 55.7166 33.8673 55.8666 33.3007 55.8666ZM22.184 35.9333C22.0507 35.9333 21.934 35.9833 21.8673 36.0166C21.7673 36.0833 21.584 36.2333 21.584 36.5333V46.0666C21.584 46.9999 22.1007 47.8499 22.934 48.2666L33.0173 53.3166C33.284 53.4499 33.5007 53.3499 33.6007 53.2999C33.7007 53.2333 33.884 53.0833 33.884 52.7833V43.2499C33.884 42.3166 33.3673 41.4666 32.534 41.0499L22.4507 35.9999C22.3507 35.9499 22.2673 35.9333 22.184 35.9333Z" fill="white"/>
      </g>
      <g filter="url(#filter3_d_1775_57762)">
        <path d="M40.6996 55.8667C40.1329 55.8667 39.5663 55.7167 39.0663 55.4C38.1496 54.8333 37.5996 53.85 37.5996 52.7667V43.2333C37.5996 41.35 38.6496 39.65 40.3329 38.8L50.4163 33.75C51.3829 33.2667 52.5163 33.3167 53.4329 33.8833C54.3496 34.45 54.8996 35.4333 54.8996 36.5167V46.05C54.8996 47.9333 53.8496 49.6333 52.1663 50.4833L42.0829 55.5333C41.6496 55.7667 41.1663 55.8667 40.6996 55.8667ZM51.8163 35.9333C51.7329 35.9333 51.6496 35.95 51.5496 36L41.4663 41.05C40.6329 41.4667 40.1163 42.3 40.1163 43.25V52.7833C40.1163 53.0833 40.2996 53.2333 40.3996 53.3C40.4996 53.3667 40.7163 53.45 40.9829 53.3167L51.0663 48.2667C51.8996 47.85 52.4163 47 52.4163 46.0667V36.5333C52.4163 36.2333 52.2329 36.0833 52.1329 36.0167C52.0663 35.9833 51.9496 35.9333 51.8163 35.9333Z" fill="white"/>
      </g>
    </g>
    <defs>
      <filter id="filter0_d_1775_57762" x="5.75" y="9.75" width="19.75" height="19.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1775_57762"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1775_57762" result="shape"/>
        </filter>
        <filter id="filter1_d_1775_57762" x="18.416" y="20.1455" width="37.1504" height="26.2705" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1775_57762"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1775_57762" result="shape"/>
      </filter>
      <filter id="filter2_d_1775_57762" x="15.084" y="33.4365" width="25.3164" height="30.4297" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1775_57762"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1775_57762" result="shape"/>
      </filter>
      <filter id="filter3_d_1775_57762" x="33.5996" y="33.4199" width="25.3008" height="30.4463" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1775_57762"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1775_57762" result="shape"/>
      </filter>
    </defs>
  </svg>
);


export default TitleLogoSVG;
