"use client"

import {
  forwardRef,
  SVGProps,
} from 'react'

const CertifIllus = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
  const primaryColor = '#612A05'

  return (
    <svg 
      aria-hidden={true}
      fill="none" 
      focusable={false} 
      ref={ref} 
      viewBox="0 0 229 221" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask fill="white" id="path-1-inside-1_203_1856">
        <path d="M219.93 110.078C219.93 117.101 210.21 123.146 208.888 129.767C207.507 136.618 214.179 145.887 211.591 152.22C208.945 158.668 197.673 160.453 193.819 166.153C189.966 171.91 192.554 183.021 187.723 187.915C182.834 192.808 171.734 190.16 165.983 194.017C160.289 197.817 158.449 209.101 152.065 211.807C145.738 214.398 136.536 207.777 129.635 209.101C122.963 210.426 116.982 220.155 109.965 220.155C102.948 220.155 96.9096 210.426 90.2956 209.101C83.4515 207.72 74.1919 214.398 67.8655 211.807C61.424 209.159 59.6411 197.875 53.9473 194.017C48.196 190.16 37.0959 192.751 32.2073 187.915C27.3187 183.021 29.9643 171.91 26.111 166.153C22.3151 160.453 11.0425 158.611 8.3394 152.22C5.75131 145.887 12.3653 136.676 11.0425 129.767C9.71972 123.089 0 117.101 0 110.078C0 103.054 9.71972 97.0087 11.0425 90.388C12.4228 83.5369 5.75131 74.2678 8.3394 67.9349C10.985 61.4869 22.2576 59.7021 26.111 54.0025C29.9643 48.2453 27.3762 37.1339 32.2073 32.2403C37.0959 27.3467 48.196 29.995 53.9473 26.1377C59.6411 22.3379 61.4815 11.0538 67.8655 8.34793C74.1919 5.7572 83.394 12.378 90.2956 11.0538C96.9671 9.72965 102.948 0 109.965 0C116.982 0 123.021 9.72965 129.635 11.0538C136.479 12.4355 145.738 5.7572 152.065 8.34793C158.506 10.9962 160.289 22.2803 165.983 26.1377C171.734 29.995 182.834 27.4043 187.723 32.2403C192.611 37.1339 189.966 48.2453 193.819 54.0025C197.615 59.7021 208.888 61.5444 211.591 67.9349C214.179 74.2678 207.565 83.4793 208.888 90.388C210.21 97.0663 219.93 103.054 219.93 110.078Z" />
      </mask>
      <path d="M208.888 129.767L211.752 130.344L211.753 130.34L208.888 129.767ZM211.591 152.22L214.294 153.33L214.296 153.326L211.591 152.22ZM193.819 166.153L191.398 164.516L191.391 164.527L193.819 166.153ZM187.723 187.915L189.79 189.98L189.796 189.974L189.802 189.968L187.723 187.915ZM165.983 194.017L167.605 196.448L167.611 196.445L165.983 194.017ZM152.065 211.807L153.172 214.512L153.189 214.505L153.205 214.498L152.065 211.807ZM129.635 209.101L129.084 206.231L129.075 206.233L129.066 206.235L129.635 209.101ZM90.2956 209.101L89.7172 211.966L89.7219 211.967L90.2956 209.101ZM67.8655 211.807L66.7542 214.51L66.758 214.512L67.8655 211.807ZM53.9473 194.017L55.5864 191.598L55.5751 191.59L53.9473 194.017ZM32.2073 187.915L30.1398 189.98L30.1459 189.986L30.1521 189.992L32.2073 187.915ZM26.111 166.153L23.6786 167.773L23.6823 167.778L26.111 166.153ZM8.3394 152.22L5.63417 153.326L5.64092 153.342L5.64787 153.359L8.3394 152.22ZM11.0425 129.767L13.9128 129.218L13.911 129.208L13.9092 129.199L11.0425 129.767ZM11.0425 90.388L8.17767 89.8108L8.17675 89.8154L11.0425 90.388ZM8.3394 67.9349L5.63571 66.8256L5.63417 66.8294L8.3394 67.9349ZM26.111 54.0025L28.532 55.6393L28.5396 55.628L26.111 54.0025ZM32.2073 32.2403L30.1398 30.1749L30.1337 30.181L30.1276 30.1872L32.2073 32.2403ZM53.9473 26.1377L52.3251 23.7068L52.3195 23.7106L53.9473 26.1377ZM67.8655 8.34793L66.758 5.6435L66.7414 5.65027L66.725 5.65724L67.8655 8.34793ZM90.2956 11.0538L90.8462 13.9239L90.8554 13.9221L90.8645 13.9203L90.2956 11.0538ZM129.635 11.0538L130.213 8.18918L130.208 8.18826L129.635 11.0538ZM152.065 8.34793L153.176 5.64504L153.172 5.6435L152.065 8.34793ZM165.983 26.1377L164.344 28.5572L164.355 28.5647L165.983 26.1377ZM187.723 32.2403L189.79 30.1749L189.784 30.1688L189.778 30.1627L187.723 32.2403ZM193.819 54.0025L196.251 52.3826L196.248 52.377L193.819 54.0025ZM211.591 67.9349L214.296 66.8294L214.289 66.8128L214.282 66.7964L211.591 67.9349ZM208.888 90.388L206.017 90.9375L206.019 90.9467L206.021 90.9558L208.888 90.388ZM217.008 110.078C217.008 111.151 216.636 112.343 215.843 113.754C215.043 115.178 213.927 116.631 212.63 118.239C211.388 119.778 209.94 121.505 208.757 123.238C207.569 124.978 206.465 126.978 206.022 129.195L211.753 130.34C211.972 129.246 212.578 128.008 213.585 126.533C214.596 125.051 215.826 123.586 217.179 121.909C218.478 120.299 219.875 118.51 220.938 116.618C222.009 114.714 222.852 112.516 222.852 110.078H217.008ZM206.023 129.19C205.567 131.451 205.802 133.754 206.227 135.855C206.65 137.946 207.325 140.106 207.889 142.016C208.478 144.007 208.961 145.769 209.168 147.376C209.373 148.972 209.269 150.175 208.885 151.115L214.296 153.326C215.206 151.099 215.239 148.769 214.965 146.631C214.691 144.505 214.078 142.334 213.495 140.36C212.887 138.305 212.314 136.467 211.956 134.695C211.599 132.934 211.518 131.509 211.752 130.344L206.023 129.19ZM208.887 151.111C208.488 152.083 207.705 153.026 206.441 154.013C205.165 155.009 203.583 155.914 201.767 156.897C200.027 157.839 198.023 158.876 196.253 160.03C194.474 161.19 192.677 162.624 191.398 164.516L196.24 167.789C196.888 166.832 197.945 165.905 199.446 164.926C200.956 163.941 202.658 163.06 204.549 162.037C206.363 161.056 208.336 159.949 210.039 158.619C211.753 157.28 213.371 155.581 214.294 153.33L208.887 151.111ZM191.391 164.527C190.115 166.432 189.459 168.642 189.052 170.736C188.646 172.821 188.443 175.07 188.232 177.047C188.012 179.109 187.78 180.922 187.352 182.49C186.928 184.046 186.367 185.129 185.643 185.862L189.802 189.968C191.494 188.254 192.422 186.113 192.991 184.029C193.557 181.957 193.825 179.716 194.043 177.668C194.271 175.536 194.445 173.622 194.789 171.851C195.131 170.09 195.596 168.752 196.248 167.778L191.391 164.527ZM185.655 185.849C184.923 186.582 183.844 187.147 182.297 187.573C180.736 188.002 178.928 188.232 176.871 188.448C174.898 188.656 172.649 188.854 170.566 189.255C168.473 189.658 166.262 190.312 164.355 191.59L167.611 196.445C168.58 195.795 169.912 195.333 171.671 194.995C173.44 194.654 175.35 194.485 177.482 194.261C179.53 194.046 181.773 193.779 183.847 193.208C185.936 192.634 188.078 191.694 189.79 189.98L185.655 185.849ZM164.361 191.587C162.465 192.852 161.025 194.642 159.861 196.416C158.701 198.183 157.66 200.184 156.713 201.93C155.726 203.751 154.819 205.342 153.821 206.632C152.83 207.911 151.889 208.708 150.924 209.117L153.205 214.498C155.432 213.554 157.115 211.925 158.443 210.209C159.763 208.503 160.869 206.529 161.852 204.715C162.875 202.827 163.761 201.126 164.747 199.623C165.728 198.128 166.654 197.083 167.605 196.448L164.361 191.587ZM150.957 209.103C150.016 209.488 148.816 209.593 147.229 209.392C145.629 209.189 143.876 208.711 141.892 208.126C139.988 207.565 137.834 206.892 135.745 206.466C133.645 206.038 131.347 205.797 129.084 206.231L130.185 211.971C131.373 211.744 132.813 211.833 134.577 212.193C136.353 212.555 138.189 213.128 140.239 213.732C142.209 214.313 144.373 214.922 146.494 215.19C148.628 215.461 150.95 215.422 153.172 214.512L150.957 209.103ZM129.066 206.235C126.837 206.677 124.83 207.782 123.085 208.974C121.349 210.159 119.625 211.61 118.089 212.854C116.486 214.153 115.04 215.269 113.623 216.07C112.219 216.863 111.034 217.233 109.965 217.233V223.078C112.404 223.078 114.598 222.232 116.497 221.159C118.384 220.093 120.166 218.694 121.769 217.395C123.439 216.042 124.901 214.812 126.381 213.801C127.854 212.795 129.097 212.187 130.203 211.968L129.066 206.235ZM109.965 217.233C108.895 217.233 107.705 216.862 106.296 216.068C104.874 215.267 103.422 214.15 101.817 212.852C100.278 211.609 98.5535 210.159 96.8223 208.975C95.0838 207.786 93.0848 206.679 90.8693 206.236L89.7219 211.967C90.8133 212.185 92.0495 212.792 93.5226 213.799C95.0033 214.812 96.4667 216.043 98.142 217.397C99.7499 218.697 101.537 220.096 103.427 221.161C105.33 222.232 107.527 223.078 109.965 223.078V217.233ZM90.8739 206.237C88.6133 205.78 86.3115 206.016 84.2123 206.441C82.1229 206.865 79.9651 207.54 78.0566 208.106C76.0675 208.695 74.3083 209.178 72.7033 209.385C71.1105 209.59 69.91 209.487 68.9729 209.103L66.758 214.512C68.9841 215.423 71.3135 215.457 73.45 215.182C75.5744 214.908 77.7441 214.294 79.7162 213.71C81.7689 213.102 83.6047 212.529 85.3741 212.17C87.1336 211.813 88.5558 211.731 89.7172 211.966L90.8739 206.237ZM68.9767 209.104C68.0065 208.705 67.0655 207.922 66.0788 206.656C65.083 205.379 64.1793 203.795 63.1974 201.977C62.2566 200.235 61.2204 198.229 60.0676 196.458C58.9089 194.678 57.4767 192.879 55.5864 191.598L52.3082 196.437C53.2648 197.085 54.1906 198.143 55.1689 199.646C56.1531 201.158 57.0327 202.862 58.0546 204.754C59.0354 206.57 60.1409 208.546 61.4691 210.249C62.8063 211.965 64.5036 213.585 66.7542 214.51L68.9767 209.104ZM55.5751 191.59C53.6713 190.314 51.463 189.656 49.3703 189.248C47.2871 188.842 45.0398 188.639 43.0645 188.427C41.0056 188.207 39.1943 187.976 37.6291 187.547C36.0759 187.122 34.9946 186.561 34.2626 185.837L30.1521 189.992C31.8644 191.686 34.0038 192.615 36.0865 193.185C38.1573 193.752 40.397 194.02 42.4431 194.239C44.5728 194.467 46.4844 194.641 48.2528 194.985C50.0117 195.328 51.3476 195.793 52.3195 196.445L55.5751 191.59ZM34.2748 185.849C33.5424 185.116 32.978 184.036 32.5524 182.486C32.1232 180.923 31.8936 179.112 31.6774 177.053C31.4701 175.078 31.272 172.827 30.8717 170.742C30.4694 168.648 29.8166 166.435 28.5396 164.527L23.6823 167.778C24.332 168.749 24.7936 170.084 25.1317 171.845C25.4719 173.616 25.6404 175.528 25.8645 177.663C26.0796 179.712 26.3461 181.957 26.9161 184.033C27.4899 186.123 28.428 188.267 30.1398 189.98L34.2748 185.849ZM28.5433 164.533C27.2796 162.635 25.4916 161.194 23.7189 160.028C21.9539 158.867 19.9544 157.825 18.2102 156.877C16.3915 155.89 14.8017 154.981 13.5138 153.982C12.2359 152.991 11.4399 152.049 11.0309 151.082L5.64787 153.359C6.59047 155.587 8.21719 157.271 9.93178 158.601C11.6363 159.923 13.6088 161.03 15.4206 162.014C17.3069 163.038 19.0062 163.924 20.5069 164.911C21.9999 165.894 23.0444 166.82 23.6786 167.773L28.5433 164.533ZM11.0446 151.115C10.6589 150.171 10.5543 148.968 10.7553 147.378C10.9578 145.776 11.4357 144.021 12.02 142.035C12.5809 140.129 13.2526 137.973 13.678 135.882C14.1056 133.781 14.3463 131.481 13.9128 129.218L8.17225 130.317C8.40019 131.507 8.31012 132.95 7.95055 134.717C7.58872 136.495 7.01674 138.333 6.41291 140.385C5.83263 142.357 5.22493 144.523 4.9566 146.645C4.68666 148.78 4.7259 151.103 5.63417 153.326L11.0446 151.115ZM13.9092 129.199C13.4676 126.97 12.3643 124.962 11.1741 123.215C9.98971 121.477 8.54089 119.752 7.29768 118.214C6.00002 116.61 4.88485 115.162 4.08526 113.743C3.29301 112.338 2.92241 111.15 2.92241 110.078H-2.92241C-2.92241 112.517 -2.07804 114.712 -1.00651 116.613C0.0576827 118.501 1.45512 120.285 2.75274 121.889C4.10481 123.562 5.33394 125.024 6.34405 126.507C7.34836 127.98 7.95608 129.226 8.1758 130.335L13.9092 129.199ZM2.92241 110.078C2.92241 109.004 3.29361 107.812 4.08692 106.401C4.88704 104.977 6.00296 103.524 7.29969 101.917C8.54196 100.377 9.99005 98.6502 11.1728 96.9174C12.3607 95.1771 13.4655 93.1769 13.9083 90.9605L8.17675 89.8154C7.95816 90.9095 7.35192 92.1476 6.34534 93.6223C5.3336 95.1046 4.10374 96.5696 2.75073 98.2466C1.45218 99.8562 0.055494 101.645 -1.00817 103.537C-2.07865 105.441 -2.92241 107.639 -2.92241 110.078H2.92241ZM13.9074 90.9652C14.363 88.7039 14.1281 86.4011 13.7029 84.3002C13.2796 82.2091 12.6053 80.0495 12.0406 78.1389C11.4522 76.1478 10.9692 74.3863 10.7626 72.7789C10.5575 71.1835 10.6606 69.9801 11.0446 69.0405L5.63417 66.8294C4.72414 69.0562 4.69066 71.3863 4.96545 73.5241C5.23871 75.6498 5.85204 77.8212 6.43545 79.7954C7.04265 81.85 7.61562 83.6881 7.9742 85.4597C8.3308 87.2216 8.41225 88.6465 8.17767 89.8108L13.9074 90.9652ZM11.0431 69.0442C11.442 68.0719 12.2254 67.1296 13.4894 66.1423C14.7653 65.1457 16.3469 64.2411 18.1631 63.2583C19.9032 62.3166 21.9074 61.2791 23.677 60.125C25.4558 58.9649 27.2529 57.5312 28.532 55.6393L23.6899 52.3657C23.0423 53.3236 21.9853 54.2503 20.4841 55.2294C18.9737 56.2144 17.2718 57.0948 15.3814 58.1178C13.5671 59.0996 11.5937 60.2065 9.89145 61.5361C8.17736 62.875 6.55956 64.5739 5.63571 66.8256L11.0431 69.0442ZM28.5396 55.628C29.8146 53.723 30.4714 51.5134 30.8785 49.4191C31.2838 47.3343 31.4874 45.0852 31.6984 43.1077C31.9184 41.0466 32.1497 39.2328 32.5777 37.6654C33.0026 36.1096 33.5634 35.0264 34.287 34.2934L30.1276 30.1872C28.4357 31.901 27.5084 34.0418 26.9393 36.1257C26.3735 38.1979 26.1052 40.4393 25.8866 42.4874C25.6591 44.6191 25.4853 46.5332 25.1411 48.3039C24.7987 50.0651 24.334 51.4034 23.6823 52.377L28.5396 55.628ZM34.2748 34.3057C35.0071 33.5727 36.0856 33.0081 37.633 32.5824C39.194 32.153 41.002 31.9232 43.0595 31.7068C45.0321 31.4993 47.281 31.3009 49.3638 30.9001C51.4571 30.4973 53.6684 29.8436 55.5751 28.5647L52.3195 23.7106C51.3505 24.3604 50.0176 24.8222 48.2593 25.1606C46.4905 25.501 44.5805 25.6697 42.4481 25.894C40.4006 26.1094 38.1576 26.3761 36.0826 26.947C33.9941 27.5216 31.8519 28.4611 30.1398 30.1749L34.2748 34.3057ZM55.5695 28.5685C57.4654 27.3033 58.9048 25.5133 60.0694 23.7393C61.2291 21.9726 62.2704 19.9713 63.2168 18.2252C64.2037 16.4046 65.1112 14.813 66.1093 13.5235C67.0996 12.2439 68.0412 11.4475 69.0059 11.0386L66.725 5.65724C64.4977 6.60129 62.8152 8.23013 61.4871 9.94607C60.1667 11.6521 59.0613 13.6264 58.0783 15.44C57.0549 17.3282 56.1695 19.0294 55.1833 20.5318C54.2019 22.0267 53.2761 23.0722 52.3251 23.7068L55.5695 28.5685ZM68.9729 11.0524C69.9143 10.6669 71.1145 10.5622 72.7013 10.7632C74.3009 10.9659 76.0544 11.444 78.0383 12.029C79.9421 12.5903 82.0965 13.2629 84.185 13.6888C86.2846 14.117 88.5831 14.3581 90.8462 13.9239L89.7449 8.18374C88.5573 8.4116 87.1174 8.32168 85.3529 7.96184C83.5772 7.59973 81.7416 7.0273 79.6913 6.42279C77.7213 5.84193 75.5567 5.23343 73.4359 4.96473C71.3023 4.6944 68.9798 4.73363 66.758 5.6435L68.9729 11.0524ZM90.8645 13.9203C93.0936 13.4779 95.0999 12.3729 96.8447 11.1815C98.5811 9.9958 100.305 8.54541 101.841 7.30098C103.444 6.00195 104.89 4.8858 106.307 4.08557C107.711 3.29267 108.896 2.92241 109.965 2.92241V-2.92241C107.526 -2.92241 105.332 -2.07646 103.433 -1.00368C101.546 0.0617813 99.7642 1.46081 98.1611 2.75971C96.4906 4.11322 95.0295 5.34351 93.5488 6.35457C92.0765 7.3599 90.8333 7.96766 89.7266 8.18731L90.8645 13.9203ZM109.965 2.92241C111.035 2.92241 112.225 3.29327 113.634 4.08724C115.056 4.888 116.508 6.0049 118.113 7.30299C119.652 8.54648 121.377 9.99614 123.108 11.1802C124.846 12.3693 126.845 13.4758 129.061 13.9194L130.208 8.18826C129.117 7.96974 127.881 7.36347 126.407 6.35586C124.927 5.34317 123.463 4.11214 121.788 2.7577C120.18 1.45786 118.393 0.059588 116.503 -1.00535C114.6 -2.07707 112.403 -2.92241 109.965 -2.92241V2.92241ZM129.056 13.9184C131.317 14.3748 133.619 14.1395 135.718 13.7137C137.807 13.2899 139.965 12.6148 141.873 12.0496C143.863 11.4606 145.622 10.9773 147.227 10.7705C148.82 10.5654 150.02 10.6686 150.957 11.0524L153.172 5.6435C150.946 4.73187 148.617 4.6984 146.48 4.9736C144.356 5.24723 142.186 5.86136 140.214 6.44536C138.161 7.05323 136.325 7.62665 134.556 7.98551C132.796 8.34238 131.374 8.42367 130.213 8.18919L129.056 13.9184ZM150.953 11.0508C151.924 11.4497 152.865 12.2334 153.851 13.4991C154.847 14.7765 155.751 16.3599 156.733 18.1781C157.673 19.9201 158.71 21.926 159.863 23.6973C161.021 25.4776 162.453 27.2766 164.344 28.5571L167.622 23.7182C166.665 23.0701 165.739 22.0121 164.761 20.509C163.777 18.9968 162.897 17.293 161.876 15.4008C160.895 13.5847 159.789 11.6095 158.461 9.9057C157.124 8.19027 155.426 6.57033 153.176 5.64504L150.953 11.0508ZM164.355 28.5647C166.259 29.8416 168.467 30.4993 170.56 30.9069C172.643 31.3127 174.89 31.5166 176.866 31.7278C178.924 31.948 180.736 32.1795 182.301 32.6078C183.854 33.0328 184.936 33.5938 185.667 34.3179L189.778 30.1627C188.066 28.4688 185.926 27.5401 183.844 26.9702C181.773 26.4036 179.533 26.1349 177.487 25.9161C175.357 25.6884 173.446 25.5144 171.677 25.1699C169.918 24.8273 168.582 24.3624 167.611 23.7106L164.355 28.5647ZM185.655 34.3057C186.388 35.0389 186.952 36.1193 187.378 37.6693C187.807 39.2325 188.037 41.043 188.253 43.1026C188.46 45.0774 188.658 47.3282 189.058 49.4127C189.461 51.5074 190.113 53.7201 191.391 55.628L196.248 52.377C195.598 51.4063 195.137 50.0711 194.798 48.3103C194.458 46.5393 194.29 44.6269 194.066 42.4925C193.85 40.4429 193.584 38.1982 193.014 36.1218C192.44 34.0321 191.502 31.8885 189.79 30.1749L185.655 34.3057ZM191.387 55.6224C192.65 57.5199 194.439 58.9608 196.211 60.1268C197.976 61.2879 199.976 62.3304 201.72 63.2777C203.539 64.2655 205.128 65.1739 206.416 66.1728C207.694 67.1639 208.49 68.1066 208.899 69.0734L214.282 66.7964C213.34 64.568 211.713 62.884 209.998 61.5542C208.294 60.2322 206.321 59.1256 204.509 58.1415C202.623 57.117 200.924 56.2309 199.423 55.2438C197.93 54.2616 196.886 53.3349 196.251 52.3826L191.387 55.6224ZM208.885 69.0405C209.271 69.9844 209.376 71.1875 209.175 72.7768C208.972 74.3788 208.494 76.1346 207.91 78.1206C207.349 80.0265 206.677 82.1827 206.252 84.2729C205.824 86.3742 205.584 88.6737 206.017 90.9375L211.758 89.8384C211.53 88.6479 211.62 87.2053 211.98 85.4385C212.341 83.6605 212.913 81.8226 213.517 79.7705C214.097 77.7984 214.705 75.6321 214.973 73.51C215.243 71.375 215.204 69.0519 214.296 66.8294L208.885 69.0405ZM206.021 90.9558C206.463 93.1857 207.566 95.1932 208.756 96.9398C209.94 98.6779 211.389 100.403 212.632 101.941C213.93 103.546 215.045 104.993 215.845 106.412C216.637 107.818 217.008 109.005 217.008 110.078H222.852C222.852 107.638 222.008 105.443 220.937 103.542C219.872 101.654 218.475 99.8705 217.177 98.2657C215.825 96.5936 214.596 95.1309 213.586 93.6485C212.582 92.1747 211.974 90.9294 211.754 89.8201L206.021 90.9558Z" fill={primaryColor} mask="url(#path-1-inside-1_203_1856)" />
      <path d="M40.8391 73.6997C41.1252 72.1862 42.584 71.1912 44.0974 71.4773L175.713 96.3652C177.227 96.6514 178.221 98.1103 177.935 99.6239L161.884 184.525C161.598 186.039 160.139 187.034 158.626 186.748L27.0102 161.86C25.4968 161.574 24.5019 160.115 24.7881 158.601L40.8391 73.6997Z" fill={primaryColor} />
      <path d="M35.3994 65.4216C35.6855 63.9081 37.1443 62.9131 38.6577 63.1993L170.274 88.0871C171.787 88.3733 172.782 89.8323 172.496 91.3458L156.445 176.247C156.158 177.761 154.7 178.756 153.186 178.47L21.5705 153.582C20.0571 153.296 19.0622 151.837 19.3484 150.323L35.3994 65.4216Z" fill="white" />
      <path clipRule="evenodd" d="M39.176 60.4588L170.792 85.3466C173.819 85.919 175.808 88.8369 175.236 91.864L159.185 176.765C158.613 179.792 155.695 181.782 152.668 181.21L21.0526 156.322C18.0258 155.75 16.036 152.832 16.6083 149.805L32.6593 64.9035C33.2316 61.8764 36.1492 59.8864 39.176 60.4588ZM38.6579 63.1993C37.1445 62.9131 35.6857 63.9081 35.3996 65.4217L19.3486 150.323C19.0624 151.837 20.0573 153.296 21.5707 153.582L153.186 178.47C154.7 178.756 156.159 177.761 156.445 176.247L172.496 91.3458C172.782 89.8323 171.787 88.3733 170.274 88.0871L38.6579 63.1993Z" fill={primaryColor} fillRule="evenodd" />
      <path clipRule="evenodd" d="M50.8167 99.3048C50.9598 98.548 51.6892 98.0505 52.4459 98.1936L144.663 115.631C145.42 115.774 145.917 116.504 145.774 117.261C145.631 118.018 144.902 118.515 144.145 118.372L51.9278 100.934C51.1711 100.791 50.6736 100.062 50.8167 99.3048Z" fill={primaryColor} fillRule="evenodd" />
      <path clipRule="evenodd" d="M82.0123 89.2285C82.1554 88.4718 82.8848 87.9743 83.6415 88.1174L116.84 94.395C117.596 94.5381 118.094 95.2675 117.951 96.0243C117.808 96.7811 117.078 97.2786 116.322 97.1355L83.1234 90.8579C82.3667 90.7148 81.8693 89.9853 82.0123 89.2285Z" fill={primaryColor} fillRule="evenodd" />
      <path clipRule="evenodd" d="M49.4799 106.376C49.623 105.619 50.3524 105.121 51.1091 105.264L143.326 122.702C144.083 122.845 144.58 123.575 144.437 124.332C144.294 125.088 143.565 125.586 142.808 125.443L50.591 108.005C49.8343 107.862 49.3369 107.132 49.4799 106.376Z" fill={primaryColor} fillRule="evenodd" />
      <path clipRule="evenodd" d="M47.9057 114.702C48.0488 113.945 48.7782 113.448 49.5349 113.591L141.752 131.029C142.509 131.172 143.006 131.901 142.863 132.658C142.72 133.415 141.991 133.912 141.234 133.769L49.0168 116.332C48.2601 116.189 47.7627 115.459 47.9057 114.702Z" fill={primaryColor} fillRule="evenodd" />
      <path clipRule="evenodd" d="M46.3365 123.003C46.4796 122.246 47.209 121.749 47.9657 121.892L140.183 139.329C140.94 139.472 141.437 140.202 141.294 140.959C141.151 141.716 140.421 142.213 139.665 142.07L47.4475 124.632C46.6908 124.489 46.1934 123.76 46.3365 123.003Z" fill={primaryColor} fillRule="evenodd" />
      <path clipRule="evenodd" d="M44.8836 130.688C45.0267 129.931 45.7561 129.434 46.5128 129.577L89.5475 137.714C90.3042 137.857 90.8016 138.587 90.6585 139.344C90.5155 140.1 89.7861 140.598 89.0294 140.455L45.9947 132.317C45.238 132.174 44.7405 131.445 44.8836 130.688Z" fill={primaryColor} fillRule="evenodd" />
      <path d="M128.612 157.509L143.367 160.3L138.427 186.43L132.444 177.657L123.672 183.64L128.612 157.509Z" fill="#6BAD4C" />
      <path clipRule="evenodd" d="M125.872 156.991C126.158 155.478 127.617 154.483 129.13 154.769L143.885 157.559C145.399 157.845 146.393 159.304 146.107 160.818L141.167 186.949C140.958 188.057 140.101 188.93 138.997 189.161C137.893 189.391 136.758 188.934 136.123 188.002L131.712 181.533L125.243 185.945C124.311 186.58 123.089 186.592 122.145 185.974C121.201 185.356 120.722 184.231 120.932 183.122L125.872 156.991ZM132.444 177.657L138.427 186.43L143.367 160.299L128.612 157.509L123.672 183.64L132.444 177.657Z" fill={primaryColor} fillRule="evenodd" />
      <path d="M148.295 162.101C147.027 168.808 140.631 173.23 134.011 171.978C127.39 170.726 123.05 164.274 124.318 157.568C125.586 150.861 131.981 146.439 138.602 147.691C145.223 148.943 149.562 155.395 148.295 162.101Z" fill="#6BAD4C" />
      <path clipRule="evenodd" d="M151.034 162.62C149.487 170.807 141.659 176.263 133.492 174.718C125.325 173.174 120.03 165.236 121.578 157.049C123.125 148.862 130.953 143.406 139.12 144.951C147.287 146.495 152.582 154.433 151.034 162.62ZM134.01 171.978C140.631 173.23 147.026 168.808 148.294 162.101C149.562 155.395 145.223 148.943 138.602 147.691C131.981 146.439 125.586 150.861 124.318 157.568C123.05 164.274 127.389 170.726 134.01 171.978Z" fill={primaryColor} fillRule="evenodd" />
      <path clipRule="evenodd" d="M145.449 161.563C144.492 166.625 139.645 170.02 134.563 169.059C129.481 168.098 126.208 163.167 127.165 158.106C128.122 153.044 132.969 149.648 138.051 150.609C143.133 151.57 146.406 156.501 145.449 161.563ZM135.081 166.319C138.617 166.987 142.032 164.626 142.709 161.045C143.386 157.464 141.068 154.018 137.533 153.35C133.997 152.681 130.582 155.042 129.905 158.624C129.228 162.205 131.545 165.65 135.081 166.319Z" fill={primaryColor} fillRule="evenodd" />
      <path d="M203.064 85.1772L203.066 85.1752C206.41 82.0753 209.955 79.0804 213.428 76.1465C213.677 75.9356 213.927 75.725 214.175 75.5147C214.523 75.2219 214.872 74.9272 215.224 74.631C216.383 73.655 217.562 72.6622 218.73 71.6641C218.798 71.6112 218.852 71.563 218.884 71.534C218.893 71.5254 218.904 71.516 218.912 71.5079C218.922 71.4992 218.93 71.4918 218.934 71.4881C218.941 71.4819 218.944 71.479 218.945 71.4781C218.983 71.4449 219.024 71.4098 219.067 71.3731C219.298 71.1738 219.585 70.9275 219.849 70.6634L219.856 70.6572L219.862 70.651C219.871 70.6411 219.882 70.6299 219.895 70.6175C220.058 70.4528 220.44 70.0663 220.7 69.5531C221.016 68.9289 221.169 68.0909 220.781 67.1757C220.246 65.9129 219.159 65.031 217.736 64.9203L217.725 64.9195L217.715 64.9188C217.05 64.8769 216.373 64.9287 215.71 65.0981L215.696 65.1018L215.693 65.1025C208.883 66.8574 202.627 68.4553 196.614 69.9914L193.715 70.7321L190.815 71.4727C190.163 71.6394 189.565 71.8897 188.996 72.2278L188.989 72.2319L188.982 72.2361C188.462 72.5534 188.003 73.0045 187.729 73.6075C187.451 74.2194 187.414 74.8765 187.561 75.5047C187.695 76.0828 187.976 76.6234 188.444 77.0542C188.898 77.4718 189.445 77.7098 190.001 77.8373C190.798 78.0313 191.491 77.858 191.828 77.7719L191.978 77.7335L192.128 77.6951L192.272 77.6585L192.415 77.6219L203.668 74.7472L205.789 74.2055C201.71 77.7033 197.606 81.4116 193.351 85.4505L193.083 85.6954L192.806 85.9481C192.806 85.9482 192.806 85.9483 192.806 85.9484C192.769 85.9821 192.731 86.0166 192.692 86.0519C192.34 86.3717 191.914 86.7582 191.527 87.1947C190.976 87.8079 190.554 88.5681 190.619 89.4842C190.677 90.3242 191.133 90.9755 191.495 91.4175C192.352 92.4919 193.497 92.8806 194.232 93.1301C194.254 93.1376 194.275 93.1449 194.296 93.1522C194.297 93.1525 194.298 93.1528 194.299 93.1531L198.106 94.4671L201.916 95.7821C201.916 95.7823 201.917 95.7824 201.917 95.7826C203.299 96.2624 204.679 96.7385 206.058 97.2141L206.063 97.2157C207.441 97.6911 208.817 98.1658 210.194 98.644L210.203 98.647C210.414 98.7188 210.625 98.7911 210.836 98.8636C208.995 99.1662 207.083 99.4858 205.207 99.842C204.003 100.063 202.783 100.315 201.615 100.556C201.536 100.572 201.456 100.589 201.377 100.605L201.376 100.605C199.466 101.001 197.506 101.397 195.562 101.713L195.554 101.714L195.547 101.716C194.577 101.884 193.569 102.094 192.442 102.382L192.428 102.386C192.14 102.459 191.805 102.545 191.467 102.647C190.561 102.903 189.656 103.439 189.218 104.441C188.786 105.423 188.94 106.45 189.38 107.359C189.503 107.622 189.656 107.837 189.745 107.958C189.755 107.974 189.77 107.997 189.786 108.021C189.808 108.053 189.843 108.104 189.892 108.164C194.315 114.765 198.192 120.705 201.736 126.289C201.967 126.666 202.292 127.151 202.757 127.573C203.608 128.363 204.807 128.619 205.893 128.341C206.375 128.218 206.841 127.995 207.253 127.638C208.048 126.957 208.336 126.093 208.312 125.293C208.291 124.567 208.018 123.961 207.822 123.607L207.815 123.595C207.629 123.267 207.432 122.951 207.224 122.628L207.223 122.626L205.66 120.202C203.792 117.304 201.851 114.301 199.924 111.354C199.154 110.171 198.364 108.966 197.597 107.803C198.21 107.675 198.826 107.555 199.431 107.441L199.44 107.44C199.687 107.392 199.939 107.343 200.189 107.294C200.439 107.246 200.687 107.197 200.933 107.15C200.934 107.15 200.935 107.149 200.936 107.149L201.629 107.018L201.629 107.018L201.639 107.016C202.06 106.933 202.482 106.849 202.905 106.765C205.399 106.27 207.924 105.769 210.439 105.359L210.447 105.358C213.628 104.821 216.857 104.241 219.977 103.658C220.569 103.553 221.156 103.445 221.738 103.338L221.742 103.337C222.326 103.23 222.905 103.123 223.487 103.02C223.71 102.983 223.917 102.93 224.049 102.896L224.065 102.892C224.77 102.712 225.471 102.409 226.005 101.868C226.58 101.286 226.841 100.55 226.837 99.775C226.832 98.7151 226.389 97.9181 225.722 97.3858C225.187 96.9587 224.548 96.7468 224.205 96.6328C224.198 96.6304 224.191 96.628 224.184 96.6257C224.064 96.5807 223.956 96.5518 223.883 96.5344C223.12 96.2772 222.353 96.0174 221.585 95.7573C219.996 95.2193 218.404 94.6801 216.846 94.1607C215.012 93.5413 213.134 92.9062 211.256 92.271C210.315 91.953 209.374 91.6349 208.439 91.3188C205.859 90.4408 203.32 89.5516 200.624 88.6068L200.621 88.6057C200.328 88.5039 200.033 88.4007 199.735 88.2967C199.823 88.2136 199.911 88.1308 199.998 88.0482C201.04 87.0653 202.037 86.1253 203.064 85.1772ZM191.508 50.8139L191.508 50.8139L191.501 50.8102C190.797 50.4744 189.992 50.3723 189.208 50.5725C188.368 50.7872 187.704 51.3014 187.23 51.9724L187.23 51.9724L187.224 51.9806C186.887 52.4647 186.666 52.9989 186.532 53.3229C186.527 53.3354 186.521 53.3476 186.517 53.3595L186.516 53.3595L186.511 53.3723C185.135 56.7793 183.511 60.1671 181.921 63.4834L181.9 63.5277L181.9 63.5277L181.897 63.5348L181.611 64.1386C181.081 65.2424 180.58 66.3805 180.109 67.4626C179.774 68.2313 179.422 69.0262 179.065 69.7887L179.06 69.8L179.055 69.8113C178.63 70.7593 178.594 71.8785 179.259 72.8391L179.265 72.8489L179.272 72.8587C179.993 73.8648 181.283 74.3606 182.491 74.2463L182.604 74.2355L182.715 74.2073L182.801 74.1854L182.873 74.167L182.942 74.1413C184.023 73.7445 184.797 72.9869 185.285 71.9041C185.64 71.1339 185.999 70.3563 186.359 69.5781C186.901 68.405 187.444 67.2305 187.974 66.0777C188.331 65.3038 188.694 64.5192 189.059 63.7296C189.736 62.2664 190.421 60.7862 191.089 59.3255L191.09 59.3238C191.665 58.0617 192.247 56.7079 192.903 55.0637C193.219 54.3238 193.356 53.4892 193.122 52.6747C192.876 51.8186 192.276 51.1857 191.508 50.8139Z" fill="#FFE931" stroke={primaryColor} strokeWidth="2.92241" />
    </svg>
  )
}) 

CertifIllus.displayName = 'CertifIllus'

export default CertifIllus;
