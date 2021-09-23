import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// 

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { useState } from "react"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import logoLight from '../assets/images/logo-light.png'
import Something  from '../assets/svg/logo.svg'



const Logo = () => {
  return(
    <Link className="navbar-brand" to="/">
      <div className="logo-light">
        {/* <img src={`${logoLight}`} alt="" className="img-fluid"/> */}
        {/* <svg viewBox="0 0 459 366"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M343.196 14.5476C350.694 15.6135 354.979 16.4582 360.842 18.027C367.613 19.8391 370.533 20.8287 376.21 23.2375C382.273 25.8106 385.456 27.4085 390.489 30.407C395.702 33.5126 397.921 35.108 405.499 41.2016C415.5 49.2424 419.864 54.0436 426.848 64.6868C434.426 76.2355 440.226 92.2286 443.025 109.295C444.311 117.133 444.493 119.773 444.364 128.658C444.237 137.369 444.248 137.274 442.101 148.014C440.679 155.121 439.381 158.728 435.34 166.805C429.274 178.926 427.739 181.35 421.079 189.315C416.753 194.489 406.512 206.071 402.821 209.964C398.799 214.207 398.112 216.525 399.012 222.815C399.281 224.697 399.501 227.658 399.501 229.394C399.499 234.815 398.329 237.773 394.652 241.658C390.32 246.234 386.396 248.125 379.718 248.854C378.322 249.006 376.733 249.343 376.185 249.603C374.058 250.613 373.667 252.67 374.859 256.591C376.375 261.581 376.643 264.332 375.941 267.689C374.998 272.195 371.81 276.559 366.656 280.401C360.157 285.246 357.751 286.032 349.861 285.891C345.309 285.809 345.145 285.826 343.827 286.504C342.098 287.393 341.35 288.803 340.933 291.956C340.396 296.019 339.21 298.121 335.184 302.153C332.127 305.215 329.364 307.135 325.978 308.553C321.834 310.287 319.938 310.672 314.449 310.893C309.276 311.101 308.785 311.214 307.356 312.536C306.302 313.512 305.976 314.198 304.627 318.274C303.105 322.876 301.556 325.559 298.802 328.364C296.364 330.847 292.093 333.815 289.391 334.905C285.487 336.478 279.44 337.459 275.228 337.201C272.174 337.015 269.888 336.522 264.351 334.857C260.699 333.759 259.765 333.58 257.763 333.588C254.628 333.601 253.408 334.218 248.555 338.251C239.623 345.673 232.913 349.009 222.92 350.997C216.075 352.358 214.032 352.535 211.537 351.98C208.759 351.362 205.824 349.838 202.267 347.167C197.418 343.527 194.955 340.505 192.764 335.508C191.252 332.059 190.556 331.133 189.043 330.555C187.406 329.93 186.149 330.294 182.778 332.369C179.391 334.454 177.422 335.245 174.251 335.794C170.731 336.404 164.997 336.213 162.503 335.405C158.939 334.249 154.992 331.338 152.337 327.906C149.086 323.703 147.527 319.954 146.582 314.063C145.966 310.222 145.532 309.196 144.127 308.249C142.7 307.287 141.505 307.444 137.205 309.159C132.291 311.118 130.256 311.564 126.134 311.583C123.208 311.597 122.594 311.512 120.646 310.829C117.863 309.854 115.882 308.649 113.55 306.511C110.233 303.473 108.111 299.85 106.066 293.741C104.963 290.444 104.813 288.69 105.246 284.149C105.445 282.059 105.41 281.529 105.029 280.791C104.162 279.115 102.205 278.687 99.0953 279.493C96.4334 280.182 94.1258 280.402 92.2314 280.146C88.5126 279.644 83.9387 276.595 81.4875 272.986C78.5319 268.633 76.2218 259.729 76.8609 255.15C77.262 252.277 78.0322 249.452 79.7145 244.683C81.8581 238.608 81.8957 238.469 81.8944 236.669C81.893 234.729 81.2067 233.19 79.6546 231.648C79.091 231.088 76.0744 228.802 72.9513 226.567C67.0248 222.328 55.6353 213.446 50.9173 209.385C45.0979 204.376 37.521 196.265 32.8422 190.036C28.2442 183.914 24.261 177.144 20.3846 168.864C17.8868 163.529 17.3943 162.227 16.0767 157.472C13.9009 149.62 13.7194 147.957 13.7257 135.93C13.7312 125.443 13.818 124.45 15.506 115.536C17.6732 104.089 17.8873 103.224 20.5109 95.2985C23.6911 85.6914 25.1051 82.756 31.4134 72.6638C38.4805 61.3572 40.8048 58.6159 49.6825 51.1154C60.4763 41.9966 69.4905 36.1303 80.9314 30.7792C89.4621 26.7895 94.562 24.9044 102.8 22.6954C111.429 20.3818 115.69 19.6401 125.722 18.7051C128.213 18.4728 131.648 18.1 133.354 17.8766C137.337 17.3553 142.304 17.3597 146.458 17.8887C148.264 18.1187 152.464 18.4229 155.79 18.5642C161.2 18.7946 172.267 19.9607 176.919 20.7908C179.673 21.2822 190.777 24.0224 193.115 24.7874C202.54 27.8719 221.049 36.3955 232.373 42.8666C238.066 46.1195 239.877 46.783 241.765 46.3076C243.666 45.8291 244.659 45.2348 249.045 41.9549C258.854 34.6188 270.12 27.7843 277.665 24.5928C288.566 19.9813 302.078 16.2087 313.9 14.4754C319.386 13.6713 319.06 13.6867 328.999 13.7551C337.131 13.8108 338.583 13.8918 343.196 14.5476ZM318.018 23.7948C312.406 24.0463 306.511 25.2253 297.474 27.9034C277.957 33.6874 264.567 40.4846 251.606 51.187C247.581 54.5095 246.163 55.9847 240.205 63.0413C237.72 65.9847 234.005 70.3692 231.95 72.7849C229.895 75.2006 226.669 79.1624 224.782 81.5885C222.894 84.0149 217.351 90.8091 212.462 96.6867C207.574 102.565 202.033 109.35 200.15 111.766C198.267 114.181 195.371 117.751 193.714 119.698C192.058 121.645 189.709 124.548 188.494 126.149C187.279 127.75 185.463 129.986 184.459 131.119C183.455 132.251 181.599 134.475 180.335 136.06C177.63 139.453 167.276 151.876 165.748 153.562C163.775 155.738 163.056 157.14 163.056 158.812C163.056 160.254 163.112 160.373 164.388 161.602C165.52 162.694 166.351 163.133 169.946 164.541C177.926 167.667 180.57 168.288 187.936 168.77C193.695 169.146 203.763 168.756 207.252 168.02C208.385 167.781 211.72 166.791 214.664 165.821C222.837 163.126 232.921 157.959 239.133 153.284C245.114 148.782 252.088 142.209 256.231 137.167C262.379 129.685 266.507 123.918 270.901 116.668C273.675 112.092 275.153 110.473 277.011 109.973C279.592 109.277 281.717 110.252 287.19 114.641C289.246 116.29 292.904 119.096 295.32 120.878C303.808 127.14 312.837 133.989 316.234 136.744C318.121 138.274 323.371 142.438 327.901 145.998C336.508 152.763 337.814 153.867 347.801 162.825C351.167 165.845 355.541 169.722 357.519 171.44C362.805 176.033 374.351 187.736 378.284 192.489C380.166 194.762 383.073 198.283 384.745 200.312C388.504 204.875 389.533 205.649 391.839 205.649C394.114 205.649 394.767 205.153 401.478 198.334C407.598 192.115 411.463 187.305 417.109 178.884C423.123 169.914 426.861 162.192 430.416 151.39C432.943 143.713 433.539 141.525 434.286 137.2C434.942 133.395 434.993 127.95 434.417 123.287C434.193 121.48 433.759 117.345 433.451 114.099C432.693 106.099 432.412 104.633 430.052 96.393C425.962 82.1103 421.574 73.2285 413.466 62.8217C408.362 56.2713 404.471 52.2538 397.655 46.4997C392.926 42.5078 390.33 40.7281 384.725 37.6363C376.816 33.2734 369.731 30.6148 358.783 27.9007C350.067 25.7397 349.67 25.6708 340.528 24.7268C328.688 23.5038 326.521 23.4141 318.018 23.7948ZM136.016 27.7887C133.812 28.1044 127.359 28.7467 123.8 29.0051C116.008 29.5703 111.245 30.4328 101.879 32.9751C86.1597 37.2418 72.8898 43.9333 60.5414 53.8199C55.1431 58.1424 48.311 65.2212 43.9938 70.9654C40.365 75.7941 35.6947 82.885 34.1152 85.9645C31.9567 90.1722 28.5253 100.626 27.1994 107.033C26.5979 109.938 25.8444 113.488 25.5248 114.923C23.6164 123.484 23.119 136.169 24.3249 145.512C24.8015 149.204 26.4974 156.295 27.7588 159.869C30.5652 167.82 36.0052 178.346 40.7076 184.923C43.7187 189.135 46.3518 191.937 53.1134 198.126C61.8522 206.124 68.6859 211.647 84.1333 223.197C96.1251 232.164 120.144 248.344 131.624 255.189C135.248 257.35 140.498 260.566 143.291 262.336C146.084 264.106 150.655 266.887 153.448 268.516C156.241 270.145 159.02 271.815 159.624 272.226C160.517 272.834 188.056 288.663 204.644 298.104C206.758 299.307 212.132 302.175 216.586 304.477C221.04 306.779 226.598 309.656 228.939 310.871C234.316 313.663 247.001 319.407 251.271 320.985C255.15 322.418 267.755 326.439 270.665 327.171C273.38 327.854 277.949 328.098 280.511 327.697C290.224 326.176 296.725 319.22 295.394 311.772C295.02 309.677 293.757 306.84 292.313 304.848C290.176 301.899 284.846 296.106 281.628 293.235C275.217 287.512 264.363 278.735 260.508 276.155C252.129 270.548 231.914 258.042 225.096 254.247C223.51 253.365 220.422 251.628 218.233 250.388C216.043 249.148 212.276 247.051 209.86 245.728C200.9 240.823 193.618 236.682 192.085 235.622C188.225 232.952 187.773 229.176 191.158 227.883C193.336 227.052 195.967 227.877 200.167 230.708C202.642 232.376 208.36 235.697 218.233 241.197C254.735 261.535 274.342 275.248 292.626 293.228C299.469 299.958 300.382 300.59 304.487 301.432C307.308 302.01 313.667 302.006 317.078 301.423C321.578 300.654 325.972 298.741 328.65 296.383C330.231 294.991 331.579 292.38 331.784 290.313C332.087 287.239 330.471 282.344 327.949 278.703C321.454 269.324 319.728 267.169 315.923 263.693C313.357 261.35 311.949 260.154 304.43 253.934C299.227 249.631 290.145 242.806 283.292 238.051C282.009 237.16 278.241 234.498 274.92 232.135C271.598 229.771 266.966 226.476 264.625 224.811C262.285 223.146 257.838 220.147 254.743 218.145C251.648 216.144 246.459 212.707 243.213 210.506C239.967 208.306 235.686 205.419 233.7 204.091C229.235 201.105 227.841 199.476 227.841 197.245C227.841 195.339 229.237 194.088 231.276 194.167C232.786 194.226 234.691 195.203 238.409 197.828C240.07 199.001 243.406 201.223 245.821 202.767C248.237 204.312 252.128 206.898 254.468 208.515C256.809 210.133 261.503 213.339 264.9 215.64C275.614 222.897 280.514 226.303 286.449 230.615C289.62 232.919 294.252 236.261 296.743 238.043C308.45 246.415 315.355 252.303 321.998 259.579C327.943 266.089 332.775 271.096 334.721 272.759C338.765 276.218 341.574 277.017 348.997 276.822C353.385 276.707 353.888 276.639 356.395 275.814C363.343 273.529 367.388 268.471 366.93 262.642C366.621 258.706 365.402 255.95 360.772 248.72C356.932 242.723 356.091 241.625 349.348 233.808C343.605 227.151 333.703 217.151 325.365 209.59C318.795 203.631 303.445 191.011 297.191 186.425C286.405 178.518 271.93 167.68 270.625 166.536C266.951 163.314 267.174 159.659 271.045 159.673C272.845 159.679 274.186 160.412 278.646 163.825C280.522 165.26 283.354 167.341 284.939 168.449C292.094 173.448 310.239 186.779 313.489 189.423C318.005 193.097 324.618 199.059 330.009 204.314C333.131 207.358 337.826 211.76 340.441 214.095C346.032 219.089 347.662 220.766 352.111 226.1C355.72 230.428 359.528 234.268 361.619 235.688C363.565 237.01 365.25 237.507 371.025 238.467C375.246 239.169 376.701 239.303 378.823 239.186C382.388 238.989 385.17 237.998 387.224 236.195C393.451 230.728 390.156 219.318 377.964 204.134C372.239 197.003 363.31 187.243 359.135 183.551C357 181.663 353.917 178.88 352.283 177.365C345.247 170.841 313.338 144.827 304.705 138.575C303.119 137.427 298.637 134.162 294.745 131.318C283.676 123.232 282.279 122.47 279.768 123.146C277.754 123.688 276.432 125.054 271.076 132.133C264.348 141.024 263.338 142.202 256.488 149.139C245.985 159.776 239.092 164.88 227.978 170.251C222.682 172.81 219.687 173.967 214.861 175.319C207.652 177.34 201.024 178.424 193.61 178.798C189.502 179.004 186.936 178.689 179.642 177.083C167.78 174.471 162.002 172.437 155.452 168.567C151.16 166.031 149.056 163.507 149.056 160.893C149.056 159.182 150.422 156.741 152.844 154.13C156.198 150.512 168.624 136.104 172.808 130.982C174.905 128.415 179.343 123.033 182.671 119.022C192.454 107.232 196.97 101.678 201.35 96.0493C202.407 94.6913 207.287 88.7903 212.193 82.9364C224.193 68.6211 230.18 61.254 231.125 59.6387C233.296 55.9325 232.017 53.2808 226.582 50.2166C221.624 47.4216 212.769 42.9777 208.911 41.348C203.82 39.1983 193.166 35.3287 189.272 34.2156C187.611 33.7409 184.152 32.7456 181.585 32.0036C174.762 30.0312 172.994 29.7915 157.428 28.7253C155.012 28.5601 152.295 28.3075 151.389 28.1642C149.642 27.8881 137.41 27.5894 136.016 27.7887ZM197.679 131.14C199.216 131.919 200.834 133.932 201.222 135.548C202.158 139.449 199.901 143.108 193.007 148.869C186.796 154.059 182.804 156.416 179.913 156.6C178.464 156.693 178.129 156.623 177.635 156.13C176.866 155.36 176.903 154.255 177.741 153.022C178.118 152.467 180.311 150.605 182.614 148.883C187.244 145.421 189.149 143.556 190.041 141.61C190.545 140.51 190.637 139.799 190.649 136.884C190.668 132.474 191.09 131.54 193.455 130.681C194.666 130.242 196.245 130.413 197.679 131.14ZM365.245 206.478C367.263 206.993 371.399 208.954 373.551 210.415C375.6 211.806 377.899 214.315 378.143 215.425C378.284 216.066 378.193 216.467 377.787 217.006C377.324 217.62 377.038 217.726 375.867 217.717C374.744 217.709 373.927 217.418 371.425 216.136C366.739 213.736 364.957 213.54 363.034 215.216C361 216.99 361.238 219.234 363.926 223.63C366.409 227.691 366.674 228.601 365.647 229.531C363.182 231.761 357.79 225.851 356.023 218.984C354.876 214.528 355.607 210.268 357.865 208.243C359.224 207.025 359.606 206.8 360.926 206.445C362.651 205.98 363.315 205.986 365.245 206.478ZM339.535 239.705C344.587 241.378 350.519 244.915 352.05 247.168C352.858 248.356 352.923 249.056 352.29 249.755C351.541 250.583 350.404 250.347 345.91 248.431C339.594 245.737 337.988 245.41 335.85 246.381C335.24 246.658 334.421 247.264 334.031 247.728C332.005 250.136 333.135 253.476 338.462 260.826C341.915 265.589 342.312 266.228 342.312 267.014C342.312 268.673 340.702 269.251 338.809 268.272C335.636 266.631 330.93 261.938 328.631 258.122C327.498 256.242 325.757 252.206 325.334 250.479C324.517 247.147 325.289 244.153 327.573 241.793C330.471 238.799 334.613 238.076 339.535 239.705ZM92.4227 242.96C90.9761 243.947 90.2061 244.895 89.2203 246.904C87.6967 250.008 87.1839 252.8 87.1675 258.081C87.1499 263.751 87.6372 265.797 89.5118 267.927C91.4414 270.119 93.5924 270.791 96.9939 270.263C101.005 269.641 104.984 267.905 108.618 265.193C112.778 262.087 115.197 259.389 115.678 257.316C115.947 256.155 115.371 254.465 114.302 253.283C112.654 251.458 103.326 245.529 98.6759 243.35C96.0169 242.104 93.8719 241.97 92.4227 242.96ZM126.558 264.141C124.966 264.832 123.822 265.872 122.101 268.193C118.159 273.509 115.254 282.027 115.204 288.415C115.169 292.969 116.177 296.022 118.589 298.661C122.545 302.99 129.112 303.238 137.244 299.367C141.938 297.132 145.177 294.801 149.198 290.766C155.656 284.286 156.725 281.689 154.309 278.353C152.883 276.385 145.227 271.246 137.541 267.099C131.51 263.845 128.876 263.135 126.558 264.141ZM304.585 265.923C306.673 266.3 310.097 267.966 312.453 269.753C315.338 271.942 316.242 273.583 315.16 274.665C314.377 275.448 312.855 275.411 308.926 274.515C305.245 273.676 304.157 273.817 302.911 275.298C302.263 276.069 302.189 276.355 302.287 277.712C302.425 279.619 302.914 280.579 306.484 285.944C309.709 290.79 310.202 291.924 309.527 292.954C307.831 295.543 300.762 290.411 297.035 283.886C294.997 280.319 293.921 277.125 293.89 274.552C293.87 272.846 293.995 272.07 294.452 271.079C295.234 269.385 297.012 267.65 298.81 266.826C300.034 266.266 300.749 266.057 302.801 265.66C302.886 265.643 303.689 265.762 304.585 265.923ZM164.756 288.302C162.943 289.205 161.277 291.11 159.52 294.288C156.799 299.207 155.837 303.011 155.831 308.866C155.827 312.879 156.185 315.178 157.217 317.787C158.722 321.594 160.933 324.18 163.879 325.584C165.586 326.397 165.813 326.434 169.095 326.422C171.474 326.414 173.073 326.262 174.311 325.928C178.688 324.746 187.151 319.688 192.149 315.268C198.102 310.004 199.377 306.829 196.794 303.703C195.201 301.774 180.935 292.708 175.342 290.07C169.68 287.399 167.35 287.01 164.756 288.302ZM271.566 295.027C272.504 295.343 274.367 296.165 275.705 296.855C281.239 299.709 283.647 302.608 281.92 304.336C281.15 305.105 279.841 305.038 276.429 304.055C271.986 302.774 269.929 302.911 268.848 304.561C267.658 306.378 268.575 308.924 271.946 313.157C275.337 317.416 276.022 319.318 274.657 320.682C273.357 321.983 270.781 321.281 267.579 318.753C265.446 317.069 263.736 314.847 262.293 311.885C260.725 308.666 260.137 306.398 260.124 303.513C260.114 301.527 260.227 300.929 260.88 299.5C262.836 295.221 266.98 293.487 271.566 295.027ZM208.191 312.543C204.847 314.062 201.621 320.303 201.287 325.898C200.987 330.926 202.366 334.597 205.882 338.128C210.022 342.285 214.353 343.372 222.076 342.19C228.669 341.18 239.216 335.573 241.614 331.802C242.886 329.801 242.571 328.06 240.627 326.353C237.637 323.728 220.191 314.602 214.53 312.701C212.078 311.878 209.782 311.821 208.191 312.543Z" fill="currentColor"/>
        </svg> */}
        <Something />        

        
      </div>
      <div className="logo-text">
        Pozytywka<br/>ODT
      </div>
    </Link>
  )
}


