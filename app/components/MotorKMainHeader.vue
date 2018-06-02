<template>
    <header class="main-header">
        <div class="layout-wrapper">
        <div class="layout layout--middle">
            <div class="layout__item">
            <a href="/" id="header__logo" class="logo"><img class="logo__media" src="img/400x300-WebsparK.jpg"
                                    alt=""></a>
            </div>
            <div class="layout__item layout__item--right">
            <button id="header__share" class="share js-show-share-layer">
                <span class="share__text">Share on</span>
                <span class="share__icon">
                    <svg class="icon icon--share icon--dark" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>share on</title>
                        <path d="M864 704c-45.16 0-85.92 18.738-115.012 48.83l-431.004-215.502c1.314-8.252 2.016-16.706 2.016-25.328s-0.702-17.076-2.016-25.326l431.004-215.502c29.092 30.090 69.852 48.828 115.012 48.828 88.366 0 160-71.634 160-160s-71.634-160-160-160-160 71.634-160 160c0 8.622 0.704 17.076 2.016 25.326l-431.004 215.504c-29.092-30.090-69.852-48.83-115.012-48.83-88.366 0-160 71.636-160 160 0 88.368 71.634 160 160 160 45.16 0 85.92-18.738 115.012-48.828l431.004 215.502c-1.312 8.25-2.016 16.704-2.016 25.326 0 88.368 71.634 160 160 160s160-71.632 160-160c0-88.364-71.634-160-160-160z"></path>
                        </defs>
                    </svg>
                    </span>
            </button>
            </div>
        </div>
        </div>
    </header>
</template>


<script>
export default {
    name: 'MotorKMainHeader'
}
</script>

