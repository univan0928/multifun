interface IIconProps {
  name: 'layers' | 'home' | 'menu' | 'alarm' | 'avatar' | 'arrow-left' | 'search' | 'register-account' | 'invoice-payment' | 'down-vector' | 'refresh-button' | 'more-vertical';
  size?: number;
  color?: React.CSSProperties['color'];
}

const Icon = (props: IIconProps): JSX.Element => {
  const size = props.size ? props.size : 24;
  const color = props.color ? props.color : 'white';

  switch (props.name) {
    case 'layers':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 17L12 22L22 17" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 12L12 17L22 12" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      );
    case 'menu':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3 6H21" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3 18H21" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      );
    case 'alarm':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1350_9107)">
            <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" fill="#181819" fill-opacity="0.7" />
          </g>
          <circle cx="21.5" cy="2.5" r="2.5" fill="#DD425A" />
          <defs>
            <clipPath id="clip0_1350_9107">
              <rect width={size} height={size} fill={color} />
            </clipPath>
          </defs>
        </svg>
      );

    case 'avatar':
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="#C4C4C4" />
          <path d="M23.2743 14.7607C23.2743 13.8923 22.9293 13.0594 22.3152 12.4453C21.7011 11.8312 20.8682 11.4862 19.9998 11.4862C19.1313 11.4862 18.2984 11.8312 17.6843 12.4453C17.0702 13.0594 16.7252 13.8923 16.7252 14.7607C16.7252 15.6292 17.0702 16.4621 17.6843 17.0762C18.2984 17.6903 19.1313 18.0353 19.9998 18.0353C20.8682 18.0353 21.7011 17.6903 22.3152 17.0762C22.9293 16.4621 23.2743 15.6292 23.2743 14.7607ZM14.7605 14.7607C14.7605 13.3712 15.3125 12.0386 16.295 11.056C17.2776 10.0735 18.6102 9.52148 19.9998 9.52148C21.3893 9.52148 22.7219 10.0735 23.7045 11.056C24.687 12.0386 25.239 13.3712 25.239 14.7607C25.239 16.1503 24.687 17.4829 23.7045 18.4655C22.7219 19.448 21.3893 20 19.9998 20C18.6102 20 17.2776 19.448 16.295 18.4655C15.3125 17.4829 14.7605 16.1503 14.7605 14.7607ZM12.849 28.5138H27.1505C26.7862 25.9228 24.5595 23.9294 21.8703 23.9294H18.1292C15.44 23.9294 13.2133 25.9228 12.849 28.5138ZM10.8311 29.2628C10.8311 25.2311 14.0974 21.9647 18.1292 21.9647H21.8703C25.9021 21.9647 29.1685 25.2311 29.1685 29.2628C29.1685 29.9341 28.6241 30.4785 27.9528 30.4785H12.0467C11.3754 30.4785 10.8311 29.9341 10.8311 29.2628Z" fill="black" />
        </svg>

      );

    case 'arrow-left':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="#3A206D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 19L5 12L12 5" stroke="#3A206D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      );

    case 'search':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#181818" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      );
    case 'register-account':
      return (
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" width="25" height="25" rx="12.5" fill="#6861AB" fill-opacity="0.1" />
          <g clip-path="url(#clip0_1350_8993)">
            <path d="M15.1665 16.875V15.7917C15.1665 15.217 14.9382 14.6659 14.5319 14.2596C14.1256 13.8533 13.5745 13.625 12.9998 13.625H9.20817C8.63353 13.625 8.08243 13.8533 7.67611 14.2596C7.26978 14.6659 7.0415 15.217 7.0415 15.7917V16.875" stroke="#6861AB" stroke-width="1.59176" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.1042 11.4583C12.3008 11.4583 13.2708 10.4883 13.2708 9.29167C13.2708 8.09505 12.3008 7.125 11.1042 7.125C9.90755 7.125 8.9375 8.09505 8.9375 9.29167C8.9375 10.4883 9.90755 11.4583 11.1042 11.4583Z" stroke="#6861AB" stroke-width="1.59176" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.3335 9.8335V13.0835" stroke="#6861AB" stroke-width="1.59176" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.958 11.458H15.708" stroke="#6861AB" stroke-width="1.59176" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_1350_8993">
              <rect width="13" height="13" fill="white" transform="translate(6.5 5.5)" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'invoice-payment':
      return (
        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.3203 0.690918C20.0013 0.697931 18.7127 1.08695 17.6102 1.81092C16.5187 2.52689 15.6642 3.5507 15.155 4.75267H6.39887C4.05125 4.76579 3.76863 6.62342 3.65313 7.58767L3.56562 20.3828H0.875C0.762438 20.3797 0.650364 20.3987 0.545125 20.4388C0.440583 20.478 0.344827 20.5374 0.263375 20.6138C0.182737 20.6904 0.118187 20.7823 0.0734997 20.8842C0.0274334 20.9854 0.0024275 21.095 0 21.2062V23.1312C0.000553758 24.0434 0.333741 24.9241 0.937125 25.6083C1.54842 26.3013 2.3854 26.7555 3.29962 26.8902V26.9409H17.7153C18.7061 26.8904 19.6413 26.4672 20.3333 25.7562C21.0166 25.0533 21.3987 24.1115 21.3981 23.1312V13.8159C23.1575 13.7907 24.8384 13.0833 26.0864 11.8428C26.6967 11.2379 27.1801 10.5172 27.5084 9.72306C27.8366 8.92892 28.0031 8.07725 27.9981 7.21796C27.993 6.35866 27.8165 5.50901 27.479 4.71878C27.1414 3.92855 26.6495 3.21364 26.0321 2.61592C24.7704 1.38772 23.081 0.697539 21.3203 0.690918V0.690918ZM15.1078 20.6225C15.0278 20.5464 14.9335 20.4869 14.8304 20.4475C14.7262 20.4066 14.615 20.3867 14.5031 20.3889H5.28412L5.37162 8.51954C5.37162 8.51954 5.2745 7.21579 5.6735 6.78267C6.0725 6.34954 7.03762 6.44754 7.03762 6.44754H14.7079C14.6755 6.70882 14.6586 6.97178 14.6571 7.23504C14.655 7.93701 14.7691 8.63449 14.9949 9.29917H11.4529C11.2284 9.30421 11.0144 9.39538 10.8553 9.55379C10.7772 9.63108 10.7153 9.72308 10.673 9.82445C10.6307 9.92583 10.6089 10.0346 10.6089 10.1444C10.6089 10.2543 10.6307 10.363 10.673 10.4644C10.7153 10.5658 10.7772 10.6578 10.8553 10.735C11.0144 10.8935 11.2284 10.9846 11.4529 10.9897H15.8594C16.7774 12.2939 18.133 13.2254 19.6796 13.6147V23.1312C19.6791 23.4104 19.6227 23.6867 19.5138 23.9439C19.4048 24.201 19.2455 24.4337 19.0453 24.6283C18.6347 25.026 18.0856 25.2484 17.514 25.2484C16.9424 25.2484 16.3933 25.026 15.9828 24.6283C15.7825 24.4337 15.6232 24.201 15.5142 23.9439C15.4053 23.6867 15.3489 23.4104 15.3484 23.1312V21.2158C15.3514 21.1059 15.3317 20.9966 15.2906 20.8947C15.249 20.7926 15.1871 20.7 15.1086 20.6225H15.1078ZM14.2966 25.2539H3.88413C3.31275 25.2514 2.76469 25.0271 2.3555 24.6283C2.15561 24.4335 1.99644 24.2009 1.88724 23.944C1.77803 23.6872 1.72097 23.4112 1.71938 23.132V22.075H13.636V23.125C13.6378 23.885 13.8683 24.6268 14.2975 25.2539H14.2966ZM26.264 7.25867C26.2576 8.21635 25.9624 9.14981 25.417 9.93704C24.8642 10.7334 24.0886 11.3488 23.1875 11.7063C22.2811 12.0677 21.2895 12.1588 20.3324 11.9688C19.3789 11.7813 18.5011 11.319 17.8071 10.6388C17.1209 9.96659 16.6521 9.104 16.4614 8.16254C16.2731 7.22506 16.3732 6.25255 16.7484 5.37304C17.1277 4.48663 17.7622 3.7331 18.571 3.20829C19.5273 2.58601 20.6671 2.3082 21.8025 2.42066C22.9379 2.53311 24.0011 3.02913 24.8167 3.82692C25.2747 4.27349 25.6386 4.80717 25.8872 5.39654C26.1357 5.9859 26.2638 6.61904 26.264 7.25867V7.25867Z" fill="#6861AB" />
          <path d="M8.54135 12.4606C8.24713 12.4696 7.96179 12.5635 7.71973 12.731C7.4802 12.8967 7.29509 13.1296 7.18773 13.4003C7.08144 13.6691 7.05857 13.9636 7.1221 14.2456C7.18628 14.5289 7.33341 14.7866 7.54473 14.9858C7.75859 15.1873 8.02641 15.3223 8.3156 15.3743C8.60575 15.4272 8.90498 15.3953 9.17748 15.2825C9.44803 15.1708 9.67986 14.9821 9.84423 14.74C10.0067 14.5004 10.0936 14.2175 10.0936 13.928C10.0893 13.7308 10.0456 13.5364 9.96508 13.3564C9.88454 13.1764 9.76877 13.0143 9.6246 12.8797C9.33098 12.6034 8.94101 12.4526 8.53785 12.4597L8.54135 12.4606ZM8.54135 14.4503C8.43856 14.4413 8.34051 14.403 8.25873 14.3401C8.178 14.2777 8.11719 14.1932 8.08373 14.0968C8.05049 14.001 8.04653 13.8974 8.07235 13.7993C8.09878 13.7011 8.1532 13.6126 8.22898 13.5447C8.30604 13.4763 8.40107 13.4314 8.50285 13.4152C8.60501 13.3989 8.7097 13.4119 8.80473 13.4528C8.89898 13.4933 8.97952 13.5601 9.0366 13.6453C9.09335 13.7297 9.1238 13.8289 9.1241 13.9306C9.12059 14.0025 9.10276 14.0729 9.07165 14.1378C9.04055 14.2028 8.99681 14.2608 8.94298 14.3086C8.83266 14.4063 8.68857 14.4572 8.54135 14.4503V14.4503Z" fill="#6861AB" />
          <path d="M8.54135 8.74091C8.24713 8.7499 7.96179 8.8438 7.71973 9.01128C7.48017 9.17696 7.29505 9.40988 7.18773 9.68066C7.08144 9.94942 7.05857 10.244 7.1221 10.5259C7.18633 10.8092 7.33346 11.0669 7.54473 11.2662C7.75835 11.4675 8.02585 11.6025 8.31473 11.6547C8.60446 11.7089 8.90367 11.6785 9.1766 11.5672C9.44702 11.4557 9.67882 11.2674 9.84335 11.0255C10.0059 10.7859 10.0927 10.5031 10.0927 10.2135C10.0892 10.0164 10.0463 9.8219 9.96655 9.64157C9.88676 9.46124 9.77168 9.2987 9.6281 9.16353C9.33484 8.8863 8.94486 8.73465 8.54135 8.74091V8.74091ZM8.54135 10.7307C8.43856 10.7216 8.34051 10.6833 8.25873 10.6204C8.178 10.558 8.11719 10.4735 8.08373 10.3772C8.05049 10.2813 8.04653 10.1778 8.07235 10.0797C8.09878 9.9814 8.1532 9.89294 8.22898 9.82503C8.30604 9.75661 8.40107 9.71168 8.50285 9.69553C8.60501 9.67922 8.7097 9.69227 8.80473 9.73316C8.89898 9.77359 8.97952 9.84045 9.0366 9.92566C9.0933 10.01 9.12375 10.1093 9.1241 10.2109C9.12059 10.2828 9.10276 10.3533 9.07165 10.4182C9.04055 10.4831 8.99681 10.5411 8.94298 10.5889C8.83252 10.6863 8.68845 10.7369 8.54135 10.7298V10.7307Z" fill="#6861AB" />
          <path d="M8.54135 16.1867C8.24713 16.1957 7.96179 16.2896 7.71973 16.4571C7.48017 16.6227 7.29505 16.8557 7.18773 17.1264C7.08144 17.3952 7.05857 17.6897 7.1221 17.9717C7.18628 18.255 7.33341 18.5127 7.54473 18.7119C7.75835 18.9133 8.02585 19.0482 8.31473 19.1004C8.60446 19.1546 8.90367 19.1243 9.1766 19.0129C9.44704 18.9015 9.67886 18.7132 9.84335 18.4713C10.006 18.2321 10.0932 17.9495 10.0936 17.6602C10.0899 17.4623 10.0465 17.2671 9.96593 17.0863C9.88536 16.9055 9.76929 16.7427 9.6246 16.6076C9.33199 16.3317 8.94343 16.1808 8.54135 16.1867V16.1867ZM8.54135 18.1764C8.43856 18.1674 8.34051 18.1291 8.25873 18.0662C8.178 18.0038 8.11719 17.9193 8.08373 17.8229C8.05049 17.7271 8.04653 17.6235 8.07235 17.5254C8.09878 17.4272 8.1532 17.3387 8.22898 17.2708C8.30604 17.2024 8.40107 17.1575 8.50285 17.1413C8.60501 17.125 8.7097 17.1381 8.80473 17.1789C8.89898 17.2194 8.97952 17.2862 9.0366 17.3714C9.09335 17.4558 9.1238 17.555 9.1241 17.6567C9.11986 17.7281 9.10151 17.798 9.07013 17.8622C9.03874 17.9265 8.99493 17.9839 8.94123 18.0312C8.83121 18.1282 8.68786 18.1787 8.54135 18.1721V18.1764Z" fill="#6861AB" />
          <path d="M11.5264 14.819H17.9874C18.1087 14.8217 18.2294 14.8006 18.3426 14.7569C18.4552 14.7136 18.5581 14.6485 18.6454 14.5652C18.732 14.4828 18.801 14.3837 18.8484 14.2739C18.8953 14.1647 18.9195 14.0471 18.9195 13.9282C18.9195 13.8094 18.8953 13.6918 18.8484 13.5826C18.801 13.4728 18.732 13.3737 18.6454 13.2912C18.5581 13.208 18.4552 13.1429 18.3426 13.0996C18.2294 13.0562 18.1087 13.0354 17.9874 13.0384H11.5264C11.4051 13.0354 11.2844 13.0562 11.1711 13.0996C11.0586 13.1429 10.9557 13.208 10.8684 13.2912C10.7819 13.3738 10.7128 13.4728 10.6654 13.5826C10.6184 13.6918 10.5942 13.8094 10.5942 13.9282C10.5942 14.0471 10.6184 14.1647 10.6654 14.2739C10.7128 14.3836 10.7819 14.4827 10.8684 14.5652C10.9557 14.6485 11.0586 14.7136 11.1711 14.7569C11.2844 14.8006 11.4051 14.8217 11.5264 14.819V14.819Z" fill="#6861AB" />
          <path d="M17.9874 16.8006H11.5264C11.4051 16.7976 11.2844 16.8184 11.1711 16.8618C11.0586 16.9051 10.9557 16.9702 10.8684 17.0534C10.7819 17.136 10.7128 17.2351 10.6654 17.3448C10.6184 17.454 10.5942 17.5716 10.5942 17.6904C10.5942 17.8093 10.6184 17.9269 10.6654 18.0361C10.7128 18.1458 10.7819 18.2449 10.8684 18.3274C10.9557 18.4107 11.0586 18.4758 11.1711 18.5191C11.2844 18.5624 11.4051 18.5832 11.5264 18.5803H17.9874C18.1087 18.5832 18.2293 18.5624 18.3426 18.5191C18.4552 18.4758 18.5581 18.4107 18.6454 18.3274C18.732 18.245 18.801 18.1459 18.8484 18.0361C18.8953 17.9269 18.9195 17.8093 18.9195 17.6904C18.9195 17.5716 18.8953 17.454 18.8484 17.3448C18.801 17.235 18.732 17.1359 18.6454 17.0534C18.5581 16.9702 18.4552 16.9051 18.3426 16.8618C18.2294 16.8184 18.1087 16.7976 17.9874 16.8006Z" fill="#6861AB" />
          <path d="M23.4394 5.51471H22.7394C22.6729 5.27074 22.5734 5.037 22.4437 4.81996H23.4937C23.6289 4.80624 23.754 4.74184 23.8437 4.63971C23.9324 4.53882 23.978 4.40722 23.9708 4.27311C23.9636 4.13899 23.9041 4.01302 23.8052 3.92221C23.7055 3.82969 23.5746 3.77814 23.4386 3.77783H19.3374C19.1963 3.77758 19.0606 3.83254 18.9594 3.93096C18.91 3.97892 18.8707 4.03631 18.8439 4.09974C18.817 4.16317 18.8032 4.23134 18.8032 4.30021C18.8032 4.36908 18.817 4.43725 18.8439 4.50068C18.8707 4.5641 18.91 4.6215 18.9594 4.66946C19.0606 4.76788 19.1963 4.82283 19.3374 4.82258H20.5126C20.7438 4.82677 20.9694 4.89393 21.1653 5.01683C21.3594 5.13842 21.5158 5.31175 21.6168 5.51733H19.3418C19.2007 5.51708 19.065 5.57204 18.9638 5.67046C18.9143 5.71835 18.8749 5.77573 18.848 5.83917C18.8211 5.9026 18.8072 5.9708 18.8072 6.03971C18.8072 6.10861 18.8211 6.17681 18.848 6.24025C18.8749 6.30369 18.9143 6.36106 18.9638 6.40896C19.065 6.50738 19.2007 6.56233 19.3418 6.56208H21.6168C21.5519 6.6857 21.4716 6.80065 21.3779 6.90421C21.2645 7.01666 21.1301 7.10583 20.9824 7.16671C20.8336 7.229 20.674 7.2617 20.5126 7.26296H19.3304C19.226 7.26257 19.1237 7.29301 19.0364 7.35046C18.9501 7.40742 18.883 7.48916 18.8439 7.58496C18.8052 7.68011 18.7966 7.7849 18.8194 7.88508C18.8423 7.98604 18.8954 8.07762 18.9717 8.14758L21.9073 10.8522C22.0071 10.9422 22.1369 10.9918 22.2713 10.9913C22.345 10.9912 22.4179 10.9764 22.4857 10.9476C22.5517 10.9185 22.6111 10.8766 22.6607 10.8242C22.708 10.7752 22.7451 10.7173 22.7697 10.6538C22.7943 10.5903 22.8059 10.5225 22.804 10.4545C22.802 10.3864 22.7865 10.3194 22.7583 10.2574C22.7301 10.1955 22.6897 10.1398 22.6397 10.0936L20.6762 8.27708C21.2259 8.24345 21.7448 8.01152 22.1366 7.62433C22.4397 7.33661 22.6525 6.96692 22.7491 6.56033H23.4491C23.5902 6.56058 23.7259 6.50563 23.8271 6.40721C23.8765 6.35925 23.9158 6.30185 23.9426 6.23843C23.9695 6.175 23.9833 6.10683 23.9833 6.03796C23.9833 5.96909 23.9695 5.90092 23.9426 5.83749C23.9158 5.77406 23.8765 5.71667 23.8271 5.66871C23.7259 5.57029 23.5902 5.51533 23.4491 5.51558L23.4394 5.51471Z" fill="#6861AB" />
        </svg>
      );

    case 'down-vector':
      return (
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.81592L7 7.81592L13 1.81592" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      );
    case 'refresh-button':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width={size} height={size} rx="12" fill="white" fill-opacity="0.3" />
          <g clip-path="url(#clip0_1352_7733)">
            <path d="M7.3335 18.4165L10.8335 18.4165L10.8335 14.9165" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.6665 5.5835L13.1665 5.5835L13.1665 9.0835" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.2496 7.04734C9.41355 7.34318 8.66608 7.846 8.07692 8.50886C7.48777 9.17172 7.07613 9.97302 6.88041 10.838C6.6847 11.703 6.7113 12.6034 6.95771 13.4554C7.20413 14.3073 7.66235 15.0829 8.2896 15.7098L10.8329 18.4165M13.1663 5.58317L15.7096 8.28984C16.3368 8.91677 16.7951 9.69239 17.0415 10.5443C17.2879 11.3962 17.3145 12.2967 17.1188 13.1617C16.9231 14.0266 16.5114 14.828 15.9223 15.4908C15.3331 16.1537 14.5856 16.6565 13.7496 16.9523" stroke="white" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_1352_7733">
              <rect width="14" height="14" fill="white" transform="translate(5 19) rotate(-90)" />
            </clipPath>
          </defs>
        </svg>

      );
    case 'more-vertical':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill={color} fill-opacity="0.3" />
          <path d="M11.9998 12.0832C12.322 12.0832 12.5832 11.822 12.5832 11.4998C12.5832 11.1777 12.322 10.9165 11.9998 10.9165C11.6777 10.9165 11.4165 11.1777 11.4165 11.4998C11.4165 11.822 11.6777 12.0832 11.9998 12.0832Z" stroke="white" stroke-width="1.35964" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11.9998 8.00016C12.322 8.00016 12.5832 7.739 12.5832 7.41683C12.5832 7.09466 12.322 6.8335 11.9998 6.8335C11.6777 6.8335 11.4165 7.09466 11.4165 7.41683C11.4165 7.739 11.6777 8.00016 11.9998 8.00016Z" stroke="white" stroke-width="1.35964" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11.9998 16.1667C12.322 16.1667 12.5832 15.9055 12.5832 15.5833C12.5832 15.2612 12.322 15 11.9998 15C11.6777 15 11.4165 15.2612 11.4165 15.5833C11.4165 15.9055 11.6777 16.1667 11.9998 16.1667Z" stroke="white" stroke-width="1.35964" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      );
    default:
      return (
        <></>
      );
  }
};

export default Icon;