const NavLink = ({children, ...props}) => (
  <Link {...props} className="nav-link">{children}</Link>
)

const Navigation = ({className, variant, ...props}) => {

  // const [oldVariant, setVariant] = useState("light")

  // if (oldVariant !== variant) {
  //   setVariant(variant)
  //   console.log("I'm changing navigation variant");    
  // }
  
  
  const allVariants = {
    "light": {
      bg: "light",
      variant: "light",
      button: "dark"
    },
    "dark": {
      bg: "dark",
      variant: "dark",
      button: "light"
    },
    "transparent-light": {
      bg: "transparent-light",
      variant: "light",
      button: "dark"
    },
    "transparent-dark": {
      bg: "transparent-dark",
      variant: "dark",
      button: "light"
    }
  }


  const {button, bg, variant: text } = allVariants[variant]
  

  const [navbarCollapsed, setNavbarCollapsed] = useState(false)
  const collapseStates = ["" ,"show"]

  const eventhandler = data => {
    setNavbarCollapsed(!navbarCollapsed)
    console.log("eventhandler", data)
  }

  const stateClass = collapseStates[+navbarCollapsed]

  

  return(
    <Navbar {...props} className={`${className} ${stateClass} px-md-5`} expand="md" bg={bg} variant={text}>
      <Container fluid>
        <Logo/>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  onClickCapture={eventhandler}/>
        <Navbar.Collapse >
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Start</Link>
            <NavLink to="/oferta">Oferta</NavLink>
            <NavLink to="/nasz-zespol">Nasz Zespół</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
            <Link className="nav-link" to="/aktualnosci">Aktualności</Link>
          </Nav>
          <Nav>
          <Link className={`btn btn-${button}`} to="/rejestracja" role="button">Rejestracja</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Navigation.defaultProps = {
  variant: `light`,
}


const convertRem2Px = (remValue) => {
  if (typeof window !== 'undefined' ) {
    const pxPerRem = parseFloat(getComputedStyle(document.documentElement).fontSize) // [px/rem]
    return remValue*pxPerRem
  }
}

/**
 * 
 * @param { Object } props
 * @param { string } props.siteTitle - Site Title
 * @param { number } props.screensOnHide - number of screens where navbar is hide
 */
const HeaderCollapsible = ({ siteTitle, screensOnHide }) => {
  const HIDDEN_Y = -convertRem2Px(4)
  const HIDDEN_Y_SHIFT = HIDDEN_Y*1.5
  const DRAG_COEFF = 2;
  const isBrowser = typeof window !== "undefined"
  const windowHeight = isBrowser ? window.innerHeight : 0
  const breakpointY = windowHeight*screensOnHide
  
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const [currentPosition, setCurrentPosition] = useState(HIDDEN_Y_SHIFT)

  useScrollPosition( ({ prevPos, currPos }) => {
    const isHidden = Math.abs(currPos.y) < breakpointY  

    if (isHidden !== hideOnScroll) {
      setHideOnScroll(isHidden)
      if (isHidden) {
        setCurrentPosition(HIDDEN_Y)
      }
    }

    if (!isHidden) {
      const dy = -(prevPos.y - currPos.y)/DRAG_COEFF
      let newPosition = currentPosition + dy

      if (newPosition >= HIDDEN_Y_SHIFT) {
        if (dy < 0) {
          newPosition = (newPosition < HIDDEN_Y) ? HIDDEN_Y_SHIFT : newPosition        
        } else {
          newPosition = (newPosition > 0) ? 0 : newPosition
        }
        setCurrentPosition(newPosition)
      }
      console.log("currentPosition", currentPosition);
    } 
  }, [hideOnScroll, currentPosition])


  let triggerClass = "hidden"
  if (!hideOnScroll) {
    triggerClass = "showed"
  }

  const styles = {
    top: currentPosition
  }
  return(
    <div className={`collapsibleNavbar fixed-top ${triggerClass}`} style={styles}>
      <Navigation />
    </div>
  )
}

HeaderCollapsible.defaultProps = {
  siteTitle: ``,
  screensOnHide: 1.5
}
HeaderCollapsible.propTypes = {
  siteTitle: PropTypes.string,
}




const Header = ({ siteTitle, ...props }) => (
  <header className="">
    <Navigation {...props} className="my-navbar" />
  </header>
)


export {HeaderCollapsible, Header}
